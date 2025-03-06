import nodemailer from 'nodemailer';
import { Request, Response } from 'express';

import { mainTemplate, replyTemplate } from '../../templates/mz';

function connection() {
  const emailProvider: nodemailer.Transporter = nodemailer.createTransport({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mz@mzassessoriafinanceira.com.br',
      pass: '4rthur2003$',
    },
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
  });

  return emailProvider;
}

export function sendEmailMZ(request: Request, response: Response) {
  const emailProvider = connection();

  const { name, email, message } = request.body;

  const template = mainTemplate(name, email, message);

  emailProvider.sendMail(template)
    .then((success) => {
      console.log({ success });
      response.status(200).json({});

    }).catch((error) => {
      console.log({ error });
      response.status(500).json({});
    });
}

export function reply(request: Request, response: Response) {
  const emailProvider = connection();

  const { name, email, message } = request.body;

  const template = replyTemplate(name, email, message);

  emailProvider.sendMail(template,)
    .then((success) => {
      console.log({ success });
      response.status(200).json({});

    }).catch((error) => {
      console.log({ error });
      response.status(500).json({});
    });;
}
