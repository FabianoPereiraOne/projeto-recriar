import { Title } from '@/components/Blocks/Title'
import emailjs from "@emailjs/browser"
import { useState } from 'react'
import { toast } from 'react-toastify'
import styles from './styles.module.css'

export const Contact = () => {

 const [name, setName] = useState('')
 const [subject, setSubject] = useState('')
 const [email, setEmail] = useState('')
 const [message, setMessage] = useState('')

 const handlerClearInputs = () => {
  setName('')
  setEmail('')
  setSubject('')
  setMessage('')
 }

 const handlerSendMail = async (event: any) => {
  event.preventDefault()

  if (name.length <= 0 || subject.length <= 0 || email.length <= 0 || message.length <= 0) {
   toast.error("Preencha todos os dados")
   return
  }

  const templateParams = {
   from_name: name,
   message: message,
   email: email,
   subject: subject
  }

  emailjs.send(`${process.env.NEXT_PUBLIC_SERVER_ID}`, `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`, templateParams, process.env.NEXT_PUBLIC_MAIL_KEY).then(() => {
   handlerClearInputs()
   toast.success("Email enviado com sucesso!")
  }).catch((err) => {
   console.log('Erro: ' + err.message)
   toast.error("Ops! Erro ao enviar email!")
  })
 }


 return (
  <section className={styles.container}>
   <Title title='Contato' subtitle='Contribua para um futuro promissor! Preencha o formulário e faça a diferença!' />
   <form onSubmit={handlerSendMail} id="form" className={styles.form}>
    <input required type="text" name="name" placeholder="Nome" maxLength={50} value={name} onChange={(e) => setName(e.target.value)} />
    <input required type="text" name="email" placeholder="Email" maxLength={50} value={email} onChange={(e) => setEmail(e.target.value)} />
    <input required type="text" name="subject" placeholder='Assunto' maxLength={50} value={subject} onChange={(e) => setSubject(e.target.value)} />
    <textarea required name="message" placeholder='Mensagem' maxLength={250} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
    <button type='submit' className={styles.btnSubmit}>Enviar</button>
   </form>
  </section>
 )
}