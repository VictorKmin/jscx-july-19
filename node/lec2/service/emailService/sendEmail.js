const mailer = require('nodemailer');

const {EMAIL, PASSWORD} = require('../../config/config.js');

module.exports = async (email) => {

    const transport = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: EMAIL,
            pass: PASSWORD
        }
    });

    const info = await transport.sendMail({
        from: EMAIL,
        to: email,
        subject: 'TEST MESSAGE',
        html: 'kjk',
    });

    return info.response;
}
