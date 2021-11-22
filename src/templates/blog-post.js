import React from 'react';
import { graphql } from 'gatsby';
import PortableText from '@sanity/block-content-to-react';

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt(formatString: "MMMM D YYYY")
      _rawBody
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
  return (
    <div>
      <h1>{data.post.title}</h1>
      <h2>{data.post.subTitle}</h2>
      <p>{data.post.publishedAt}</p>
      <PortableText blocks={data.post._rawBody} />
    </div>
  );
};

export default blogPost;
