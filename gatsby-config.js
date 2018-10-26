module.exports = {
  siteMetadata: {
    title: 'BeOne Retreat',
    description: 'Informations about BeOne Weekend Away',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    // {
    //   resolve: 'gatsby-plugin-typography',
    //   options: {
    //     pathToConfigModule: 'src/utils/typography.js',
    //   },
    // },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "BeOne Retreat",
        short_name: "BeOne Retreat",
        start_url: "/",
        background_color: "#266ea3",
        theme_color: "#95c9ed",
        display: "minimal-ui",
        icon: "src/images/logo.png", // This path is relative to the root of the site.
      },
    },
    // 'gatsby-plugin-offline'
  ]
};