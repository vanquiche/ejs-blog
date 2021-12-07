import React, {useEffect, useState} from 'react';
import PortableText from '@sanity/block-content-to-react';
import Authorship from './Authorship';
import * as style from '../styles/styles.module.css';

export default function Blog({ title, subTitle, block, info }) {
  const [readTime, setReadTime] = useState(0);

  function getReadTime() {
    let wordCount = 0;
    for (let item of block) {
      const count = item.children[0].text.split(' ').length;
      if (count > 1) wordCount += count;
    }
    setReadTime(Math.round(wordCount / 200))
  }

  useEffect(() => {
    getReadTime();
  }, []);

  return (
    <div className={style.blogContainer}>
      <article className={style.blogBody}>
        <header>
          <Authorship meta={info} time={readTime}/>
          <h2 className={style.blogTitle}>{title}</h2>
          <h4 className={style.blogSubTitle}>{subTitle}</h4>
        </header>
        {/* author, date published, time to read */}
        <PortableText blocks={block} />
      </article>
    </div>
  );
}
