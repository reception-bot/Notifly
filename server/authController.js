module.exports = {
  verifyAdmin: (req, res, next) => {
    const { pin } = req.body;
    if (pin === "1600") {
      return next();
    } else {
      return next("Wrong Pin");
    }
  }
};
