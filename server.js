const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const app = express();
let PORT = process.env.PORT || 3000;
const adminController = require("./server/adminController");
const authController = require("./server/authController");
const visitorController = require("./server/visitorController");
const slackController = require("./server/slackController");
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const WebSocket = require("ws");

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
    return res.status(200).json(res.locals.result);
  }
);

app.post("/api/postNewAdmin", adminController.postNewAdmin, (req, res) => {
  let event = req.body;
  // console.log("new admin:", event);
  return res.status(200).json(res.locals.result);
});

/**
 * send response back
 * save to DB
 * use websocket to communicate
 */
// drews websocket server
const wss = new WebSocket.Server({ port: 8080 });
wss.on("connection", ws => {
  ws.on("message", message => {
    console.log(`Received message => ${message}`);
  });
  // ws.send("a msg");
  // ws.send("hello from route api/postResponse");
});
var message;
app.post(
  "/api/postResponse",
  adminController.postResponse,
  slackController.updateSlackMessage,
  (req, res) => {
    let event = req.body;
    console.log("post response:", event);
    message = res.locals.result;
    ws.send(res.locals.result);
    return res.status(200).json(res.locals.result);
  }
);

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
    // console.log("new visitor:", event);
    return res.status(200).json(res.locals.result);
  }
);

app.use("", (err, req, res, next) => {
  res.status(400).json(res.locals.err);
});

io.on("connection", socket => {
  console.log("user is connected");
  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
  socket.on("slack", data => socket.emit("client", data));
});

const socketServer = server.listen(PORT, () => {
  const host = socketServer.address().address;
  const port = socketServer.address().port;

  console.log("Listening on port %s", port);
});
