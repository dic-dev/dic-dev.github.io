import { allPosts } from 'contentlayer/generated'
import TagPage from 'components/TagPage'

export const generateStaticParams = async () => {
  const taggedPosts = allPosts.filter((post) => typeof post.tags !== 'undefined');
  const tagsCol = taggedPosts.map((post) => (post.tags));
  let tags = tagsCol.flat();
  tags = Array.from(new Set(tags));
  if (tags.length === 0) {
    return []
  }
  let staticParams: any = [];
  for (let i = 0; i <= tags.length - 1; i++) {
    const tag = String(tags[i]);
    const posts = allPosts.filter((post) => typeof post.tags !== 'undefined' && post.tags.includes(tag));
    const totalPosts = posts.length;
    const postsPerPages = 1;
    const totalPages = Math.ceil(totalPosts / postsPerPages);
    const paramsArr = [...Array(totalPages)].map((_, i) => ({ tag: tag, page: String(i + 1), }));
    staticParams = [...staticParams, ...paramsArr];
  }

  return staticParams;
}

const Page = ({ params }: { params: { tag: string, page: string } }) => {

  return (
    <TagPage tag={params.tag} page={params.page} />
  )
}

export default Page

