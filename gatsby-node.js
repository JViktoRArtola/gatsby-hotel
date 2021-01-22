/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
        query {
            allDatoCmsBedroom {
                nodes {
                    slug
                }
            }
        }
    `);

  // console.log(result.data.allDatoCmsBedroom.nodes);

  if(result.errors) {
    reporter.panic('There is not results ', result.errors);
  }

  // Si hay paginas, crear los archivos
  const rooms = result.data.allDatoCmsBedroom.nodes;

  rooms.forEach(room => {
    actions.createPage({
      path: room.slug,
      component: require.resolve('./src/components/rooms.js'),
      context: {
        slug: room.slug
      }
    })
  })
}
