import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/', '/tmp/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot-Mobile',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
        disallow: ['/_next/', '/api/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: ['AhrefsBot', 'MJ12bot', 'SemrushBot', 'DotBot'],
        disallow: '/',
      },
    ],
    sitemap: 'https://qaspilab.com/sitemap.xml',
    host: 'https://qaspilab.com',
  }
}