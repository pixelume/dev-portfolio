const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allContentfulProject {
        nodes {
          slug
        }
      }
    }
  `)
  result.data.allContentfulProject.nodes.forEach(node => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/ProjectPage.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    })
  })
}