module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'esj-blog-v2',
  },
  plugins: ['gatsby-plugin-gatsby-cloud', {
    resolve: 'gatsby-plugin-anchor-links',
    options: {
      offset: 0,
      duration: 500
    }
  }],
};
