import { Post } from 'contentlayer/generated'

const Thumbnail = (post: Post) => {
  let path1 = '/images/it.svg'
  let path2 = '/images/bed.svg'
  
  if (post.category === 'it') {
    path1 = '/images/it.svg'
    path2 = '/images/web.svg'
  }

  return (
    <ul className="flex justify-around items-center p-4">
      <li className="mr-4">
        <img src={path1} alt="thumbnail1" className="" />
      </li>
      <li className="hidden sm:block">
        <img src={path2} alt="thumbnail2" className="" />
      </li>
    </ul>
  )
}

export default Thumbnail
