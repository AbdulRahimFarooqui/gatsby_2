var path = require('path')

exports.createPages=async ({graphql,actions})=>{
  const {createPage}=actions;
  const result = await graphql(`
  {
    allContentfulElectronics {
      nodes {
        slug
        name
        detailsForElectronics {
          json
        }
      }
    }
  }
  
  `)
  result.data.allContentfulElectronics.nodes.forEach(element => {
    createPage({
      path:`/slug/${element.slug}`,
      component:path.resolve('./src/templates/product.tsx'),
      context:{
        item:element
      },
    })
  });

}

// // Implement the Gatsby API “onCreatePage”. This is
// // called after every page is created.
// exports.onCreatePage = async ({ page, actions }) => {
//     const { createPage } = actions
  
//     // Only update the `/app` page.
//     if (page.path.match(/^\/product/)) {
//       // page.matchPath is a special key that's used for matching pages
//       // with corresponding routes only on the client.
//       page.matchPath = "/product/*"
  
//       // Update the page.
//       createPage(page)
//     }
//   }

// // exports.createPages = async function ({ actions}) {

// //     actions.createPage({
// //         path: "fru",
// //         component: require.resolve(`./src/templates/fruits.tsx`),
// //         context: { 
// //             name: "Manja",
// //             desc:"Arabic for Mango"
// //          },
// //     });
// //     console.log("End of Gatsby Node File");
// // }