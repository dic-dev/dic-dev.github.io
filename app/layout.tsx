import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from 'components/Footer';
import Side from 'components/Side';
import Navigation from 'components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Page',
  description: 'My Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-white md:bg-gray-100`}>
        <Navigation />
        <div className="pt-4 max-w-7xl min-h-screen mx-auto grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_350px]">
          <main>
            {children}
          </main>
          <Side />
        </div>
        <Footer />
      </body>
    </html>
  )
}
