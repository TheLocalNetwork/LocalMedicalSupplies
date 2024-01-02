import { outputFileSync } from 'fs-extra';
import { type MetadataRoute } from 'next';
import path from 'node:path';
import { CANONICAL_DOMAIN_NAME } from '~/lib/const';
import { db } from '~/lib/db/db';
import { getSupplierLink } from '~/lib/link/supplier';
import { sql } from '~/lib/string';
import {
  dbLastModified,
  generateSitemapXml,
  sitemapFolder,
  type TSitemapChangeFrequency,
} from '~/scripts/seo/sitemaps/sitemaps';
import { type ISupplier } from '~/types/Supplier';
import { type IZipState } from '~/types/zip';

const supplierStatesStatement = db.prepare(sql`
  SELECT
    StateSlug
  FROM
    ZIP_STATE
`);
const supplierStates = supplierStatesStatement.all() as IZipState[];

const suppliersByStateStatement = db.prepare(sql`
  SELECT
    SUPPLIER.id,
    practice_slug,
    business_slug
  FROM
    SUPPLIER
    INNER JOIN ZIP_ZIPCODE ON SUPPLIER.zip = ZIP_ZIPCODE.ZIPCode
    INNER JOIN ZIP_STATE ON ZIP_ZIPCODE.StateID = ZIP_STATE.id
  WHERE
    ZIP_STATE.StateSlug = :StateSlug
  ORDER BY
    SUPPLIER.id
`);

export const generateSupplierStateSitemaps = (inSitemapIndexItems: string[]) => {
  let sitemapIndexItems = [...inSitemapIndexItems];

  for (const { StateSlug } of supplierStates) {
    const suppliers = suppliersByStateStatement.all({ StateSlug }) as ISupplier[];
    const suppliersSitemapMeta: MetadataRoute.Sitemap = suppliers.map((supplier) => ({
      url: getSupplierLink(supplier, true),
      changeFrequency: 'monthly' as TSitemapChangeFrequency,
      lastModified: dbLastModified,
      priority: 1,
    }));

    const fileName = `${StateSlug}.xml`;
    const filePath = path.resolve(sitemapFolder, 'suppliers', fileName);
    const sitemapXml = generateSitemapXml(suppliersSitemapMeta);
    outputFileSync(filePath, sitemapXml);

    const sitemapUrl = `${CANONICAL_DOMAIN_NAME}/sitemaps/suppliers/${fileName}`;
    sitemapIndexItems = sitemapIndexItems.concat(sitemapUrl);
  }

  return sitemapIndexItems;
};
