export interface SendMailData {
  subject: string;
  body: string;
}

export interface IMailAdapter {
  sendMail: (data: SendMailData) => Promise<void>;
}
