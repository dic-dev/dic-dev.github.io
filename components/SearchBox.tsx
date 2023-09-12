'use client'

import { useForm, SubmitHandler } from "react-hook-form"
import { useRouter } from 'next/navigation'
import styles from 'styles/SearchBox.module.scss'

type Inputs = {
  words: string
}

export default function Search() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const str = data.words.trim().split(/\s+/).join('+')
    const url = `/search?q=${str}`
    router.push(url)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.search}>
      <input {...register("words")} placeholder="Search..." />
      <button type="submit" />
    </form>
  )
}
