const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
const adminController = require("./adminController");
const visitorController = require("./visitorController");

// This serves static files from root directory
app.use(express.static(__dirname));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get(["/", "/index.html"], (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/api/adminData", adminController.getAdminData, (req, res) => {});

app.post("/api/postNewAdmin", adminController.postNewAdmin, (req, res) => {
  let event = req.body;
  console.log("new admin:", event);
});

/**
 * send response back
 * save to DB
 * use websocket to communicate
 */
app.post("/api/postResponse", adminController.postResponse, (req, res) => {
  let event = req.body;
  console.log("post response:", event);
});

/**
 * send to slack
 * save to DB
 * error handling
 */
app.post("/api/postVisitorData", visitorController.postVisitor, (req, res) => {
  let event = req.body;
  console.log("new visitor:", event);
});

const server = app.listen(3000, () => {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App listening at http://%s:%s", host, port);
});
