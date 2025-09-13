import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  return [
    { url: base + '/', lastModified: new Date() },
    { url: base + '/experience', lastModified: new Date() },
    { url: base + '/work', lastModified: new Date() },
    { url: base + '/publications', lastModified: new Date() },
    { url: base + '/contact', lastModified: new Date() },
  ]
}
