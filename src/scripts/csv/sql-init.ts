import path from 'path';
import { processFolder } from '~/scripts/sql';

const main = async () => {
  console.time('init');

  processFolder(path.resolve(__dirname, `sql`, `init`));

  console.timeEnd('init');
};

main();
