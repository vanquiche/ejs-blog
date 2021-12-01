
exports.createPages = async function({ actions, graphql }) {
    const {createPage} = actions;
    const result = await graphql(`
      {
        allSanityPost {
          edges {
            node {
              id
              publishedAt
              slug {
                current
              }
              categories {
                title
                id
              }
            }
          }
        }
      }
    `);

    if (result.errors) throw result.errors;

    const postEdges = (result.data.allSanityPost || {}).edges || [];

    postEdges.forEach((edge) => {
      const { categories, id, slug = {} } = edge.node;

      const path = `/posts/${slug.current}`;
      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { id, categories },
      });
    });
  };