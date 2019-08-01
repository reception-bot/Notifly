const db = require("../database/index");

const insertSignin = (req, res, next, result) => {
  let visitorId = 1600;
  console.log('❎', result);
  if(result.rows[0]) {
    visitorId = result.rows[0]._id;
  }
  const slack = JSON.parse(req.body.payload);
  let staffId = slack.user.id;
  let now = new Date();
  const insertSigninQuery =
    "INSERT INTO signin (visitor_id, admin_id, date) VALUES ($1, $2, $3) RETURNING *;";
  db.query(insertSigninQuery, [visitorId, staffId, now], (err, result) => {
    if (err) return err;
    res.locals.result = result.rows;
    return next();
  });
};

module.exports = {
  //sent from use acknowledging the signed person
  postResponse(req, res, next) {
    const slack = JSON.parse(req.body.payload);
    // console.log('👤 Slack Response:', slack);
    let visitorName = slack.original_message.text
      .match(/\*(.*?)\*/g);
    visitorName = visitorName[0]
      .replace(/[*]/g, '')
      .split(' ');
    const findVisitorQuery =
      'select _id from visitors where firstname=$1 and lastname=$2 order by date desc limit 1;';
    db.query(findVisitorQuery, [visitorName[0], visitorName[1]], (err, findVisitorResult) => {
      if (err) return err;
      const selectUsernameQuery = 'select username from staff where _id=$1;';
      db.query(selectUsernameQuery, [slack.user.id], (err, result) => {
        if (err) return err;
        if (result.rows[0]) {
          if (result.rows[0].username !== slack.user.name) {
            const updateUsernameQuery = 'update staff set username=$1 where _id=$2;';
            db.query(updateUsernameQuery, [slack.user.name, slack.user.id], (err, result) => {
              if (err) return err;
              insertSignin(req, res, next, findVisitorResult);
            });
          } else {
            insertSignin(req, res, next, findVisitorResult);
          }
        } else {
          const insertStaffQuery = 'insert into staff (_id, username) values ($1, $2);';
          db.query(insertStaffQuery, [slack.user.id, slack.user.name], (err, result) => {
            if (err) return err;
            insertSignin(req, res, next, findVisitorResult);
          });
        }
      });
    });
  },

  //admin login with pin
  getAdminData(req, res, next) {
    const queryString = "SELECT username FROM admin WHERE pin = $1";
    const values = [req.body.pin];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return err;
      }
      res.locals.result = result.rows;
      return next();
    });
  },

  //create a new admin
  postNewAdmin(req, res, next) {
    const queryString =
      "INSERT INTO admin (pin, username, email) VALUES ($1, $2)";
    const values = [req.body.pin, req.body.username, req.body.email];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return err;
      }
      res.locals.result = result.rows;
      return next();
    });
  }
};
