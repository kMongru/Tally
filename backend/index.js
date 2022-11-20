const express = require('express')
const cors = require('cors')

const sql = require('./dbseed.js')

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  sql.query("SELECT lat, lon FROM Location", (err, resp) => {
    if(err) res.send(err);
    res.send(resp);
  })
});

app.get('/search/', (req, res) => {
  console.log(req.query.lat)
  console.log(req.query.lon)
  res.send("Done")
});

app.listen(3000, () =>
  console.log(`Example app listening on port 3000!`),
);

