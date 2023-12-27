import Database from 'better-sqlite3';
import path from 'node:path';

const dbPath = path.resolve(process.cwd(), 'db', 'localmedicalsupplies.sqlite');

export const db = new Database(dbPath, {
  fileMustExist: false,
  readonly: false,
  // verbose: (...args) => console.info(`SQL: `, ...args),
});

db.pragma('journal_mode = WAL');
db.pragma('auto_vacuum = NONE');
