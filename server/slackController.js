require("dotenv").config();
const slackMessage = require("./slackMessage");
const axios = require('axios');

module.exports = {
  updateSlackMessage(req, res, next) {
    const slack = JSON.parse(req.body.payload);
    let message = slack.original_message;
    delete message.attachments[0].actions;
    message.attachments[0].text = `✓ <@${slack.user.id}> is on it`;
    message.attachments[0].color = '#4CA28B';
    res.locals.message = message
    return next();
  },
};