import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
// components
import PostCard from '../components/PostCard';
import Page from '../components/Page';
import SectionTitle from '../components/SectionTitle';
import Layout from '../components/Layout';
// css
import * as style from '../styles/styles.module.css';

const Posts = () => {
  const data = useStaticQuery(graphql`
    {
      allSanityPost(sort: { fields: _createdAt, order: DESC }) {
        edges {
          node {
            _id
            subTitle
            title
            _rawSlug
            publishedAt(formatString: "MMM DD YYYY")
          }
        }
      }
    }
  `);
  const posts = data.allSanityPost.edges;
  return (
    <Layout>
      <div className={style.allPostContainer} id='posts'>
        <SectionTitle fontColor='white' styleName={style.featuredTitle}>
          All Posts
        </SectionTitle>
        <div className={style.postContainer}>
          {posts.map((post) => {
            const { title, subTitle, _rawSlug, publishedAt, _id } = post.node;
            return (
              <PostCard
                key={_id}
                date={publishedAt}
                title={title}
                subTitle={subTitle}
                slug={_rawSlug}
              />
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Posts;
