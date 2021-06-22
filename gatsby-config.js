const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  plugins: [
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: ${{secrets.CONTENTFUL_SPACE_ID}},
      // Learn about environment variables: https://gatsby.dev/env-vars
      accessToken: ${{secrets.CONTENTFUL_TOKEN}},
    },
  },

],
};
