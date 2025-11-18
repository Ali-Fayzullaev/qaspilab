// Enhanced sitemap with SEO focus on Qaspilab brand and services
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qaspilab.com'
  const currentDate = new Date().toISOString()

  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
      alternates: {
        languages: {
          ru: `${baseUrl}/ru`,
          en: `${baseUrl}/en`,
          kk: `${baseUrl}/kk`,
        },
      },
    },
    {
      url: `${baseUrl}/ru`,
      lastModified: currentDate,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/en`,  
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/kk`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
  ]

  // Add section pages for better SEO
  const sections = [
    { path: '#about', priority: 0.8, freq: 'weekly' as const },
    { path: '#services', priority: 0.9, freq: 'weekly' as const },
    { path: '#contact', priority: 0.8, freq: 'monthly' as const },
    { path: '#faq', priority: 0.7, freq: 'monthly' as const },
  ]

  const sectionPages = sections.flatMap(section => [
    {
      url: `${baseUrl}${section.path}`,
      lastModified: currentDate,
      changeFrequency: section.freq,
      priority: section.priority,
    },
    {
      url: `${baseUrl}/ru${section.path}`,
      lastModified: currentDate,
      changeFrequency: section.freq,
      priority: section.priority,
    }
  ])

  return [...mainPages, ...sectionPages]
}