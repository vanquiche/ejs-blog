require('dotenv').config();

module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'esj-blog-v2',
  },
  plugins: [
    'gatsby-plugin-gatsby-cloud',
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: 0,
        duration: 500,
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'n0yp8egn',
        dataset: 'production',
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
