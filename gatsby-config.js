module.exports = {
  siteMetadata: {
    title: 'BeOne Retreat',
    description: 'Informations about BeOne Weekend Away',
  },
  plugins: [
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
  ]
};