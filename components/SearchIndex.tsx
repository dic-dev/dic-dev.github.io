import SearchBox from 'components/SearchBox'
import CategoryBox from 'components/CategoryBox'
import TagBox from 'components/TagBox'
import styles from 'styles/Page.module.scss'
import { BiSearch } from 'react-icons/bi'

const SearchIndex = () => {
  return (
    <div className={styles.box500}>
      <div className={styles.searchbox500}>
        <div className={styles.searchtitle}>
          <BiSearch size="35px" />
          <h3>Keywords</h3>
        </div>
        <div className={styles.center}>
          <SearchBox />
        </div>
      </div>
        <CategoryBox />
        <TagBox />
    </div>
  )
}

export default SearchIndex
