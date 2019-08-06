const db = require("../database/index");

module.exports = {
  verifyAdmin: (req, res, next) => {
    let queryStr = 'SELECT * FROM admin WHERE pin=$1'
    let pin = req.body.pin;
    let values = [pin];
    db.query(queryStr, values, (err, result) => {
      if (err) return err
      res.locals.result = result.rows;
      if (result.rows.length > 0) {
        return next();
      } else {
        res.locals.err = {'error': "Wrong Pin"}
        return next(res.locals.err);
      }
    });
  }
};
