import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

export default function Related({category}) {
  // const query = useStaticQuery(graphql`
  //   query ($eq: String = category) {
  //     allSanityPost(
  //       filter: { categories: { elemMatch: { title: { eq: $eq } } } }
  //     ) {
  //       edges {
  //         node {
  //           title
  //           slug {
  //             current
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);
  return (
    <div>

    </div>
  )
}
