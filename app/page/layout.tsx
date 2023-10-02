import 'app/globals.css'
import type { Metadata } from 'next'
import Side from 'components/Side';

export const metadata: Metadata = {
  title: 'My Page',
  description: 'My Page',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_350px]">
      <main>{children}</main>
      <aside><Side /></aside>
    </div>
  )
}

