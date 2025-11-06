import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import { LanguageProvider } from '@/lib/language-context';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import ClientLayout from '@/app/client-layout';

const inter = Inter({ 
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Qaspilab - Innovation Laboratory", 
  description: "Transforming ideas into cutting-edge solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
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
      </body>
    </html>
  );
}
