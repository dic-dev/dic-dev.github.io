import { compareDesc } from 'date-fns'
import { allPosts } from 'contentlayer/generated'

import Hamburger from 'icons/Hamburger'
import Close from 'icons/Close'
import Tag from 'icons/Tag'
import Category from 'icons/Category'
import Search from 'icons/Search'
import LinkIcon from 'icons/Link'
import Home from 'icons/Home'
import Info from 'icons/Info'
import Thumbnail from 'components/Thumbnail'
import Main from 'components/Main'
import Badge from 'components/blog/Badge'

export default function Page() {
  const posts = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)))

  return (
    <div className="bg-white rounded shadow m-4 p-6">
      <div className="border-b border-b-gray-200 pb-6 mb-6 px-4">
        <h3>icons</h3>
        <Hamburger />
        <Close />
        <Category />
        <Search />
        <LinkIcon />
        <Home />
        <Info />
        <div>
          <details>
            <summary>Details</summary>
            Something small enough to escape casual notice.
          </details>
          <details>
            <summary>
              フルーツ
            </summary>
            <ul>
              <li>
                リンゴ
              </li>
              <li>
                ゴリラ
              </li>
            </ul>
          </details>
        </div>
        <Main>aaa</Main>
        <Badge name="home" />
      </div>
    </div>
  )
}
