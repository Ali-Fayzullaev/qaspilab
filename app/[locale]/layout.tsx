import { notFound } from 'next/navigation'
import { ReactNode } from 'react'
import { LanguageProvider } from '@/lib/language-context'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from '@/app/client-layout'

const locales = ['en', 'ru', 'kk']

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

interface Props {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params
  
  // Проверяем, поддерживается ли локаль
  if (!locales.includes(locale)) {
    notFound()
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
            <ClientLayout>
              {children}
            </ClientLayout>
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  )
}