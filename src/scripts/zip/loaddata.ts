import { Statement } from 'better-sqlite3';
import { readFileSync } from 'fs-extra';
import { chunk } from 'lodash';
import path from 'node:path';
import { db } from '~/lib/db/db';

type TZipColumn = keyof typeof zipTableSchema;

const STAGING_TABLE_NAME = `zip_staging`;
const BATCH_SIZE = 5_000;
const csvPath = path.resolve(`/src/data/zip/current/5-digit Commercial.csv`);

const main = async () => {
  console.time('main');

  const csvData = readFileSync(csvPath).toString().split('\r\n');
  console.log({ csvPath, rows: csvData.length });

  if (!csvData.length) throw new Error(`No data found in ${csvPath}`);

  const headerRow = csvData.shift();
  if (!headerRow) throw new Error(`No header row found in ${csvPath}`);

  const fields = headerRow.split(',') as TZipColumn[];

  createStagingTable(fields);
  insertStagingData(fields, csvData);

  console.timeEnd('main');
};

const insertStagingData = (fields: TZipColumn[], csvData: string[]) => {
  const fieldParams = fields.map(() => `?`).join();
  const insertStatement = db.prepare(
    `INSERT INTO "${STAGING_TABLE_NAME}" VALUES (${fieldParams});`
  );

  const insertManytoStaging = insertMany(insertStatement);

  const chunks = chunk(csvData, BATCH_SIZE);
  for (const chunk of chunks) {
    insertManytoStaging(chunk);
  }
};

const insertMany = (statement: Statement) =>
  db.transaction((insertData) => {
    for (const row of insertData) {
      if (row === '') continue;

      statement.run(row.split(','));
    }
  });

const createStagingTable = (fields: TZipColumn[]) => {
  const fieldDefs = fields.map((field) => {
    const type = zipTableSchema[field].type;
    return `${field} ${type} NOT NULL`;
  });

  const sqlSchema = `
    DROP TABLE IF EXISTS ${STAGING_TABLE_NAME};
    
    CREATE TABLE ${STAGING_TABLE_NAME} (
      ${fieldDefs.join(',\n')}
    );
  `;

  return db.exec(sqlSchema);
};

const zipTableSchema = {
  ZIPCode: {
    type: 'text',
    originalType: `char(5)`,
    description: `ZIP stands for Zoning Improvement Plan. It is used to signify a delivery route in the United States as designated by the USPS. In most cases a ZIP Code is a geographic region with a center point.`,
  },
  ZIPType: {
    type: 'text',
    originalType: `char(1)`,
    description: `The USPS has assigned each ZIP Code a type. Why? It helps them sort mail more quickly.`,
  },
  CityName: {
    type: 'text',
    originalType: `varchar(64)`,
    description: `The name of the city (and in some cases, organization) designated by that ZIP Code or postal code.`,
  },
  CityType: {
    type: 'text',
    originalType: `char(1)`,
    description: `In many cases, a ZIP Code can have multiple names, meaning cities, towns, or subdivisions, in its boundaries. However, it will ALWAYS have exactly 1 default name.`,
  },
  CountyName: {
    type: 'text',
    originalType: `varchar(64)`,
    description: `A county is the largest administrative division in most states. In our 5-digit USA Commercial Edition database, if a ZIP Code covers two counties, the primary county is used. In the Multi-county databases, all possible counties are listed with each county as a separate record.`,
  },
  CountyFIPS: {
    type: 'text',
    originalType: `char(5)`,
    description: `Each county in the United States is assigned a unique number for identification purposes - a Federal Information Processing Standards or FIPS code. The County FIPS code is a combination of a 2-digit state FIPS code as well as a 3-digit county code as designated by the National Institute of Standards and Technology (NIST).`,
  },
  StateName: {
    type: 'text',
    originalType: `varchar(64)`,
    description: `A state in our database is a state, territory, province, or region as designated by the USPS. The database includes all United States territories and possessions that have been assigned ZIP Codes.`,
  },
  StateAbbr: {
    type: 'text',
    originalType: `char(2)`,
    description: `A state code or abbreviation is a two character designation for that state - for example, California is CA and Texas is TX, etc.`,
  },
  StateFIPS: {
    type: 'text',
    originalType: `char(2)`,
    description: `Each county in the United States is assigned a unique number for identification purposes - a Federal Information Processing Standards or FIPS code. The County FIPS code is a combination of a 2-digit state FIPS code as well as a 3-digit county code as designated by the National Institute of Standards and Technology (NIST).`,
  },
  MSACode: {
    type: 'text',
    originalType: `char(4)`,
    description: `MSAs or Metropolitan Statistical Areas, are 4-digit codes assigned to the roughly 340 metropolitan areas as designated by the Office of Management and Budget (OMB). They are primarily used to group cities together for statistical purposes or types of analysis. Latitude and longitude are a much more efficient way of accomplishing the same task.`,
  },
  AreaCode: {
    type: 'text',
    originalType: `varchar(20)`,
    description: `In our USA 5-digit Premium Edition database, the area code listed is the primary or foremost area code for each ZIP Code. In our Commercial Edition databases (both the USA and Canada), if multiple area codes belong to one postal code, all area codes are listed and delimited by a slash / character.`,
  },
  TimeZone: {
    type: 'text',
    originalType: `varchar(16)`,
    description: `The time zone to which that ZIP Code belongs. Only the primary time zone is listed for each ZIP Code.`,
  },
  UTC: {
    type: 'real',
    originalType: `decimal(3,1)`,
    description: `The UTC offset is the number of hours the particular ZIP Code is from Universal Time Co-ordinated (UTC), the international time standard, also known as Greenwich Meridian Time (GMT).`,
  },
  DST: {
    type: 'text',
    originalType: `char(1)`,
    description: `The daylight savings time flag indicates if a particular ZIP Code obeys, or, in other words adjusts their clocks forward and back with the seasons. This information is particularly useful to determine time in other time zones with areas that may or may not use daylight savings time - for example, Arizona, Hawaii, and, of all places - Indiana.`,
  },
  Latitude: {
    type: 'real',
    originalType: `decimal(9,6)`,
    description: `The latitude coordinate listed is an exact north/south point (to 6 decimal places) on the globe of the centroid or middle of the ZIP Code.`,
  },
  Longitude: {
    type: 'real',
    originalType: `decimal(9,6)`,
    description: `The longitude coordinate listed is an exact east/west point (to 6 decimal places) on the globe of the centroid or middle of the ZIP Code. `,
  },
};

main();
