require(`dotenv`).config()

const shouldAnalyseBundle = process.env.ANALYSE_BUNDLE

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    // You can overwrite values here that are used for the SEO component
    // You can also add new values here to query them like usual
    // See all options: https://github.com/LekoArts/gatsby-themes/blob/main/themes/gatsby-theme-minimal-blog/gatsby-config.js
    siteTitle: `Bernhard Ebner`,
    siteTitleAlt: `Bernhard Ebner`,
    siteHeadline: `Bernhard Ebner`,
    siteUrl: `https://www.bebner.eu`,
    siteDescription: `Ich bin Bernhard Ebner und Wirtschaftsinformatiker. Auf dieser Webseite kannst du IT-Projekte entdecken und an meiner Leidenschaft für die IT-Welt teilhaben.`,
    siteLanguage: `de`,
    siteImage: `/banner.jpg`,
    author: `@ebner`,
  },
  trailingSlash: `never`,
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      // See the theme's README for all available options
      options: {
        navigation: [
          {
            title: `Startseite`,
            slug: `/`,
          },
          {
            title: `Blog`,
            slug: `/blog`,
          },
          {
            title: `About`,
            slug: `/about`,
          },
        ],
        externalLinks: [
         /* {
            name: `LinkedIn`,
            url: `https://www.linkedin.com/in/bernhard-ebner-9b7238222/`,
          },*/
        ],
      },
    },
    {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          color: `white`,
          showSpinner: true,
        },
      },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bernhard Ebner`,
        short_name: `Bernhard Ebner`,
        description: `Ich bin Bernhard Ebner und Wirtschaftsinformatiker. Auf dieser Webseite kannst du IT-Projekte entdecken und an meiner Leidenschaft für die IT-Welt teilhaben.`,
        start_url: `/`,
        background_color: `#fff`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title: siteTitle
                description: siteDescription
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allPost } }) =>
              allPost.nodes.map((post) => {
                const url = site.siteMetadata.siteUrl + post.slug
                const content = `<p>${post.excerpt}</p><div style="margin-top: 50px; font-style: italic;"><strong><a href="${url}">Keep reading</a>.</strong></div><br /> <br />`

                return {
                  title: post.title,
                  date: post.date,
                  excerpt: post.excerpt,
                  url,
                  guid: url,
                  custom_elements: [{ "content:encoded": content }],
                }
              }),
            query: `{
          allPost(sort: {date: DESC}) {
            nodes {
              title
              date(formatString: "MMMM D, YYYY")
              excerpt
              slug
            }
          }
        }`,
            output: `rss.xml`,
            title: `Bernhard Ebner`,
          },
        ],
      },
    },
    shouldAnalyseBundle && {
      resolve: `gatsby-plugin-webpack-bundle-analyser-v2`,
      options: {
        analyzerMode: `static`,
        reportFilename: `_bundle.html`,
        openAnalyzer: false,
      },
    },
  ].filter(Boolean),
}
