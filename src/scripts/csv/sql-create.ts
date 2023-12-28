import path from 'path';
import { createSlugs } from '~/scripts/csv/slugs';
import { loadSuppliers } from '~/scripts/csv/suppliers';
import { processFolder } from '~/scripts/sql';

const main = () => {
  console.time('create');

  processFolder(path.resolve(__dirname, 'sql', 'create'));

  loadSuppliers();
  createSlugs();

  console.timeEnd('create');
};

main();
