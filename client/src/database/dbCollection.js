// import React from 'react';
// const mysql = require('mysql2/promise');

// //import { mysql } from 'mysql2/promise';
// // let mysql = 1;
// let con = null;

// // connect to db
// const connectDb = async () => {
//   con = await mysql.createConnection({
//     host: 'hack-western-9.chu7zm5ttrq2.us-east-1.rds.amazonaws.com',
//     database: 'locationData',
//     user: 'admin',
//     password: 'hackwestern',
//     port: '3306',
//   });
// };

// if (con == null) {
//   connectDb();
// }

// const selectAll = async () => {
//   let query = 'SELECT * FROM PartTypes';

//   let [rows, fields] = await con.execute(query);

//   return rows;
// };

// export { selectAll };
