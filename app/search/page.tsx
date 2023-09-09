'use client'
 
import { useSearchParams } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import PaginationedPage from 'components/PaginatedPage'
 
export default function Search() {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')
  const currentPage = 1
  const postsPerPage = 4
  let posts: any = []
  if (search !== null) {
    const arr = search.split(/\s+/)
    const str = arr.join('|')
    const regexp = new RegExp(str)
    posts = allPosts.map((post) => {
      const targetArr = [
        post.title,
        post.body.raw
      ]
      const target = targetArr.join(' ')
      if (regexp.test(target)) {
        return post
      }
    }).filter(Boolean)
  }
 
  return (
    <>
      Search: {search}
      {search !== null &&
        <PaginationedPage posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path={`/search/page/`} />
      }
    </>
  )
}

