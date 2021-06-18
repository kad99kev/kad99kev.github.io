module.exports = {
  siteTitle: '@kad99kev',
  siteDescription: 'Undergraduate Student',
  authorName: 'Kevlyn Kadamala',
  twitterUsername: 'kad99kev',
  authorAvatar: 'profile.png', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Hello, I am Kevlyn Kadamala. 
  I'm an Undergraduate Student from India living in Mumbai. 
  My interest majorly lies in Artificial Intelligence, Deep Learning and Reinforcement Learning.
  I am aspiring to become an AI Engineer and a Researcher.
  `,
  siteUrl: 'https://kad99kev.github.io/',
  disqusSiteUrl: 'https://kad99kev.disqus.com/',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/', // Note: it must *not* have a trailing slash.
  siteCover: 'background.jpeg', // file in content/images
  background_color: '#ff96ad',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/favicon.png',
  postsPerPage: 6,
  disqusShortname: 'kad99kev',
  headerTitle: '@kad99kev',
  headerLinksIcon: '', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'Education',
      url: '/education',
    },
    {
      label: 'Experience',
      url: '/experience',
    },
    {
      label: 'Awards',
      url: '/awards',
    },
    {
      label: 'About',
      url: '/about-me',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'Education',
          url: '/education',
        },
        {
          label: 'Experience',
          url: '/experience',
        },
        {
          label: 'Awards',
          url: '/awards',
        },
        {
          label: 'About',
          url: '/about-me',
        },
      ],
    },
    {
      sectionName: 'Follow me!',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/kad99kev',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/kad99kev',
          rel: 'external',
        },
        {
          label: 'LinkedIn',
          url: 'https://www.linkedin.com/in/kevlyn-kadamala/',
          rel: 'external',
        },
      ],
    },
  ],
}
