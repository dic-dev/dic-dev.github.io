import { Suspense } from 'react'
import Search from 'components/Search'

const SearchFallback = () => {
  return <>placeholder</>
}

const Page = ({ params }: { params: { page: string } }) => {
  const currentPage = Number(params.page);
  const postsPerPage = 4;

  return (
    <>
      <Suspense fallback={<SearchFallback />}>
        <Search currentPage={currentPage} postsPerPage={postsPerPage} />
      </Suspense>
    </>
  )
}

export default Page
