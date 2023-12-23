import { readFileSync, readdirSync } from 'fs-extra';
import path from 'path';
import { localeSort } from '~/lib/collections';
import { db } from '~/lib/db/db';

export const processFolder = (folderPath: string) => {
  console.time(`processFolder:${folderPath}`);

  const fileNames = localeSort(readdirSync(folderPath));

  for (const fileName of fileNames) {
    console.time(fileName);

    const filePath = path.resolve(folderPath, fileName);
    const statements = readFileSync(filePath).toString().split(';');

    for (const sqlString of statements) {
      const sqlStatement = sqlString.trim().replace(/\s{1,}/g, ' ');
      console.log(fileName);
      console.log(sqlStatement);

      if (sqlStatement.length && !sqlStatement.startsWith(`--`)) {
        const result = db.prepare(`${sqlStatement};`).run();

        console.log({ result }, '\n');
      }
    }

    console.timeEnd(fileName);
    console.log();
  }

  console.timeEnd(`processFolder:${folderPath}`);
};
