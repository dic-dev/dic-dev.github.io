'use client'

import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import useFormPersist from 'react-hook-form-persist'
import { useEffect } from 'react'

type FormValues = { toggle: boolean, words: string }

const Navigation = () => {
  const { watch, register, handleSubmit, setValue } = useForm<FormValues>()
  const toggle = watch('toggle', false)

  useFormPersist("storageKey", {
    watch,
    setValue,
    // storage: window.localStorage, // default window.sessionStorage
    // exclude: ['checkbox']
  });

  const router = useRouter()

  const onSubmit = (data: FormValues) => {
    const str = data.words.trim().split(/\s+/).join('+')
    const url = `/search?q=${str}`
    setValue('toggle', false)
    router.push(url)
  }

  const handleClose = () => {
    setValue('toggle', false)
  }

  const handleOpen = () => {
    setValue('toggle', true)
  }

  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
          </a>

          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link href="/" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</Link>
              </li>

              <li>
                <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
              </li>

              <li>
                <Link href="/link" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Link</Link>
              </li>

              <li>
                <button type="button" onClick={handleOpen} className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Search</button>
              </li>
            </ul>
          </div>

        </div>
      </nav>


      <div className="md:hidden fixed z-50 w-full h-16 max-w-lg -translate-x-1/2 bg-white border border-gray-200 rounded-full bottom-4 left-1/2 dark:bg-gray-700 dark:border-gray-600">
        <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
          <Link href="/" className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            <span className="sr-only">Home</span>
          </Link>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path d="M8 9H10V14M8 14H12M9.4079 5.5H9.4179M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              <path d="M9.99992 2.08337C8.43415 2.08337 6.90355 2.54768 5.60166 3.41757C4.29977 4.28747 3.28507 5.52388 2.68588 6.97046C2.08668 8.41705 1.92991 10.0088 2.23537 11.5445C2.54084 13.0802 3.29483 14.4908 4.40199 15.598C5.50916 16.7051 6.91977 17.4591 8.45546 17.7646C9.99114 18.0701 11.5829 17.9133 13.0295 17.3141C14.4761 16.7149 15.7125 15.7002 16.5824 14.3983C17.4523 13.0964 17.9166 11.5658 17.9166 10C17.9142 7.90115 17.0793 5.88893 15.5952 4.40479C14.111 2.92065 12.0988 2.0858 9.99992 2.08337ZM9.58326 5.00004C9.83048 5.00004 10.0722 5.07335 10.2777 5.2107C10.4833 5.34806 10.6435 5.54328 10.7381 5.77169C10.8327 6.00009 10.8575 6.25143 10.8092 6.4939C10.761 6.73638 10.642 6.95911 10.4671 7.13392C10.2923 7.30874 10.0696 7.42779 9.82712 7.47602C9.58464 7.52425 9.33331 7.4995 9.1049 7.40489C8.87649 7.31028 8.68127 7.15006 8.54392 6.9445C8.40657 6.73894 8.33326 6.49727 8.33326 6.25004C8.33326 5.91852 8.46495 5.60058 8.69937 5.36616C8.93379 5.13174 9.25173 5.00004 9.58326 5.00004ZM11.6666 14.1667H8.33326C8.11224 14.1667 7.90028 14.0789 7.744 13.9226C7.58772 13.7663 7.49992 13.5544 7.49992 13.3334C7.49992 13.1124 7.58772 12.9004 7.744 12.7441C7.90028 12.5878 8.11224 12.5 8.33326 12.5H9.16659V10H8.33326C8.11224 10 7.90028 9.91224 7.744 9.75596C7.58772 9.59968 7.49992 9.38772 7.49992 9.16671C7.49992 8.94569 7.58772 8.73373 7.744 8.57745C7.90028 8.42117 8.11224 8.33337 8.33326 8.33337H9.99992C10.2209 8.33337 10.4329 8.42117 10.5892 8.57745C10.7455 8.73373 10.8333 8.94569 10.8333 9.16671V12.5H11.6666C11.8876 12.5 12.0996 12.5878 12.2558 12.7441C12.4121 12.9004 12.4999 13.1124 12.4999 13.3334C12.4999 13.5544 12.4121 13.7663 12.2558 13.9226C12.0996 14.0789 11.8876 14.1667 11.6666 14.1667Z" />
            </svg>
            <span className="sr-only">About</span>
          </button>

          <button type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
              <path d="M11.0129 7.96195C10.353 7.3025 9.45831 6.93207 8.52541 6.93207C7.59251 6.93207 6.69778 7.3025 6.03791 7.96195L2.48391 11.516C1.82422 12.1757 1.45361 13.0705 1.45361 14.0035C1.45361 14.9364 1.82422 15.8312 2.48391 16.4909C3.14378 17.1504 4.03851 17.5208 4.97141 17.5208C5.90431 17.5208 6.79903 17.1504 7.45891 16.4909L7.91991 16.03M7.45891 11.516C8.11865 12.1756 9.01343 12.5462 9.94641 12.5462C10.8794 12.5462 11.7742 12.1756 12.4339 11.516L15.9869 7.96195C16.6466 7.30221 17.0172 6.40743 17.0172 5.47445C17.0172 4.54147 16.6466 3.64669 15.9869 2.98695C15.3272 2.32757 14.4326 1.95715 13.4999 1.95715C12.5672 1.95715 11.6726 2.32757 11.0129 2.98695L10.2999 3.69995" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="sr-only">Link</span>
          </button>

          <button type="button"
            className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
            onClick={handleOpen}
          >
            <svg className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
              <path d="M16.5 16.5L13.1667 13.1667M13.1667 7.33333C13.1667 10.555 10.555 13.1667 7.33333 13.1667C4.11167 13.1667 1.5 10.555 1.5 7.33333C1.5 4.11167 4.11167 1.5 7.33333 1.5C10.555 1.5 13.1667 4.11167 13.1667 7.33333Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="sr-only">Search</span>
          </button>

        </div>
      </div>


      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <input id="checkbox" type="checkbox" {...register('toggle')}
          className="hidden"
        />

        <div onClick={handleClose}
          style={{
            display: toggle ? "block" : "none"
          }}
          className="w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto bg-overlay"
        >
          <div
            className="sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex justify-center items-center"
          >
            <div
              onClick={e => { e.stopPropagation(); }}
              className="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] w-full"
            >
              <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Keyword Search
                </h3>
                <button type="button"
                  onClick={handleClose}
                  className="inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 text-sm dark:hover:bg-gray-600 dark:hover:text-white"
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
                    <div className="relative w-full">
                      <input {...register('words', { required: true })} placeholder="Search..." type="search"
                        className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                      />
                      <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                        </svg>
                        <span className="sr-only">Search</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                <button type="button" className="hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                  Close
                </button>
                <a className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800" href="#">
                  Save changes
                </a>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default Navigation
