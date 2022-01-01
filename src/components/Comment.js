import React from 'react'
import * as style from '../styles/styles.module.css'

export default function Comment({comment}) {
  if (!comment) return null
  return (
    <div className={style.commentBody} key={comment.id}>
      <p className={style.commentUser}>{comment.user}</p>
      <p className={style.commentDate}>{comment._createdAt}</p>
      <p className={style.commentText}>{comment.text}</p>
    </div>
  )
}
