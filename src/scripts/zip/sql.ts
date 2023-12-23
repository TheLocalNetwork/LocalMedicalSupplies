import path from 'path';
import { db } from '~/lib/db/db';
import { slugify } from '~/lib/string';
import { processFolder } from '~/scripts/sql';
import { IZipCity, IZipCounty, IZipState } from '~/types/zip';

const main = async () => {
  console.time('main');

  processFolder(path.resolve(__dirname, `sql`));

  createSlugs();

  console.timeEnd('main');
};

const createSlugs = () => {
  console.time('createSlugs');
  createStateSlugs();
  createCountySlugs();
  createCitySlugs();
  console.timeEnd('createSlugs');
};

const createStateSlugs = () => {
  console.time('createSlugs:states');

  const selectZipStatesStatement = db.prepare(
    `SELECT rowid as id, StateName FROM ZIP_STATE`
  );

  const updateZipStateSlugStatement = db.prepare<{ id: number; slug: string }>(
    `UPDATE ZIP_STATE SET StateSlug = @slug WHERE rowid = @id`
  );

  const states = selectZipStatesStatement.all() as IZipState[];

  db.transaction(() => {
    for (const { StateName, id } of states) {
      updateZipStateSlugStatement.run({ id, slug: slugify(StateName) });
    }
  })();

  console.timeEnd('createSlugs:states');
};

const createCountySlugs = () => {
  console.time('createSlugs:counties');

  const selectZipCountiesStatement = db.prepare(
    `SELECT rowid as id, CountyName FROM ZIP_COUNTY`
  );

  const updateZipCountySlugStatement = db.prepare<{ id: number; slug: string }>(
    `UPDATE ZIP_COUNTY SET CountySlug = @slug WHERE rowid = @id`
  );

  const counties = selectZipCountiesStatement.all() as IZipCounty[];

  db.transaction(() => {
    for (const { CountyName, id } of counties) {
      updateZipCountySlugStatement.run({ id, slug: slugify(CountyName) });
    }
  })();

  console.timeEnd('createSlugs:counties');
};

const createCitySlugs = () => {
  console.time('createSlugs:cities');

  const selectZipCitiesStatement = db.prepare(
    `SELECT rowid as id, CityName FROM ZIP_CITY`
  );
  const updateZipCitySlugStatement = db.prepare<{ id: number; slug: string }>(
    `UPDATE ZIP_CITY SET CitySlug = @slug WHERE rowid = @id`
  );

  const cities = selectZipCitiesStatement.all() as IZipCity[];

  db.transaction(() => {
    for (const { CityName, id } of cities) {
      updateZipCitySlugStatement.run({ id, slug: slugify(CityName) });
    }
  })();

  console.timeEnd('createSlugs:cities');
};

main();
