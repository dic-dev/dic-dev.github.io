import './globals.css'
import 'styles/markdown.css'
import 'styles/prism.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Main from 'components/Main';
import Footer from 'components/Footer';
import Side from 'components/Side';
import Navigation from 'components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DY Blog',
  description: 'DY Blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={`${inter.className} bg-white md:bg-gray-100 dark:bg-gray-950 dark:md:bg-gray-950`}>
        <Navigation />
        <div className="pt-4 max-w-7xl min-h-screen mx-auto grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_350px]">
          <Main>{children}</Main>
          <Side />
        </div>
        <Footer />
      </body>
    </html>
  )
}
