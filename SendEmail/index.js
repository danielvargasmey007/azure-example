const smtp = require('nodejs-nodemailer-outlook');

module.exports = async function (context, req) {

    nodeoutlook.sendEmail({
        auth: {
            user: "notificaciones.cumbiapp@idata.com.co",
            pass: "xWwvJ]6NMw+bWH-d"
        },
        from: 'notificaciones.cumbiapp@idata.com.co',
        to: 'avargas@cidenet.com.co',
        subject: 'Hey you, awesome!',
        html: '<b>This is bold text</b>',
        text: 'This is text version!',
        attachments: [],
        onError: (e) => console.log(e),
        onSuccess: (i) => console.log(i)
    }
    
    
    );
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: 'Mensaje enviado'
    };
}