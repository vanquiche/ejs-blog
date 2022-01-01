import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Fade, Bounce } from 'react-reveal';
import * as style from '../styles/styles.module.css';

export default function PostCard({key, date, slug, title, subTitle }) {
  const [showText, setShowText] = useState(false);
  return (
    <article
      key={key}
      className={style.postLink}
      onMouseEnter={() => setShowText(true)}
      onMouseLeave={() => setShowText(false)}
    >
      {showText && (
        <Bounce top>
          <div className={style.postDot}></div>
        </Bounce>
      )}
      <p className={style.postDate}>{date}</p>
      <Link to={`/posts/${slug.current}`}>
        <h2 className={style.postTitle}>{title.toUpperCase()}</h2>
        <br />
        <h4 className={style.postSubTitle}>{subTitle.toUpperCase()}</h4>
        {showText && (
          <Fade>
            <p className={style.readText}>read now</p>
          </Fade>
        )}
      </Link>
    </article>
  );
}
