import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="sm:py-4 border-t border-t-gray-300 sm:border-t-transparent">
      <div className="w-full max-w-screen-xl mx-auto sm:px-4">
        <div className="bg-white sm:rounded sm:shadow dark:bg-gray-900 p-4 sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
              <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
              <li>
                <Link href="/about" className="mr-4 hover:underline md:mr-6 ">About</Link>
              </li>
              <li>
                <Link href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/license" className="mr-4 hover:underline md:mr-6 ">Licensing</Link>
              </li>
              <li>
                <Link href="#" className="hover:underline">Contact</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-300 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://flowbite.com/" className="hover:underline">dic-dev</Link>. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
