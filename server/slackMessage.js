const slackMessage = (body, isResponse) => {

  let emoji = '';
  let article = 'a ';

  switch (body.reason.toLowerCase()) {
    case 'interview':
      emoji = '🎙';
      article = 'an ';
      break;
    case 'meeting':
      emoji = '👥';
      article = 'a ';
      break;
    case 'delivery':
      emoji = '📦';
      article = 'a ';
      break;
    case 'other':
      emoji = '¿';
      article = '';
      break;
    default:
      article = '';
      break;
  }

  return {
    'text': `*${body.firstname} ${body.lastname}* is here for ${article}*${body.reason}* ${emoji}`,
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