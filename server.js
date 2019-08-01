const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const adminController = require("./server/adminController");
const authController = require("./server/authController");
const visitorController = require("./server/visitorController");
const slackController = require("./server/slackController");
// This serves static files from root directory
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post(
  "/api/adminData",
  authController.verifyAdmin,
  adminController.getAdminData,
  (req, res) => {
    console.log("back again");
    console.log(res.locals.result);
    return res.status(200).send(res.locals.result);
  }
);

app.post("/api/postNewAdmin", adminController.postNewAdmin, (req, res) => {
  let event = req.body;
  console.log("new admin:", event);
  return res.status(200).json(res.locals.result);
});

/**
 * send response back
 * save to DB
 * use websocket to communicate
 */
app.post("/api/postResponse", adminController.postResponse, (req, res) => {
  let event = req.body;
  console.log("post response:", event);
  return res.status(200).json(res.locals.result);
});

/**
 * send to slack
 * save to DB
 * error handling
 */
app.post(
  "/api/postVisitorData",
  visitorController.postVisitor,
  visitorController.postSlack,
  (req, res) => {
    let event = req.body;
    console.log("new visitor:", event);
    return res.status(200).json(res.locals.result);
  }
);

/**
 * update Slack message upon click
 */
app.post("/api/visitor", slackController.updateSlackMessage, (req, res) => {
  let event = req.body;
  console.log("new visitor:", event);
  return res.status(200).json(res.locals.result);
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
