import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from 'components/Footer';
// import Side from 'components/Side';
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
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
