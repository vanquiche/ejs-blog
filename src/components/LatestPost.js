import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
// components
import PortableText from '@sanity/block-content-to-react';
import SectionTitle from './SectionTitle';
// css
import Slide from 'react-reveal';
import * as style from '../styles/styles.module.css';

export default function LatestPost() {
  const data = useStaticQuery(graphql`
    query {
      allSanityPost(sort: { fields: _createdAt, order: DESC }, limit: 1) {
        edges {
          node {
            subTitle
            title
            _rawSlug
            _rawBody
          }
        }
      }
    }
  `);
  const { title, subTitle, _rawBody, _rawSlug } =
    data.allSanityPost.edges[0].node;

  const linkContainer = {
    display: 'flex',
    width: '300px',
    justifyContent: 'space-around',
    margin: '15px 0',
    fontFamily: 'Montserrat',
  };
  return (
    <section
      id='latestPost'
      className={style.latestPost}
      style={{ backgroundColor: '#7BB88C' }}
    >
      <Slide bottom>
        <SectionTitle
          position='center'
          fontColor='whitesmoke'
          styleName={style.featuredTitle}
        >
          Latest Post
        </SectionTitle>
      </Slide>
      <Slide bottom cascade>
        <div className={style.latestBody}>
          <header>
            <h2 className={style.blogTitle}>{title.toUpperCase()}</h2>
            <h4 className={style.blogSubTitle}>{subTitle.toUpperCase()}</h4>
          </header>
          <PortableText blocks={_rawBody} />
        </div>
        <div style={linkContainer}>
          <Link to={`/posts/${_rawSlug.current}`}>read</Link>
          <Link to='/posts'>view all post</Link>
        </div>
      </Slide>
    </section>
  );
}
