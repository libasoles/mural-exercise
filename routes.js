const nextRoutes = require('next-routes');

const routes = nextRoutes();

routes.add('frameworks', '/frameworks/:category/:slug');

module.exports = routes;
