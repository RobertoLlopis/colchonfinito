import React from 'react'
import s from './Title.module.scss'

function Title({ title }: { title: string }) {
  return (
    <h1 className={s.postTitle}>{title}</h1>
  )
}

export default Title