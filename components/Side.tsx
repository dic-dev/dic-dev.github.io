import { allPosts } from 'contentlayer/generated'
import Link from 'next/link'

import Github from 'icons/Github'
import Twitter from 'icons/Twitter'
import Instagram from 'icons/Instagram'
import Mail from 'icons/Mail'

const Side = () => {
  const categorizedPosts = allPosts.filter((post) => typeof post.category !== 'undefined' && post.category !== '');
  const categoryCol = categorizedPosts.map((post) => (post.category));
  const categories = Array.from(new Set(categoryCol));
  const taggedPosts = allPosts.filter((post) => typeof post.tags !== 'undefined');
  const tagsCol = taggedPosts.map((post) => (post.tags));
  let tags = tagsCol.flat();
  tags = Array.from(new Set(tags));

  return (
    <aside className="mx-auto md:pr-4 md:py-4 lg:p-4 space-y-12 w-full border-t border-gray-300 md:border-t-transparent">
      <div className="mx-auto bg-white flex flex-col justify-center px-4 py-6 sm:px-6 md:pb-0 md:shadow md:rounded dark:bg-gray-900 dark:text-gray-100">
        <div className="space-y-4">
          <h3 className="font-semibold text-center text-xl underline decoration-1">Blog Aurthor</h3>
          <img
            src="/images/fail.jpg" alt="profile"
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />

          <div className="text-center">
            <div className="pb-4 space-y-1">
              <h2 className="text-xl font-semibold">Daichi Yamaguchi</h2>
              <p className="px-5 text-base dark:text-gray-400">
                熊本出身。30歳独身。<br/>
                現在は埼玉県に潜む引きこもりの日々のアウトプット。<br />
              </p>
            </div>

            <hr className="mx-4 border-gray-700" />
            <div className="px-3 pt-2 pb-4 mx-auto w-max flex justify-center align-center">
              <a rel="noopener noreferrer" href="#" aria-label="GitHub" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                <Github />
              </a>
              <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                <Twitter />
              </a>
              <a rel="noopener noreferrer" href="#" aria-label="Dribble" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                <Instagram />
              </a>
              <Link rel="noopener noreferrer" href="/contact" aria-label="Email" className="p-2 rounded-md dark:text-gray-100 hover:dark:text-violet-400">
                <Mail />
              </Link>
            </div>
          </div>
        </div>

        <hr className="border-1 border-gray-300" />

        <div className="space-y-4 py-6">
          <h3 className="font-semibold text-center text-xl underline decoration-1">Categories</h3>
          <div className="flex justify-center align-center">
            {typeof categories !== 'undefined' &&
              <div className="flex items-center flex-wrap gap-1">
                {categories.map((category, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={`/category/${category}/`}
                      className="text-sm font-medium inline-block py-1 px-3 uppercase rounded-full text-gray-900 bg-blue-200 hover:underline decoration-1"
                    >
                      {category}
                    </Link>
                  )
                })}
              </div>
            }
          </div>
        </div>

        <hr className="border-1 border-gray-300" />

        <div className="space-y-4 py-6">
          <h3 className="font-semibold text-center text-xl underline decoration-1">Tags</h3>
          <div className="flex justify-center align-center">
            {typeof tags !== 'undefined' &&
              <div className="flex justify-center items-center flex-wrap gap-1">
                {tags.map((tag, idx) => {
                  return (
                    <Link
                      key={idx}
                      href={`/tag/${tag}/`}
                      className="text-sm font-medium inline-block py-1 px-2 uppercase rounded text-gray-900 bg-sky-200 hover:underline decoration-1"
                    >
                      {tag}
                    </Link>
                  )
                })}
              </div>
            }
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Side
