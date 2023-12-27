import Database from 'better-sqlite3';
import path from 'node:path';

export const dbOptions =
  process.env.NODE_ENV === 'production'
    ? {
        fileMustExist: true,
        readonly: true,
      }
    : {
        fileMustExist: false,
        readonly: false,
      };

export const dbPath = path.resolve(process.cwd(), 'db', 'localmedicalsupplies.sqlite');

export const db = new Database(dbPath, dbOptions);

db.pragma('journal_mode = WAL');
db.pragma('auto_vacuum = NONE');
