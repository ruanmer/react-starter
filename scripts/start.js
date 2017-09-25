const express = require('express');
const path = require('path');

const app = express();
const dist = path.join(__dirname, `../dist`);
const port = 3000;

app.use(express.static(dist));

app.get('*', (req, res) => {
  res.sendFile(`${dist}/index.html`);
});

app.listen(port, '0.0.0.0', (err) => {
  if (err) {
    console.log(err);
  }

  console.info('\n ==> Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});
