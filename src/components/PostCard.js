import React from 'react';
import { Link } from 'gatsby';
import * as style from '../styles/styles.module.css';

export default function PostCard({
  slug,
  title,
  subTitle
}) {
  return (
    <article className={style.postLink}>
        <Link to={`/posts/${slug.current}`}>
          <h2 className={style.postTitle}>{title}</h2>
          <h2 className={style.postSubTitle}>{subTitle}</h2>
          <small className={style.readText}></small>
        </Link>
      </article>
  )

}
