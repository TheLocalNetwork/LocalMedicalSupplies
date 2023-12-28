import path from 'path';
import { loadSuppliers } from '~/scripts/csv/suppliers';
import { processFolder } from '~/scripts/sql';

const main = () => {
  console.time('create');

  processFolder(path.resolve(__dirname, 'sql', 'create'));

  loadSuppliers();

  console.timeEnd('create');
};

main();
