import React from 'react';
import { Link } from 'gatsby';
import * as style from '../styles/styles.module.css';

export default function Related({ title, subtitle, slug }) {
  return (
    <div className={style.relatedContainer}>
      <Link to={`/posts/${slug}`} style={{color: 'black'}}>
        <h3>{title}</h3>
        <h4>{subtitle}</h4>
      </Link>
    </div>
  );
}
