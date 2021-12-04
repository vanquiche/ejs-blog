import React from 'react';
import { graphql } from 'gatsby';
import Blog from '../components/Blog';
import Layout from '../components/Layout';
import Related from '../components/Related';
import * as style from '../styles/styles.module.css';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!, $category: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt(formatString: "MMM D YYYY")
      _rawBody
      author {
        name
      }
      subTitle
      title
      slug {
        current
      }
      categories {
        id
        title
      }
    }
    category: allSanityPost(
      filter: {
        categories: { elemMatch: { title: { eq: $category } } }
        id: { ne: $id }
      }
      limit: 4
    ) {
      edges {
        node {
          title
          subTitle
          slug {
            current
          }
          categories {
            id
            title
          }
        }
      }
    }
  }
`;

const blogPost = (props) => {
  const { data } = props;
  const { title, subTitle, _rawBody } = data.post;
  const info = {
    author: data.post.author.name,
    published: data.post.publishedAt,
  };

  return (
    <Layout>
      <Blog title={title} subTitle={subTitle} block={_rawBody} info={info} />
      <div className={style.related}>
        {(data.category.edges.length > 0) && <><hr /><p className={style.relatedHeading}>Related Posts</p></>}
        {data.category.edges.map((item) => {
          return (
            <Related
              title={item.node.title}
              subtitle={item.node.subTitle}
              slug={item.node.slug.current}
            />
          );
        })}
      </div>
    </Layout>
  );
};

export default blogPost;
