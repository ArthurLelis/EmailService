import nodemailer from 'nodemailer';

export default function con(obj: Object) {
  const emailProvider = nodemailer.createTransport(obj);

  // emailProvider.verify((error, success) => {});

  return emailProvider;
}
