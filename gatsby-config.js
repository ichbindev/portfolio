module.exports = {
  siteMetadata: {
    title: 'Chris Mlinac - Portfolio',
    defaultTitle: 'Chris Mlinac - Portfolio',
    titleTemplate: '%s',
    author: 'Christopher Mlinac',
    description: 'My Portfolio',
    url: 'https://www.mlin.ac', // No trailing slash allowed!
    siteUrl: 'https://www.mlin.ac', // No trailing slash allowed!
    image: '/img/avatar/avatar.jpg', // Path to your image you placed in the 'static' folder
    twitterUsername: '@ichbindev',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.mlin.ac',
        sitemap: 'https://www.mlin.ac/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
  ],
  proxy: {
    prefix: '/lambda',
    url: 'https://d5o2rd8lqa.execute-api.us-east-1.amazonaws.com',
  },
};
