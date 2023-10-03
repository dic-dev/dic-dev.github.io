'use client'

import { compareDesc } from 'date-fns'
import { useSearchParams } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import PaginatedPage from 'components/PaginatedPage'
import SearchIndex from 'components/SearchIndex'
import ResultBar from 'components/ResultBar'

export default function Page() {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')
  const page = searchParams.get('page') === null ? 1 : Number(searchParams.get('page'))

  const query = search === null ? '' : `?q=${search.replace(' ', '+')}&page=`

  let posts: any = []
  if (search !== null && search !== '') {
    const arr = search.split(/\s+/)
    const str = `^(?=.*${arr.join(')(?=.*')}).*$`
    const regexp = new RegExp(str, 'i')
    posts = allPosts.map((post) => {
      const targetArr = [
        post.title,
        post.body.raw.replace(/\r?\n/g, '')
      ]
      const target = targetArr.join(' ')
      if (regexp.test(target)) {
        return post
      }
    }).filter(Boolean)
    posts = posts.sort((a: any, b: any) => compareDesc(new Date(a.date), new Date(b.date)))
  }

  let result = ''
  if (search === '') {
    result = 'Search : "" (No keywords)'
  } else if (search !== null) {
    result = `Search : "${search}" (${posts.length}${posts.length === 1 ? ' post' : ' posts'})`
  }

  const postsPerPage = 4

  return (
    <>
      {search === null &&
        <SearchIndex />
      }
      {search !== null &&
        <>
          <ResultBar totalPosts={posts.length} filter="Keyword" value={search} />
          <PaginatedPage posts={posts} currentPage={Number(page)} postsPerPage={postsPerPage} path="/search/" query={query} />
        </>
      }
    </>
  )
}
