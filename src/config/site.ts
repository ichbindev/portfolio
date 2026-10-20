/**
 * Replaces the `siteMetadata` block that used to live in gatsby-config.js and
 * was read through a `useStaticQuery` GraphQL query in the SEO component.
 */
export const siteConfig = {
  title: 'Chris Mlinac - Portfolio',
  titleTemplate: '%s',
  author: 'Christopher Mlinac',
  description: 'Portfolio of Chris Mlinac, a senior software engineer based in Munich, Germany.',
  /** No trailing slash. */
  siteUrl: 'https://www.mlin.ac',
  image: '/img/avatar/avatar.jpg',
  twitterUsername: '@ichbindev',
} as const;
