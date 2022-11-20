const mysql = require('mysql');
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
    let query = "SELECT lat, lon FROM Location"

    con.query(query, (err, result) => {
      if (err) throw err;
      res.send(result)
    })
})

app.get('/search/', (req, res) => {
  let query = `SELECT * FROM Location WHERE lat = ${req.query.lat} AND lon = ${req.query.lon}`

  con.query(query, (err, result) => {
    if (err) throw err;

    if(result.length == 0) {
      res.status(404).send('Status 404: No saved locations found at that lat & long.')
    }

    query = `SELECT * FROM LocationParts WHERE locID = ${result[0].locID} ORDER BY partID ASC`

    con.query(query, (err, result2) => {
      if (err) throw err;

      console.log(result2)

      var getTags = new Promise((resolve, reject) => {
        for(let i = 0; i < result2.length; i+=1) {
          let query_tags = `SELECT p.title as title, p.icon as icon, p.color as color
                            FROM PartsToTypes pT
                            INNER JOIN PartTypes p ON p.typeID = pT.typeID
                            WHERE pT.partID = ${result2[i]['partID']} ORDER BY partID ASC`

          con.query(query_tags, (err, result3) => {
              if (err) throw err
              result2[i]['tags'] = result3
              if (i == result2.length - 1) resolve();
          })
        }
      });

      var getCounter = new Promise((resolve, reject) => {
        for(let i = 0; i < result2.length; i+=1) {
          let query_counter = `SELECT ts, ctr FROM CountPeople WHERE partID = ${result2[i]['partID']} ORDER BY ts DESC LIMIT 50`

          con.query(query_counter, (err, result3) => {
              if (err) throw err
              result2[i]['counter'] = result3
              if (i == result2.length - 1) resolve();
          })
        }
      });
      
      getTags.then(() => {
          getCounter.then(() => {
              result[0]['parts'] = result2
              res.send(result[0])
          });
      });
      
      // let ids = ''

      // result2.forEach(row => {
      //   if(ids != '') {
      //     ids += ','
      //   }

      //   ids += row['partID']
      // })

      // query = `SELECT pT.partID as partID, p.title as title, p.icon as icon, p.color as color
      //               FROM PartsToTypes pT
      //               INNER JOIN PartTypes p ON p.typeID = pT.typeID
      //               WHERE pT.partID in (${ids}) ORDER BY partID ASC`

      // con.query(query, (err, result3) => {
      //   if (err) throw err

      //   let tableMapping = {}

      //   result3.forEach(row => {
      //     const id = row['partID']

      //     delete row['partID']

      //     if(!(id in tableMapping)) {
      //       tableMapping[id] = []
      //     }

      //     tableMapping[id].push(row)
      //   })

      //   for(let i = 0; i < result2.length; i+=1) {
      //     result2[i]['tags'] = tableMapping[i.toString()] ? tableMapping[i.toString()] : []
      //   }
        
      //   result[0]['parts'] = result2

      //   res.send(result[0])

      // })
    })

  })
})

app.listen(3001, () => console.log(`Example app listening on port 3001!`));
