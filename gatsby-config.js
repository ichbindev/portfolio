module.exports = {
  siteMetadata: {
    title: "Chris Mlinac - Portfolio",
    defaultTitle: "Chris Mlinac - Portfolio",
    titleTemplate: "%s",
    author: 'Chris Mlinac',
    description: 'My Portfolio',
    url: "https://www.mlin.ac", // No trailing slash allowed!
    siteUrl: "https://www.  mlin.ac", // No trailing slash allowed!
    image: "/img/avatar/avatar.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@ichbindev",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
  ],
  proxy: {
    prefix: '/lambda',
    url: 'https://d5o2rd8lqa.execute-api.us-east-1.amazonaws.com'
  }
};
