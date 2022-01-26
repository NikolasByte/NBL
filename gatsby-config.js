module.exports = {
  siteMetadata: {
    siteUrl: "https://norfolk-basketball-league.netlify.app",
    title: "Please Specify a Title",
    titleTemplate:
      "%s Norfolk Basketball league" ",
    description:
      "%s",
    url: "https://norfolk-basketball-league.netlify.app", // No trailing slash allowed!
    image: "/NBL.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/assets/img/`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Ropa Sans"],
        },
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "xxxxxx",
      },
    },
  ],
}
