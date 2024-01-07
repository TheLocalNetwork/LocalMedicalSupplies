import { type MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/*?limit=',
      },
      {
        userAgent: [`AhrefsBot`, `SemrushBot`, `MJ12bot`, `dotbot`, `rogerbot`],
        disallow: '/',
      },
    ],
    sitemap: `https://local-medical-supplies.com/sitemaps/index.xml`,
  };
}
