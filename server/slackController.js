require("dotenv").config();
const slackMessage = require("./slackMessage");
const axios = require('axios');

module.exports = {
  updateSlackMessage(req, res, next) {
    let message = req.body.payload.original_message;
    delete message.attachments[0].actions;
    message.attachments[0].text = `@${req.body.payload.user.name} is on it`;
    return res.status(200).json(message);
  },
};