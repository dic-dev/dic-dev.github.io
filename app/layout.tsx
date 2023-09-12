import './globals.css'
import 'ress'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from 'components/Footer';
import Side from 'components/Side';
import Header from 'components/Header'
import BottomNavigation from 'components/BottomNavigation'

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
        <Header title="This is a blog." />
        <div className="wrapper">
          <main>{children}</main>
          <div className="side"><Side /></div>
        </div>
        <Footer />
        <BottomNavigation />
      </body>
    </html>
  )
}
