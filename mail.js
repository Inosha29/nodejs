const http = require('http');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nanotha7@gmail.com',
    pass: '********'
  }
});
var mailOptions = {
  from: 'nanotha7@gmail.com',
  to: 'info@uki.life',
  subject: 'Testing my nodemailer module',
  html: '<h1>Response for Application</h1>'+
        '<p>Thank you for your response for my application.</p>'+
        '<p>Here is summery:</p>'+
        '<p>Name: Inosha</p>'+
        '<p>Date: oct 2, 2021</p>'+
        '<p>course: Programming </p>'+
        '<p>Interview time: 4:30 PM</p>'+
  };
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}).listen(8000);
