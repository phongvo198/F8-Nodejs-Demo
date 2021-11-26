const newsRoute = require('./news');
const meRoute = require('./me');
const siteRoute = require('./site');
const coursesRoute = require('./courses');

function route(app) {
  app.use('/news', newsRoute);
  app.use('/courses', coursesRoute);
  app.use('/me', meRoute);
  app.use('/', siteRoute);
}
module.exports = route;
