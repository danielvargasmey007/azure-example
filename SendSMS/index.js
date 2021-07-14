var accountSid = 'accountSid';
var authToken = 'authToken'; 

const client = require('twilio')(accountSid, authToken);


const sgMail = require('@sendgrid/mail');

module.exports = async function (context, req) {
sgMail.setApiKey('APIKEY');
const msg = {
  to: 'your-email',
  from: 'cumbiacidenet@cumbiacidenet.com', // Use the email address or domain you verified above
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });
}

function newFunction(context) {
    client.messages.create({
        body: 'Esto es una prueba CumbIA Cidenet - #' + index,
        to: '+57301362781677',
        from: '+1201677547188' // From a valid Twilio number
    })
        .then((message) => {
            context.res = {
                body: message.sid
            };
        }).catch((err) => {
            console.log(err);
        });
}
