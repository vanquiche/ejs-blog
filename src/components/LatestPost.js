import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
// components
import PortableText from '@sanity/block-content-to-react';
import SectionTitle from './SectionTitle';
import Page from './Page';
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
  const { title, subTitle, _rawBody } = data.allSanityPost.edges[0].node;
  return (
    <Page id='latestPost' bgColor='lightgreen'>
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
          <h3>{title}</h3>
          <h3>{subTitle}</h3>
          <PortableText blocks={_rawBody} />
        </div>

        <Link to='/posts'>view all post</Link>
      </Slide>
    </Page>
  );
}
