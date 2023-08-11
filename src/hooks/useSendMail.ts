import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify'

type MailTemplate = {
  from_name: string
  message: string
  email: string
  subject: string
}

export const useSendMail = (templateParams: MailTemplate) => {
  const response = emailjs
    .send(
      `${process.env.NEXT_PUBLIC_SERVER_ID}`,
      `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
      templateParams,
      process.env.NEXT_PUBLIC_MAIL_KEY
    )
    .then(() => {
      toast.success('Email enviado com sucesso!')
    })
    .catch(err => {
      console.log('Erro: ' + err.message)
      toast.error('Ops! Erro ao enviar email!')
    })

  return response
}
