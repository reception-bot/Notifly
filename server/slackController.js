require("dotenv").config();
const slackMessage = require("./slackMessage");
const axios = require('axios');

module.exports = {
  updateSlackMessage(req, res, next) {
    let message = req.body.original_message;
    delete message.attachments[0].actions;
    message.attachments[0].text = `@${req.body.user.name} is on it`;
    console.log('👥 message.attachments[0].actions', message.attachments[0].actions);
    console.log('✅ message.attachments[0].text', message.attachments[0].text);
    return res.status(200).json(message);
  },
};