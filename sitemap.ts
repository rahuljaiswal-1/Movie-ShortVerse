import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
     return [
          {
               url: 'https://yourdomain.com',
               lastModified: new Date(),
               changeFrequency: 'daily',
               priority: 1,
          },
          {
               url: 'https://yourdomain.com/movies',
               lastModified: new Date(),
               changeFrequency: 'daily',
               priority: 0.9,
          },
          {
               url: 'https://yourdomain.com/series',
               lastModified: new Date(),
               changeFrequency: 'daily',
               priority: 0.9,
          },
          {
               url: 'https://yourdomain.com/trending',
               lastModified: new Date(),
               changeFrequency: 'hourly',
               priority: 0.8,
          },
          {
               url: 'https://yourdomain.com/browse',
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.7,
          },
     ];
}
