import './globals.css'
import 'ress'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from 'components/Footer';
import Side from 'components/Side';
import Header from 'components/Header'

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
        <Header title="TechBlog(仮)" />
        <div className="wrapper">
          <main>{children}</main>
          <Side />
        </div>
        <Footer />
      </body>
    </html>
  )
}
