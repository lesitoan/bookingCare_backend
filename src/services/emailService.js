import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

const sendSimpleEmail = async (reciverEmail) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL, // generated ethereal user
            pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"Booking Care" <lesitoan.media@gmail.com>', // sender address
        to: reciverEmail, // list of receivers
        subject: "Xác nhận đặt lịch khám bệnh", // Subject line
        // text: "Hello world?", // plain text body
        html: ` <h2>Nhan vao link ben duoi de xac nha</h2>
                <a href="https://youtube.com">Booking care</a>`, // html body
    });
}

module.exports = {
    sendSimpleEmail
};
