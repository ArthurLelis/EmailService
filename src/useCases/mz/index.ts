import { Request, Response } from 'express';
import con from '../../connection';
import { mainTemplate, replyTemplate } from '../../templates/mz';

export function sendEmailMZ(request: Request, response: Response) {
  const emailProvider = con({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mz@mzassessoriafinanceira.com.br',
      pass: 'Arthur16112003',
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  const { name, email, message } = request.body;

  emailProvider.sendMail(mainTemplate(name, email, message))
    .then((obj) => {
      console.log({ obj });
      response.status(200).json({});

    }).catch((error) => {
      console.log({ error });
      response.status(500).json({});
    });

  reply(name, email, message);
}

function reply(name: string, email: string, message: string) {
  const emailProvider = con({
    host: 'smtp.office365.com',
    port: 587,
    secure: false,
    auth: {
      user: 'mz@mzassessoriafinanceira.com.br',
      pass: 'Arthur16112003',
    },
    tls: {
      ciphers: "SSLv3",
    },
  });

  emailProvider.sendMail(replyTemplate(name, email, message));
}
