import { db } from '~/lib/db/db';

const main = () => {
  console.time('VACUUM');

  db.exec(`VACUUM;`);

  console.timeEnd('VACUUM');
};

main();
