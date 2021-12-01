import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Fade from 'react-reveal';
import SectionTitle from './SectionTitle';
import * as style from '../styles/styles.module.css';
import PostCard from './PostCard';

export default function GetStarted() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(filter: { featured: { eq: true } }) {
        edges {
          node {
            subTitle
            title
            _rawSlug
          }
        }
      }
    }
  `);

  return (
    <section
      className={style.blogCard}
      style={{ backgroundColor: '#59AAC0' }}
      id='getStarted'
    >
      <div className={style.postContainer}>
        <Fade bottom>
          <SectionTitle position='center' styleName={style.featuredTitle}>
            Getting Started
          </SectionTitle>
          {data.allSanityPost.edges.map((item) => {
            // move this into a separate component
            // with its own state, and inherit props
            const { title, subTitle, _rawSlug } = item.node;
            return (
              <PostCard title={title} subTitle={subTitle} slug={_rawSlug} />
            );
          })}
        </Fade>
      </div>
    </section>
  );
}
