import Database from 'better-sqlite3';
import path from 'node:path';

const dbPath = process.env['DATABASE_URL'] ?? path.resolve(process.cwd(), 'db', 'localmedicalsupplies.sqlite');

export const db = new Database(dbPath, {
  fileMustExist: true,
  readonly: true,
  // verbose: (...args) => console.info(`SQL: `, ...args),
});

db.pragma('journal_mode = WAL');
db.pragma('auto_vacuum = NONE');
