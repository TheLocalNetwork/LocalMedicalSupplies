import { outputFileSync, removeSync, statSync } from 'fs-extra';
import { compact, isDate } from 'lodash';
import { type MetadataRoute } from 'next';
import path from 'node:path';
import { dbPath } from '~/lib/db/db';
import { generateGeoStateSitemaps } from '~/scripts/seo/sitemaps/geo';
import { generateSupplierStateSitemaps } from '~/scripts/seo/sitemaps/suppliers';

export type TSitemapChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';

let sitemapIndexItemsCollector: string[] = [];

export const dbLastModified = new Date(statSync(dbPath).mtime).toISOString();
export const publicFolder = path.resolve(process.cwd(), 'public');
export const sitemapFolder = path.resolve(publicFolder, 'sitemaps');

export const generateSitemapXml = (sitemapsMetadata: MetadataRoute.Sitemap) => {
  return [
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...sitemapsMetadata.map((item) =>
      compact([
        `<url>`,
        item.priority ? `<priority>${item.priority}</priority>` : undefined,
        item.changeFrequency ? `<changefreq>${item.changeFrequency}</changefreq>` : undefined,
        item.lastModified
          ? `<lastmod>${isDate(item.lastModified) ? item.lastModified.toISOString() : item.lastModified}</lastmod>`
          : undefined,
        `<loc>${item.url}</loc>`,
        `</url>`,
      ]).join('')
    ),
    `</urlset>`,
  ].join('\n');
};

export const generateSitemapIndexXml = (sitemapIndexItems: string[]) => {
  const indexXml = [
    `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...sitemapIndexItems.map((indexItem) => `<sitemap><loc>${indexItem}</loc></sitemap>`),
    `</sitemapindex>`,
  ].join('\n');

  const fileName = `index.xml`;
  const filePath = path.resolve(sitemapFolder, fileName);
  outputFileSync(filePath, indexXml);
};

removeSync(sitemapFolder);

sitemapIndexItemsCollector = generateSupplierStateSitemaps(sitemapIndexItemsCollector);
sitemapIndexItemsCollector = generateGeoStateSitemaps(sitemapIndexItemsCollector);

generateSitemapIndexXml(sitemapIndexItemsCollector);
