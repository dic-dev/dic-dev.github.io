import Link from 'next/link'

type PaginationProps = {
  posts: any
  currentPage: number
  postsPerPage: number
  path: string
  query: string
}

function pagination(c: number, m: number) {
  var current = c,
    last = m,
    delta = 2,
    left = current - delta,
    right = current + delta + 1,
    range = [],
    rangeWithDots = [],
    l;

  for (let i = 1; i <= last; i++) {
    if (i == 1 || i == last || i >= left && i < right) {
      range.push(i);
    }
  }

  for (let i of range) {
    if (l) {
      if (i - l === 2) {
        rangeWithDots.push(l + 1);
      } else if (i - l !== 1) {
        rangeWithDots.push('...');
      }
    }
    rangeWithDots.push(i);
    l = i;
  }

  return rangeWithDots;
}

const Pagination = ({ posts, currentPage, postsPerPage, path, query = '' }: PaginationProps) => {
  const totalPosts = posts.length;
  const lastPage = Math.ceil(totalPosts / postsPerPage);
  const rangeWithDots = pagination(currentPage, lastPage);
  return (
    <nav className="mx-auto isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
      {currentPage === 1
        ? <span>aaa</span>
        : <Link href={path + String(currentPage - 1) + query}
          >
            bbb
          </Link>
      }

      {rangeWithDots.map((value: any, idx: number) => {
        if (value === '...') {
          return (
            <span key={idx}
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
            >
              ...
            </span>
          )
        } else if (value === currentPage) {
          return (
            <Link key={idx}
              href={path + String(value) + query}
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {value}
            </Link>
          )
        } else {
          return (
            <Link key={idx}
              href={path + String(value) + query}
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              {value}
            </Link>
          )
        }
      })}

      {currentPage === lastPage
        ? <span>aaa</span>
        : <Link href={path + String(currentPage + 1) + query}>bbb</Link>
      }
    </nav>
  )
}

export default Pagination
