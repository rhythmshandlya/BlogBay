const nodemailer = require('nodemailer');
const fs = require('fs');
const util = require('util');
//new Email(user,url).sendWelcome();
module.exports = class Email {
  constructor(user) {
    this.to = user.email;
    this.firstName = user.name.split(' ')[0];
    this.from = `Regards from: ${process.env.EMAIL_SENDER}`;
  }
  createTransport() {
    if (process.env.MODE === 'DEV') {
      return nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: '790c809bd7a47e',
          pass: 'a4ee3ccce39e33'
        }
      });
    } else if (process.env.MODE === 'PRO') {
      return nodemailer.createTransport({
        service: 'SendGrid',
        auth: {
          user: process.env.SENDGRID_USERNAME,
          pass: process.env.SENDGRID_PASSWORD
        }
      });
    }
  }
  async send(html, subject) {
    const EmailOptions = {
      from: this.from,
      to: this.to,
      subject,
      html
    };
    await this.createTransport().sendMail(EmailOptions);
  }

  async sendEmailConfirmation(url, email) {
    let emailTemplate = await util.promisify(fs.readFile)(
      `${__dirname}/../Data/emailConfirmation.html`,
      'utf-8'
    );
    emailTemplate = emailTemplate
      .replace('{%URL%}', url)
      .replace('{%EMAIL%}', email);
    await this.send(emailTemplate, 'EMAIL VERIFICATION: BlogBay');
  }

  async sendEmailForgotPassword(url) {
    let emailTemplate = await util.promisify(fs.readFile)(
      `${__dirname}/../Data/resetPassword.html`,
      'utf-8'
    );
    emailTemplate = emailTemplate.replace('{%URL%}', url);
    await this.send(emailTemplate, 'EMAIL VERIFICATION: BlogBay');
  }
};
