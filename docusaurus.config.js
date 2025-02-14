const config = {
  title: "TechBlog",
  tagline: "Where Technology Meets Creativity",
  url: "https://your-domain.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "your-github-username",
  projectName: "techblog",

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/your-github-username/techblog/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "TechBlog",
      logo: {
        alt: "TechBlog Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "/", label: "Blog", position: "left" },
        {
          href: "https://github.com/your-github-username/techblog",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/your-github-username/techblog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} TechBlog. Built with Docusaurus.`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
  },
}

module.exports = config

