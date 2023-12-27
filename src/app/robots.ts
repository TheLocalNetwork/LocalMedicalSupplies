import { type MetadataRoute } from 'next';
import { generateSitemaps } from '~/app/sitemap';

export default function robots(): MetadataRoute.Robots {
  const sitemaps = generateSitemaps();

  return {
    rules: [
      {
        userAgent: '*',
        disallow: '/',
      },
    ],
    sitemap: sitemaps.map((sitemap) => `/sitemap.xml/${sitemap.id}`),
  };
}
