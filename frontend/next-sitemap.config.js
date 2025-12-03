module.exports = {
    siteUrl: 'https://gstar.huqi.host',
    generateRobotsTxt: true, // (optional) Generate a robots.txt file
    robotsTxtOptions: {
        policies: [
            { userAgent: '*', disallow: '/_next/' },
            { userAgent: '*', disallow: '/embed' },
        ],
    },
  };
  