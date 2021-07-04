require('ts-node').register({ files: true })

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)

const config = require('./gatsby-config')
require('source-map-support').install()

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = `/${createFilePath({ node, getNode }).split('/')[2]}`

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

// exports.createPages = require('./src/template/createPosts').createPages

/**
 * Makes sure to create localized paths for each file in the /pages folder.
 * For example, pages/404.js will be converted to /en/404.js and /el/404.js and
 * it will be accessible from https:// .../en/404/ and https:// .../el/404/
 */
exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage, createRedirect },
}) => {
  const isEnvDevelopment = process.env.NODE_ENV === 'development'
  const originalPath = page.path

  // Delete the original page (since we are gonna create localized versions of it) and add a
  // redirect header
  await deletePage(page)

  // Netlify, check gatsby-plugin-netlify out. You might need to put createRedirect
  // in the below loop and pass lang to Language parameter.
  // AWS S3, check gatsby-plugin-s3 out. I am not sure how it works.
  // AWS S3 and Cloudfront, you might need to consider lambda edge. As long as I used them,
  // it worked well. But you need to write some code to redirect in lambda edge.
  // If NODE_END is development, always redirect to en if there is not lang in url.
  createRedirect({
    fromPath: originalPath,
    toPath: `/${config.siteMetadata.defaultLanguage}${page.path}`,
    Language: config.siteMetadata.defaultLanguage,
    isPermanent: false,
    redirectInBrowser: isEnvDevelopment,
    statusCode: 301,
  })

  await Promise.all(
    config.siteMetadata.supportedLanguages.map(async (lang) => {
      const localizedPath = `/${lang}${page.path}`

      await createPage({
        ...page,
        path: localizedPath,
        context: {
          ...page.context,
          originalPath,
          lang,
        },
      })
    })
  )
}
