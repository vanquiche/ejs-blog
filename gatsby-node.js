
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
      const { id, slug = {} } = edge.node;
      const category = edge.node.categories[0].title;
      const path = `/posts/${slug.current}`;
      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: { id, category },
      });
    });
  };
