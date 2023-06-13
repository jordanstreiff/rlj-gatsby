module.exports = {
  siteMetadata: {
    title: "Randolph Lucas Jones House",
    description: "The Randolph-Lucas Jones House is a Georgian Revival-style mansion built in 1924 for Hollins Randolph, the great-great-grandson of Thomas Jefferson. It was later owned by Margaret Lucas until 1988 when it was sold to a developer and used as an event space. In 2013, it was set to be demolished, but was saved by Roger Smith and Christopher Jones, who bought and moved it to a vacant lot in Ansley Park, where it was extensively refurbished. Jones passed away in 2019, and the mansion was renamed in his honor. The house was honored with the Georgia Trust’s Excellence in Preservation Award in 2020, and previously by the Atlanta Preservation Center and the Daughters of the American Revolution’s local chapter. The effort to save the house was described as “one of the most significant preservation projects the city of Atlanta has had in years.",
  },
  plugins: [
    'gatsby-plugin-postcss',
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-copy-files`,
      options: {
        source: `${__dirname}/src/img`,
        destination: '/img',
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        // purgeOnly: ['/bulma-style.sass'], // applies purging only on the bulma css file
        printRejected: true,
        ignore: ['src/style/global.css']
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
