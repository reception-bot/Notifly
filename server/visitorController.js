const db = require("../database/index");

module.exports = {
  //post visitor comes from the main page when visitor signs up.
  //firstname, lastname, reason for visiting and date should be in the body
  postVisitor(req, res, next) {
    const queryString =
      "INSERT INTO visitors (firstname, lastname, reason, date) VALUES ($1, $2, $3, $4) RETURNING *";
    const values = [
      req.body.firstname,
      req.body.lastname,
      req.body.reason,
      req.body.date
    ];
    db.query(queryString, values, (err, result) => {
      if (err) {
        return err;
      }
      res.locals.result = result.rows;
      return next();
    });
  }
};
