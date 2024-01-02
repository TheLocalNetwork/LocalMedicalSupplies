import { outputFileSync } from 'fs-extra';
import { ImmutableURLSearchParams } from 'immurl';
import { type MetadataRoute } from 'next';
import path from 'node:path';
import { getParamsUrl } from '~/components/form/urlParams';
import { CANONICAL_DOMAIN_NAME } from '~/lib/const';
import { db } from '~/lib/db/db';
import { sql } from '~/lib/string';
import {
  dbLastModified,
  generateSitemapXml,
  sitemapFolder,
  type TSitemapChangeFrequency,
} from '~/scripts/seo/sitemaps/sitemaps';
import { type IZipCity, type IZipCode, type IZipCounty, type IZipState } from '~/types/zip';

const supplierStatesStatement = db.prepare(sql`
  SELECT
    ZIP_STATE.StateSlug
  FROM
    ZIP_STATE
  ORDER BY
    ZIP_STATE.StateSlug
`);

const citiesByStateStatement = db.prepare(sql`
  SELECT
    ZIP_CITY.CitySlug
  FROM
    SUPPLIER
    INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
    INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateID
    INNER JOIN ZIP_CITY ON ZIP_CITY.id = ZIP_ZIPCODE.CityId
  WHERE
    ZIP_STATE.StateSlug = :StateSlug
  GROUP BY
    ZIP_CITY.CitySlug
  ORDER BY
    ZIP_CITY.CitySlug
`);

const countiesByStateStatement = db.prepare(sql`
  SELECT
    ZIP_COUNTY.CountySlug
  FROM
    SUPPLIER
    INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
    INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateID
    INNER JOIN ZIP_COUNTY ON ZIP_COUNTY.id = ZIP_ZIPCODE.CountyId
  WHERE
    ZIP_STATE.StateSlug = :StateSlug
  GROUP BY
    ZIP_COUNTY.CountySlug
  ORDER BY
    ZIP_COUNTY.CountySlug
`);

const zipcodesByStateStatement = db.prepare(sql`
  SELECT
    ZIP_ZIPCODE.ZIPCode
  FROM
    SUPPLIER
    INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
    INNER JOIN ZIP_STATE ON ZIP_STATE.id = ZIP_ZIPCODE.StateID
  WHERE
    ZIP_STATE.StateSlug = :StateSlug
  GROUP BY
    ZIP_ZIPCODE.ZIPCode
  ORDER BY
    ZIP_ZIPCODE.ZIPCode
`);

export const generateGeoStateSitemaps = (inSitemapIndexItems: string[]) => {
  let sitemapIndexItems = [...inSitemapIndexItems];

  const supplierStates = supplierStatesStatement.all() as IZipState[];

  for (const { StateSlug } of supplierStates) {
    const stateUrlParams = new ImmutableURLSearchParams({ state: StateSlug });
    const stateUrl = getParamsUrl(stateUrlParams, true);

    // state sitemap
    const stateSitemapMeta: MetadataRoute.Sitemap = [
      {
        url: stateUrl,
        changeFrequency: 'monthly' as TSitemapChangeFrequency,
        lastModified: dbLastModified,
        priority: 0.8,
      },
    ];

    // cities sitemaps
    const cities = citiesByStateStatement.all({ StateSlug }) as IZipCity[];

    const citiesSitemapMeta: MetadataRoute.Sitemap = cities.map((city) => {
      const cityUrlParams = stateUrlParams.set('city', city.CitySlug);
      const cityUrl = getParamsUrl(cityUrlParams, true);

      return {
        url: cityUrl,
        changeFrequency: 'monthly' as TSitemapChangeFrequency,
        lastModified: dbLastModified,
        priority: 0.7,
      };
    });

    // counties sitemaps
    const counties = countiesByStateStatement.all({ StateSlug }) as IZipCounty[];

    const countiesSitemapMeta: MetadataRoute.Sitemap = counties.map((county) => {
      const countyUrlParams = stateUrlParams.set('county', county.CountySlug);
      const countyUrl = getParamsUrl(countyUrlParams, true);

      return {
        url: countyUrl,
        changeFrequency: 'monthly' as TSitemapChangeFrequency,
        lastModified: dbLastModified,
        priority: 0.6,
      };
    });

    // zipcode sitemaps
    const zipcodes = zipcodesByStateStatement.all({ StateSlug }) as IZipCode[];

    const zipcodesSitemapMeta: MetadataRoute.Sitemap = zipcodes.map((zip) => {
      const zipUrlParams = stateUrlParams.set('zip', zip.ZIPCode);
      const zipUrl = getParamsUrl(zipUrlParams, true);

      return {
        url: zipUrl,
        changeFrequency: 'monthly' as TSitemapChangeFrequency,
        lastModified: dbLastModified,
        priority: 0.5,
      };
    });

    // write files
    const fileName = `${StateSlug}.xml`;
    const filePath = path.resolve(sitemapFolder, 'geo', fileName);
    const sitemapXml = generateSitemapXml([
      ...stateSitemapMeta,
      ...citiesSitemapMeta,
      ...countiesSitemapMeta,
      ...zipcodesSitemapMeta,
    ]);
    outputFileSync(filePath, sitemapXml);

    // return updated sitemap index items
    const sitemapUrl = `${CANONICAL_DOMAIN_NAME}/sitemaps/geo/${fileName}`;
    sitemapIndexItems = sitemapIndexItems.concat(sitemapUrl);
  }

  return sitemapIndexItems;
};
