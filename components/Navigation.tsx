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
      <nav className="bg-white shadow dark:shadow-none border-b border-b-transparent dark:border-b-gray-600 dark:bg-gray-950">
        <div className="max-w-screen-xl md:h-28 flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 md:px-10 py-4">
          <Link href="/" className="flex items-center">
            <span className="self-center text-2xl md:text-4xl font-semibold whitespace-nowrap dark:text-white">DY Blog (*´∀｀)</span>
          </Link>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="text-lg text-gray-700 font-medium flex items-center rounded-lg space-x-8">
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
            <ul className="font-medium flex items-center space-x-4 md:space-x-8">
              <li>
                <button type="button" onClick={searchOpen} className="flex justify-center items-center text-gray-900 rounded dark:text-white">
                  <Search
                    size={30}
                    className="fill-gray-700 stroke-gray-700 dark:stroke-white dark:fill-white"
                  />
                </button>
              </li>

              <li>
                <button type="button"
                  onClick={menuOpen}
                  className="flex justify-center items-center text-sm text-gray-500 rounded-lg dark:text-gray-400"
                  aria-controls="mobile-menu-2" aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <Hamburger
                    className="fill-gray-700 dark:fill-white"
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
        className="modal fixed top-0 left-0 z-20 w-full h-full bg-gray-200 dark:bg-gray-900"
      >
        <div onClick={menuClose} className="h-full flex flex-col justify-between">
          <nav onClick={e => { e.stopPropagation(); }} className="dark:bg-gray-900">
            <div className="w-full">
              <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 sm:px-6 md:px-10 py-4">
                <a href="https://flowbite.com/" className="flex items-center">
                  <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">DY Blog (*´∀｀)</span>
                </a>

                <div className="block md:w-auto">
                  <ul className="font-medium flex items-center space-x-8">
                    <li>
                      <button type="button"
                        onClick={menuClose}
                        className="flex justify-center items-center text-sm text-gray-500 rounded-lg dark:text-gray-400"
                        aria-controls="mobile-menu-2" aria-expanded="false"
                      >
                        <span className="sr-only">Open main menu</span>
                        <Close
                          className="fill-gray-700 dark:fill-white"
                        />
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <ul className="flex flex-col items-center mx-auto px-4 pt-6 pb-6 w-full font-medium text-center text-gray-700 dark:text-gray-400">
              <li className="w-full">
                <Link href="/" onClick={menuClose} className="block py-3 border-b border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Home</Link>
              </li>
              <li className="w-full">
                <Link href="/about" onClick={menuClose} className="block py-3 border-b border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">About</Link>
              </li>
              <li className="w-full">
                <Link href="/works" onClick={menuClose} className="block py-3 border-b border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Works (準備中)</Link>
              </li>
              <li className="w-full">
                <Link href="/contact" onClick={menuClose} className="block py-3 border-b border-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white dark:border-gray-700">Contact</Link>
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
              className="max-h-full overflow-hidden flex flex-col bg-searchOverlay shadow-sm rounded dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] w-full"
            >
              <div className="p-4 overflow-y-auto">
                <div className="space-y-4">
                  <div>
                    <div className="relative w-full rounded-lg shadow-sm">
                      <input {...register('words', { required: true })} placeholder="Keyword Search" type="search"
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
