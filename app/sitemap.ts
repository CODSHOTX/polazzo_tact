import type { MetadataRoute } from 'next';
import { SITE_ROUTES, SITE_URL } from '@/data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  return SITE_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path === '/' ? '' : path}`,
    changeFrequency,
    priority,
  }));
}
