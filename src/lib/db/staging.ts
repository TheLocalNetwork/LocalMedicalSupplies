import Database from 'better-sqlite3';
import path from 'node:path';

const dbPath = path.resolve(process.cwd(), `db`, `staging.sqlite`);

export const stagingDb = new Database(dbPath, {
  fileMustExist: false,
  readonly: false,
  // verbose: (...args) => console.info(`SQL: `, ...args),
});

stagingDb.pragma('journal_mode = WAL');
stagingDb.pragma('auto_vacuum = NONE');
