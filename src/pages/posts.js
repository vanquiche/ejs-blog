import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import * as style from '../styles/styles.module.css';

import PostCard from '../components/PostCard';
import Page from '../components/Page';
import SectionTitle from '../components/SectionTitle';

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost(sort: { fields: _createdAt, order: DESC }) {
        edges {
          node {
            subTitle
            title
            _rawSlug
            publishedAt(formatString: "MM DD YYYY")
          }
        }
      }
    }
  `);
  const posts = data.allSanityPost.edges;
  // console.log(posts);
  return (
    <Page bgColor='grey' id='posts'>
      <SectionTitle fontColor='white' styleName={style.featuredTitle}>
        All Posts
      </SectionTitle>
      <div className={style.postContainer}>
        {posts.map((post) => {
          const { title, subTitle, _rawSlug } = post.node;
          return (
            <PostCard title={title} subTitle={subTitle} slug={_rawSlug} />
          );
        })}
      </div>
    </Page>
  );
};

export default Posts;
