const express = require('express');
const next = require('next');
const fs = require('fs');
const { getStoreFont } = require('./services/storefont');

const port = process.env.PORT || 8080;
const app = next({ dev: process.env.NODE_ENV !== 'production' });
const handle = app.getRequestHandler();

(async () => {
  await app.prepare();
  const server = express();
  let file = '';
  const resRobots = await getStoreFont('robots');
  if (resRobots && resRobots !== undefined && resRobots.status === 200) {
    file = resRobots.data.robots.text;
  }
  fs.open('public/robots.txt', 'w+', (err, fd) => {
    if (!err) {
      fs.writeFile(fd, file, writeErr => {
        if (writeErr) {
          return writeErr;
        }

        return fs.close(fd, closeErr => {
          return closeErr;
        });
      });
    }
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  await server.listen(port);
  console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
