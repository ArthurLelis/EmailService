const mainTemplate = (name, email, message) => {
  return {
    from: 'mz@mzassessoriafinanceira.com.br',
    to: 'mz@mzassessoriafinanceira.com.br',
    subject: 'Nova mensagem do site',
    html: `<b> Nome: </b> ${name} <br>
      <b> E-mail: </b> ${email} <br> <br>

      <b> Mensagem: </b> <br>
      ${message}`,
  };
}

const replyTemplate = (name, email, message) => {
  return {
    from: 'MZ Assessoria Financeira <mz@mzassessoriafinanceira.com.br>',
    to: email,
    subject: 'Recebemos sua mensagem!',
    html: `Olá, <b> ${name}, </b> <br> <br>

      Recebemos sua mensagem e queremos agradecer por entrar em contato conosco. Nossa equipe analisará sua solicitação e responderemos o mais breve possível. <br>

      Aqui estão os detalhes que você nos enviou: <br> <br>

      <b> Nome: </b> ${name} <br>
      <b> E-mail: </b> ${email} <br>
      <b> Mensagem: </b> <br>
      ${message} <br> <br>

      Caso precise adicionar mais alguma informação, basta responder a este e-mail. <br> <br>

      Atenciosamente, <br>
      <b> MZ Assessoria Financeira </b> <br>
      <a href="https://mzassessoriafinanceira.com.br/" target="_blank"> https://mzassessoriafinanceira.com.br/ </a> | mz@mzassessoriafinanceira.com.br`,
  };
}

export { mainTemplate, replyTemplate };
