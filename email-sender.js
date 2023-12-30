
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'node@gmail.com',
    pass: 'azerty2312',
  },
});

const mailOptions = {
  from: 'node@gmail.com',
  to: 'node@yahoo.com',
  subject: 'Test Email',
  text: 'Hello from Node.js!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error);
  } else {
    console.log('Email sent:', info.response);
  }
});
