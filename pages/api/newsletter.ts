import type { NextApiRequest, NextApiResponse } from 'next';

export default function newsletter(req: NextApiRequest, res: NextApiResponse) {
  require('dotenv').config();
  let nodemailer = require('nodemailer');

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.seznam.cz',
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });

  let mailOptions = {
    from: process.env.email,
    to: process.env.email,
    subject: '🎓 Na přednášku NEWSLETTER',
    html: `<div>email: ${req.body}</div>`,
  };

  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      res.status(500).send(error);
    } else {
      res.status(200).send('OK');
    }
  });
}
