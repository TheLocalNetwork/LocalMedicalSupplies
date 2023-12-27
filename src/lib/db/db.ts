import Database from 'better-sqlite3';
import path from 'node:path';

const dbOptions =
  process.env.NODE_ENV === 'production'
    ? {
        fileMustExist: true,
        readonly: true,
      }
    : {
        fileMustExist: false,
        readonly: false,
      };

const dbPath = path.resolve(process.cwd(), 'db', 'localmedicalsupplies.sqlite');

// eslint-disable-next-line no-console
console.info(`Database Setup`, { dbPath, dbOptions });

export const db = new Database(dbPath, dbOptions);

db.pragma('journal_mode = WAL');
db.pragma('auto_vacuum = NONE');
