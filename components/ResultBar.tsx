type ResultBarProps = {
  totalPosts: number
  filter: string
  value: string
}

const ResultBar = ({ totalPosts, filter, value }: ResultBarProps) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto p-4">
      <div className="bg-blue-500 rounded shadow text-white dark:bg-gray-900 px-4 py-2 flex justify-between">
        <span className="text-xl font-medium">Result : {totalPosts} {totalPosts === 1 ? ' post' : ' posts'}</span>
        <div>
          <span className="text-xl font-medium">{filter} : </span>
          {filter === "Category" || filter === "Tag"
            ?
            <span className="text-xl font-medium uppercase">{value}</span>
            :
            <span className="text-xl font-medium">{value}</span>
          }
        </div>
      </div>
    </div>
  )
}

export default ResultBar
