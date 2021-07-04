module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Tailwind project template`,
    supportedLanguages: ['en', 'ja'],
    defaultLanguage: 'en',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    // Add typescript stack into webpack
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
    },
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@': 'src',
        },
      },
    },
  ],
}
