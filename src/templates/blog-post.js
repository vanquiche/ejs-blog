import React from 'react';
import { graphql } from 'gatsby';
import Blog from '../components/Blog';
import Layout from '../components/Layout';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
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
    }
  }
`;

const blogPost = (props) => {
  const { data } = props;
  const { title, subTitle, _rawBody } = data.post;
  const info = {
    author: data.post.author.name,
    published: data.post.publishedAt
  }

  return (
    <Layout>
      <Blog
        title={title}
        subTitle={subTitle}
        block={_rawBody}
        info={info} />
    </Layout>
  );
};

export default blogPost;
