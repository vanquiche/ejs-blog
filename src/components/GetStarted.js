import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal';
import SectionTitle from './SectionTitle';
import * as style from '../styles/styles.module.css';

export default function GetStarted() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(filter: { featured: { eq: true } }) {
        edges {
          node {
            subTitle
            title
          }
        }
      }
    }
  `);

  return (
    <section
      className={style.blogCard}
      style={{ backgroundColor: 'lightblue' }}
      id='getStarted'
    >
      <div className={style.postContainer}>
        <Fade bottom>
          <SectionTitle styleName={style.featuredTitle}>
            Getting Started
          </SectionTitle>
          {data.allSanityPost.edges.map((item) => (
            <article className={style.postLink}>
              <h2 className={style.postTitle}>{item.node.title}</h2>
              <h2 className={style.postSubTitle}>{item.node.subTitle}</h2>
              <small className={style.readText}></small>
            </article>
          ))}
        </Fade>
      </div>
    </section>
  );
}
