/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ganasafi.com.bo',
  generateRobotsTxt: true,
  exclude: ['/server.xml', '/admin/*', '/panel/*', '/api/*', '/404', '/500'],
};
