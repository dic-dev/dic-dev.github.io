import { ReactNode } from 'react'

type MainProps = {
  children: ReactNode
}


export default function Main({ children }: MainProps) {

  return (
    <main className="bg-white h-max md:rounded md:shadow md:m-4 px-4 sm:px-6 pt-2 pb-12 md:p-6 md:pb-12 dark:bg-gray-950 dark:md:shadow-none">
      {children}
    </main>
  )
}
