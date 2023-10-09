import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="pt-4 md:pt-4 md:pb-8 border-t border-gray-300 md:border-t-transparent">
      <div className="w-full max-w-screen-xl mx-auto md:px-4">
        <div className="bg-white sm:rounded md:shadow dark:bg-gray-900 px-4 py-8 sm:p-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>
            <ul className="hidden sm:flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/" className="mr-4 hover:underline md:mr-6 ">Home</Link>
              </li>
              <li>
                <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
              </li>
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="pt-4 flex justify-center items-center sm:hidden">
            <ul className="w-full px-8 pt-4 flex flex-wrap justify-between text-sm font-medium text-gray-500 dark:text-gray-400">
              <li>
                <Link href="/" className="hover:underline md:mr-6 ">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline">About</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Link</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-300 dark:border-gray-700" />
          <span className="block text-sm text-gray-500 text-center dark:text-gray-400">© 2023 <Link href="https://flowbite.com/" className="hover:underline">dic-dev</Link>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
