import {
  getDatasetMeta,
  getFieldNameKey,
  setConfig,
  type IDataGovDatasetMeta,
  type IDataGovDatasetTableSchemaField,
} from '@thelocalnetwork/cms-data-tools';
import { readJSONSync } from 'fs-extra';
import { readdirSync } from 'node:fs';
import path from 'node:path';
import { db } from '~/lib/db/db';
import { CMS_TOOLS_CONFIG } from '~/scripts/cms/config';

type IFieldWithKey = IDataGovDatasetTableSchemaField<any> & { key: string };

const main = async () => {
  setConfig(CMS_TOOLS_CONFIG);
  console.time('main');

  const outputDirectory = path.resolve(process.cwd(), `./.data`);
  const datasetFolders = readdirSync(outputDirectory);

  for (const datasetId of datasetFolders) {
    console.info(datasetId);
    console.time(datasetId);

    const datasetMeta: IDataGovDatasetMeta<any> =
      await getDatasetMeta<any>(datasetId);

    const fields: IFieldWithKey[] =
      datasetMeta.data_file_meta_data.tableSchema.descriptor.fields.map(
        (field) => ({
          ...field,
          key: getFieldNameKey(field),
        })
      );

    const datasetFiles = readdirSync(path.resolve(outputDirectory, datasetId));
    const fieldParams = fields.map(() => `?`);

    sqlCreateTable(datasetId, fields);

    const insertStatement = db.prepare(
      `INSERT INTO "${datasetId}" VALUES (${fieldParams.join(',')})`
    );

    const insertMany = db.transaction((insertData) => {
      for (const row of insertData) insertStatement.run(row);
    });

    for (const fileName of datasetFiles) {
      const filePath = path.resolve(outputDirectory, datasetId, fileName);
      // const timerLabel = `${datasetId} ${fileName}`;
      // console.time(timerLabel);

      const data = readJSONSync(filePath);
      insertMany(data);

      // console.timeEnd(timerLabel);
    }

    console.timeEnd(datasetId);
  }

  db.exec(`VACUUM;`);
  console.timeEnd('main');
};

const sqlCreateTable = (tableName: string, fields: IFieldWithKey[]) => {
  const sqlSchema = getCreateTableSchema(tableName, fields);
  return db.exec(sqlSchema);
};

const getCreateTableSchema = (tableName: string, fields: IFieldWithKey[]) => {
  const sqlFieldsSchema = fields
    .map((field) => `${field.key} ${field.type} NOT NULL`)
    .join(`,\n`);

  const sqlSchema = `
    DROP TABLE IF EXISTS "${tableName}";
    CREATE TABLE "${tableName}" (
      ${sqlFieldsSchema}
    );
  `;

  return sqlSchema;
};

main();
