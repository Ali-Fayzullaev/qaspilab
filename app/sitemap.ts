import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://qaspilab.com'
  const currentDate = new Date().toISOString().split('T')[0]

  const languages = ['', '/ru', '/en', '/kk']
  const sections = ['', '#about', '#services', '#contact']

  const urls: MetadataRoute.Sitemap = []

  // Добавляем главные страницы для каждого языка
  languages.forEach((lang) => {
    urls.push({
      url: `${baseUrl}${lang}`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: lang === '/ru' || lang === '' ? 1.0 : 0.9,
    })

    // Добавляем разделы для каждого языка
    sections.slice(1).forEach((section) => {
      urls.push({
        url: `${baseUrl}${lang}${section}`,
        lastModified: currentDate,
        changeFrequency: 'monthly',
        priority: section === '#services' ? 0.9 : 0.7,
      })
    })
  })

  return urls
}