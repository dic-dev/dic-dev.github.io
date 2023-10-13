import Link from 'next/link'

type BadgeProps = {
  name?: string
  href?: string
  key?: number
}


export default function Badge({ name, href = '#', key }: BadgeProps) {

  return (
    <Link
      key={key}
      href={href}
      className="text-md font-medium inline-block uppercase text-blue-700 hover:underline decoration-1 dark:text-white dark:bg-gray-950"
    >
      {name}
    </Link>
  )
}

