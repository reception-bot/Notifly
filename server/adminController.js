const db = require("../database/index");

module.exports = {
  //sent from use acknowledging the signed person
  postResponse(req, res, next) {
    const queryString =
      "INSERT INTO signin (visitor_id, admin_id, date) VALUES ($1, $2, $3) RETURNING *";
    const values = [req.body.visitor_id, req.body.admin_id, req.body.date];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return err;
      }
      res.locals.result = result.rows;
      return next();
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
