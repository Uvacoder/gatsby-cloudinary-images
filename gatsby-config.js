require('dotenv').config();
module.exports = {
  siteMetadata: {
    title: `Cloudinary Images`,
    description: `Get the images from Cloudinary`,
    author: `Ranganath`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/upload`,
      },
    },
    {
      resolve: 'gatsby-transformer-cloudinary',
      options: {
        cloudName: `iarenotamnot`,
        apiKey: `474614758638643`,
        apiSecret: `zro75o_Ij8abg4fCFOfCpR4ogSg`,
        uploadFolder: 'Gatsby-images',
      }
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: `iarenotamnot`,
        apiKey: `474614758638643`,
        apiSecret: `zro75o_Ij8abg4fCFOfCpR4ogSg`,
        resourceType: `image`,
      }
    }
  ],
}
