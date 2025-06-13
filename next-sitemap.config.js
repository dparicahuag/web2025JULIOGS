/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: 'https://www.ganasafi.com.bo',
  generateRobotsTxt: true, // generar robots.txt
  sitemapSize: 5000, // opcional: límite por archivo sitemap
  exclude: [
    '/server.xml',
    '/admin/*',
    '/panel/*',
    '/api/*',
    '/404',
    '/500'
  ],
  changefreq: 'weekly',
  priority: 0.7,
  trailingSlash: false,
};

module.exports = config;