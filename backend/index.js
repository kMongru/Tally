const mysql = require('mysql2/promise');
const express = require('express');
const app = express();
const cors = require('cors');
const router = express.Router();

app.use(cors());

let con = null;

const createCon = async () => {
  con = await mysql.createConnection({
    host: 'hack-western-9.chu7zm5ttrq2.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'hackwestern',
    port: 3306,
    database: 'locationData',
  });
};

if (con == null) createCon();

app.use(express.json());

app.get('/locations/', async (req, res) => {
  [result] = await con.query('SELECT lat, lon FROM Location');
  res.send(result);
});

app.get('/search/', (req, res) => {
  // lat => req.query.lat, lon => req.query.lon
  // const LOCATION_QUERY = `SELECT * FROM Location WHERE lat = '${req.query.lat}' AND lon = '${req.query.' `
  // sql.query(`SELECT * FROM Location WHERE lat")
  // console.log(req.query.lat)
  // console.log(req.query.lon)
  // res.send("Done")
});

app.listen(3001, () => console.log(`Example app listening on port 3001!`));
