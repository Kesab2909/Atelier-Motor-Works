import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/portal/dashboard', '/api/'],
    },
    sitemap: 'https://atelier-motor-works.vercel.app/sitemap.xml',
  };
}
