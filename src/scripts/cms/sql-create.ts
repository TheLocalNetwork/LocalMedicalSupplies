import { readFileSync, readdirSync } from 'fs-extra';
import path from 'path';
import { db } from '~/lib/db/db';

const main = async () => {
  console.time('main');

  const statementsDirectory = path.resolve(__dirname, `sql`, 'create');

  const fileNames = readdirSync(statementsDirectory);

  for (const fileName of fileNames) {
    console.time(fileName);

    const filePath = path.resolve(statementsDirectory, fileName);
    const statements = readFileSync(filePath).toString().split(';');

    for (const sqlString of statements) {
      const sqlStatement = sqlString.trim().replace(/\s{1,}/g, ' ');
      console.log(fileName);
      console.log(sqlStatement);

      if (sqlStatement.length) {
        const result = db.prepare(`${sqlStatement};`).run();

        console.log({ result }, '\n');
      }
    }

    console.timeEnd(fileName);
    console.log();
  }

  console.timeEnd('main');
};

main();
