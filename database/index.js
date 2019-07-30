const { Pool } = require("pg");
//change the url to use env varibales
let url = "postgres://qvgmlczt:XBaX9s...@raja.db.elephantsql.com:5432/qvgmlczt";
const pool = new Pool({
  connectionString: url
});

//create table visitor
pool.query(
  "CREATE TABLE IF NOT EXISTS visitors (_id SERIAL PRIMARY KEY, fisrtname VARCHAR, lastname VARCHAR, reason VARCHAR, date TIMESTAMP)",
  (err, result) => {
    if (err) throw err;
    else console.log("visitors table created", result);
  }
);

//create table admin
pool.query(
  "CREATE TABLE IF NOT EXISTS admin (_id SERIAL PRIMARY KEY, pin VARCHAR, username VARCHAR, email VARCHAR)",
  (err, result) => {
    if (err) throw err;
    else console.log("admin table created", result);
  }
);

//create table signin
pool.query(
  "CREATE TABLE IF NOT EXISTS signin (_id SERIAL PRIMARY KEY, visitor_id VARCHAR, admin_id VARCHAR, date TIMESTAMP)",
  (err, result) => {
    if (err) throw err;
    else console.log("signin table created", result);
  }
);

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};
