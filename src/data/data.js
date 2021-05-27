module.exports = {
  SiteTitle: 'kad99kev',
  Sitelogo: '#',
  SiteLogoText: 'kad99kev',
  SiteAuthor: 'Kevlyn Kadamala',
  SiteDescription: 'ML Engineer',
  defaultDescription: 'Software engineer!', 
  githubApiQuery: `query ($number_of_repos: Int!) {
    viewer {
      name
      avatarUrl
      isHireable
      resourcePath
      repositories(last: $number_of_repos, privacy: PUBLIC, orderBy: { field: STARGAZERS, direction: ASC } ) {
        nodes {
          name
          description
          homepageUrl
          forkCount
          createdAt
          updatedAt
          resourcePath
          languages(last: 1, orderBy: { field: SIZE, direction:ASC } ) {
            edges {
              node {
                name
                color
              }
            }
          }
          licenseInfo {
            name
          }
          stargazers {
            totalCount
          }
        }
      }
    }
  }`,
  githubApiVariables: {
    number_of_repos: 12,
  }, 
  SiteSocialLinks: {
    twitter: 'https://twitter.com/kad99kev',
    github: 'https://github.com/kad99kev',
    linkedin: 'https://www.linkedin.com/in/kevlyn-kadamala/',
  },
  SiteAddress: {
    city: 'Mumbai',
    region: 'Maharashtra',
    country: 'India',
    zipCode: 'ZipCode',
  },
  SiteContact: {
    email: 'kevlyn@gmail.com',
    phone: 'phone number',
  },
  SiteCopyright: '2021',
};
