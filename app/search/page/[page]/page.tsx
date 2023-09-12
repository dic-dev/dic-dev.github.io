import Search from 'components/Search'

const Page = ({ params }: { params: { page: string } }) => {
  const currentPage = Number(params.page);
  const postsPerPage = 4;

  return (
    <Search currentPage={currentPage} postsPerPage={postsPerPage} />
  )
}

export default Page
