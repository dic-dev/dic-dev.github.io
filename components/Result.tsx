type ResultProps = {
  totalPosts: number
  filter: string
  value: string
}

const Result = ({ totalPosts, filter, value }: ResultProps) => {
  return (
    <div className="pl-4 border-l-8 border-l-blue-500 flex justify-between">
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
  )
}

export default Result

