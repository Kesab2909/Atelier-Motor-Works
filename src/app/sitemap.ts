import { MetadataRoute } from 'next';
import projects from "@/data/projects.json";
import articles from "@/data/articles.json";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://ateliernorth.com';

  const staticRoutes = [
    '',
    '/about',
    '/process',
    '/work',
    '/journal',
    '/waitlist',
    '/contact',
    '/portal'
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const articleRoutes = articles.map((article) => ({
    url: `${baseUrl}/journal/${article.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...projectRoutes, ...articleRoutes];
}
