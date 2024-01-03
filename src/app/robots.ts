import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/*?limit=',
      },
    ],
    sitemap: `https://local-medical-supplies.com/sitemaps/index.xml`,
  };
}
