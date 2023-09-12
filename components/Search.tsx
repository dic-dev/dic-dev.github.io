'use client'
 
import { compareDesc } from 'date-fns'
import { useSearchParams } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import PaginationedPage from 'components/PaginatedPage'
import SearchBox from 'components/SearchBox'
import SearchIndex from 'components/SearchIndex'
import styles from 'styles/Page.module.scss'

type SearchProps = {
  currentPage: number
  postsPerPage: number
}
 
const Search = ({ currentPage = 1, postsPerPage = 4 }: SearchProps) => {
  const searchParams = useSearchParams()
  const search = searchParams.get('q')
  const query = search === null ? '' : `?q=${search.replace(' ', '+')}`
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
 
  return (
    <>
      {search === null &&
      <SearchIndex />
      }
      {search !== null &&
      <div className={styles.container}>
          <div className={styles.card}>
              <p>{result}</p>
          </div>
          <PaginationedPage posts={posts} currentPage={currentPage} postsPerPage={postsPerPage} path="/search/page/" query={query} />
      </div>
      }
    </>
  )
}

export default Search
