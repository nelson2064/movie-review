const nodemailer = require('nodemailer')

exports.generateOTP = (otp_length = 6) => {
    let OTP = "";
    for (let i = 1; i <= otp_length; i++) {
        const randomVal = Math.round(Math.random() * 9);
        OTP += randomVal;
    }

    return OTP;
};

exports.generateMailTransporter = () =>
    nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: process.env.MAIL_TRAP_USER,
            pass: process.env.MAIL_TRAP_PASS
        }
    });


    // exports.generateMailTransporter = () =>
    // nodemailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //         user: "bcb016e5e87501",
    //         pass: "b5d03096650ad4"
    //     }
    // });


    // exports.generateMailTransporter = () =>
    // nodemailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //         user: bcb016e5e87501,
    //         pass: b5d03096650ad4
    //     }
    // });

    // exports.generateMailTransporter = () =>
    // nodemailer.createTransport({
    //     host: "smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //         user: bcb016e5e87501,
    //         pass: b5d03096650ad4
    //     }
    // });


    // var transport = nodemailer.createTransport({
    //     host: "sandbox.smtp.mailtrap.io",
    //     port: 2525,
    //     auth: {
    //       user: "bcb016e5e87501",
    //       pass: "b5d03096650ad4"
    //     }
    //   });