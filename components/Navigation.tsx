'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'

import Hamburger from 'icons/Hamburger'
import Close from 'icons/Close'
import Search from 'icons/Search'

type FormValues = { menuToggle: boolean, searchToggle: boolean, words: string }

const Navigation = () => {
  const { watch, register, handleSubmit, setValue } = useForm<FormValues>()
  const menuToggle = watch('menuToggle', false)
  const searchToggle = watch('searchToggle', false)

  useFormPersist("form", {
    watch,
    setValue,
  });

  const router = useRouter()

  const onSubmit = (data: FormValues) => {
    const str = data.words.trim().split(/\s+/).join('+')
    const url = `/search?q=${str}`
    setValue('searchToggle', false)
    router.push(url)
  }

  const searchOpen = () => {
    setValue('searchToggle', true)
  }

  const searchClose = () => {
    setValue('searchToggle', false)
  }

  const menuOpen = () => {
    setValue('menuToggle', true)
    document.body.style.overflow = 'hidden'
  }

  const menuClose = () => {
    setValue('menuToggle', false)
    document.body.style.overflow = 'auto'
  }

  return (
    <>
      <nav className="bg-white shadow dark:bg-gray-900">
        <div className="max-w-screen-xl md:h-28 flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 md:px-10 py-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl md:text-4xl font-semibold whitespace-nowrap dark:text-white">DY Blog (*´∀｀)</span>
          </Link>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="text-lg text-gray-700 font-medium flex items-center rounded-lg space-x-8 dark:bg-gray-900">
              <li>
                <Link href="/" className="block rounded hover:underline dark:text-white" aria-current="page">Home</Link>
              </li>

              <li>
                <Link href="/about" className="block rounded hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent">About</Link>
              </li>

              <li>
                <Link href="/works" className="block rounded hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent">Works (準備中)</Link>
              </li>

              <li>
                <button type="button" onClick={searchOpen} className="block rounded hover:underline dark:text-white dark:hover:bg-gray-700 dark:hover:text-white dark:hover:bg-transparent">Search</button>
              </li>
            </ul>
          </div>

          <div className="block md:hidden md:w-auto">
            <ul className="font-medium flex items-center space-x-8 dark:bg-gray-800">
              <li>
                <button type="button" onClick={searchOpen} className="flex justify-center items-center text-gray-900 rounded dark:text-white dark:hover:bg-gray-700 dark:hover:text-white">
                  <Search
                    size={30}
                    className="fill-gray-700"
                  />
                </button>
              </li>

              <li>
                <button type="button"
                  onClick={menuOpen}
                  className="flex justify-center items-center text-sm text-gray-500 rounded-lg dark:text-gray-400 dark:hover:bg-gray-700"
                  aria-controls="mobile-menu-2" aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Hamburger
                    className="fill-gray-700"
                  />
                </button>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      <div
        style={{
          display: menuToggle ? "block" : "none"
        }}
        className="modal fixed top-0 left-0 z-20 w-full h-full bg-gray-200"
      >
        <div onClick={menuClose} className="h-full flex flex-col justify-between">
          <nav onClick={e => { e.stopPropagation(); }} className="dark:bg-gray-900">
            <div className="w-full">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 md:px-10 py-4">
                <a href="https://flowbite.com/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DY Blog (*´∀｀)</span>
                </a>

                <div className="block md:w-auto">
                  <ul className="font-medium flex items-center space-x-8 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                    <li>
                      <button type="button"
                        onClick={menuClose}
                        className="flex justify-center items-center items-center text-sm text-gray-500 rounded-lg dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>
                        <Close
                          className="fill-gray-700"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul className="flex flex-col items-center mx-auto px-4 pt-6 pb-6 w-full font-medium text-center">
              <li className="w-full">
                <Link href="/" onClick={menuClose} className="block py-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Home</Link>
              </li>
              <li className="w-full">
                <Link href="/about" onClick={menuClose} className="block py-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">About</Link>
              </li>
              <li className="w-full">
                <Link href="/works" onClick={menuClose} className="block py-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Works (準備中)</Link>
              </li>
              <li className="w-full">
                <Link href="/contact" onClick={menuClose} className="block py-3 text-gray-700 border-b border-gray-100 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-row justify-center items-center gap-1">
            <Close
              size={13}
              className="fill-gray-700"
            />
            <p className="py-10 text-center text-gray-700 font-medium">Close</p>
          </div>

          <div onClick={e => { e.stopPropagation(); }}>
            <p className="block py-6 text-center text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <Link href="https://flowbite.com/" className="hover:underline">dic-dev</Link>. All Rights Reserved.</p>
          </div>
        </div>
      </div>



      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input id="checkbox" type="checkbox" {...register('searchToggle')}
          className="hidden"
        />

        <div onClick={searchClose}
          style={{
            display: searchToggle ? "block" : "none"
          }}
          className="w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto bg-overlay"
        >
          <div
            className="sm:max-w-xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex justify-center items-center"
          >
            <div
              onClick={e => { e.stopPropagation(); }}
              className="max-h-full overflow-hidden flex flex-col bg-gray-100 border shadow-sm rounded dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] w-full"
            >
              <div className="flex justify-between items-center px-4 pt-4 dark:border-gray-700">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Keyword Search
                </h3>
                <button type="button"
                  onClick={searchClose}
                  className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded text-gray-400 bg-transparent hover:bg-gray-100 hover:text-gray-900 text-sm dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <span className="sr-only">Close</span>
                  <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                  </svg>
                </button>
              </div>
              <div className="p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <div className="relative w-full rounded-lg shadow-sm">
                      <input {...register('words', { required: true })} placeholder="Search..." type="search"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-600 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      />
                      <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-600 rounded-r-lg border border-blue-600 hover:bg-blue-500 hover:border-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Navigation
