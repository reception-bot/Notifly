const { Pool } = require("pg");
//change the url to use env varibales
let url = "postgres://qvgmlczt:XBaX9s...@raja.db.elephantsql.com:5432/qvgmlczt";
const pool = new Pool({
  coconnectionString: u
})});

// creating table of visitors
pool.query(err, result) => {
  if(err) throw err;
  console.log()visitrs table created", result);
});

//creating table of admin/pin
poerr, result) => {
   if (err) throw err;
    console.log( admin table reated", result);
  });

//creating table for slack
pool.query()CREATE TABLerr, result) => {
    if(err) throw err;
   onsole.log("signin table created", result);
  );

////exporting query function for server requests
module.expoery: (text, params, callback) => {
    return pool.query(text, params, callback)IAL PRIMARY KEY, visitor_id INTEGER, admin_id INTEGER, date TIMESTAMP)",
}};