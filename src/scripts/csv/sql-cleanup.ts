import path from 'path';
import { processFolder } from '~/scripts/sql';

const main = async () => {
  console.time('cleanup');

  processFolder(path.resolve(__dirname, `sql`, `cleanup`));

  console.timeEnd('cleanup');
};

main();
