const { createServer } = require('http');
const next = require('next');
const routes = require('./routes');

const port = +process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  createServer(handler).listen(port, err => {
    if (err) throw err;
    console.info(`> Ready on http://localhost:${port}`);
  });
});
