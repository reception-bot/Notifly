const slackMessage = (body, isResponse) => {

  let emoji = '';

  switch (body.reason.toLowerCase()) {
    case 'interview':
      emoji = '🎙';
      break;
    case 'meeting':
      emoji = '👥';
      break;
    case 'delivery':
      emoji = '📦';
      break;
    case 'other':
      emoji = '¿';
      break;
    default:
      break;
  }

  return {
    'text': `*${body.firstname} ${body.lastname}* is here for a *${body.reason}* ${emoji}`,
    "attachments": [
        {
          "text": "",
          "fallback": "Unable to do it",
          "callback_id": "visitor",
          "color": "#3AA3E3",
          "attachment_type": "default",
          "actions": [
            {
              "name": "onIt",
              "text": "I'm on it",
              "type": "button",
              "value": "onIt",
              "style": "primary"
            }
          ]
        }
    ]
  };

};

module.exports = slackMessage;