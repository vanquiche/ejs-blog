import React from 'react';
import PortableText from '@sanity/block-content-to-react';
import Authorship from './Authorship';
import * as style from '../styles/styles.module.css';

export default function Blog({ title, subTitle, block, info }) {
  return (
    <div className={style.blogContainer}>
      <article className={style.blogBody}>
        <header>
          <Authorship meta={info} />
          <h2 className={style.blogTitle}>{title.toUpperCase()}</h2>
          <h4 className={style.blogSubTitle}>{subTitle.toUpperCase()}</h4>
        </header>
        {/* author, date published, time to read */}
        <PortableText blocks={block} />
      </article>
    </div>
  );
}
