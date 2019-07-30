const { Pool } = require("pg");
require('dotenv').config();
//change the url to use env varibales

let url = `${process.env.URL}`;
const pool = new Pool({
  connectionString: url
});

// creating table of visitors
pool.query(
  "CREATE TABLE IF NOT EXISTS visitors (_id SERIAL PRIMARY KEY, fisrtname VARCHAR, lastname VARCHAR, reason VARCHAR, date TIMESTAMP)",
  (err, result) => {
    if (err) throw err;
    console.log("visitors table created", result);
  }
);

//creating table of admin/pin
pool.query(
  "CREATE TABLE IF NOT EXISTS admin (_id SERIAL PRIMARY KEY, pin INTEGER, username VARCHAR)",
  (err, result) => {
    if (err) throw err;
    console.log("admin table created", result);
  }
);

//creating table for slack
pool.query(
  "CREATE TABLE IF NOT EXISTS signin (_id SERIAL PRIMARY KEY, visitor_id INTEGER, admin_id INTEGER, date TIMESTAMP)",
  (err, result) => {
    if (err) throw err;
    console.log("signin table created", result);
  }
);

//exporting query function for server requests
module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
