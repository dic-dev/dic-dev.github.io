import { allPosts } from 'contentlayer/generated'
import TagPage from 'components/TagPage'

export const generateStaticParams = async () => {
  const posts = allPosts.filter((post) => typeof post.tags !== 'undefined');
  const tagsCol = posts.map((post) => (post.tags));
  let tags = tagsCol.flat();
  tags = Array.from(new Set(tags));
  const paths = tags.map((tag) => ({ tag: tag }));

  return paths;
}

const Page = ({ params }: { params: { tag: string } }) => {

  return (
    <TagPage tag={params.tag} page="1" />
  )
}

export default Page

