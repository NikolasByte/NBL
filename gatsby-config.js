module.exports = {
  siteMetadata: {
    siteUrl: "https://www.pcracing.co.uk",
    title: "Please Specify a Title",
    titleTemplate:
      "%s | Peter Charalambous Racehorse Trainer | Newmarket Racehorse Syndicate ",
    description:
      "%s",
    url: "https://www.pcracing.co.uk", // No trailing slash allowed!
    image: "/pcracinglogo.png", // Path to your image you placed in the 'static' folder
    twitterUsername: "@pcracing",
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
        trackingId: "UA-51924997-1",
      },
    },
  ],
}
