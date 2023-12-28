import { db } from '~/lib/db/db';
import { slugify, sql } from '~/lib/string';

interface IRecord {
  id: number;
  name: string;
}

const tables = ['MANUFACTURER', 'PRODUCT', 'PROVIDERTYPE', 'SPECIALITY', 'SUPPLY'];

const loadRecordsStatement = (tableName: string) =>
  db.prepare(sql`
    SELECT
      id,
      name
    FROM
      ${tableName}
  `);

const updateRecordStatement = (tableName: string) =>
  db.prepare(sql`
    UPDATE ${tableName}
    SET
      slug = :slug
    WHERE
      id = :id
  `);

export const createSlugs = () => {
  console.time(`create slugs`);

  for (const table of tables) {
    console.time(`create slugs - ${table}`);

    const results = loadRecordsStatement(table).all() as IRecord[];

    for (const result of results) {
      const { id, name } = result;
      const slug = slugify(name);
      updateRecordStatement(table).run({ table, id, slug });
    }

    console.timeEnd(`create slugs - ${table}`);
  }

  console.timeEnd(`create slugs`);
};
