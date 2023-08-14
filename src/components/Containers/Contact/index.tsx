import { Title } from '@/components/Blocks/Title'
import { useSendMail } from '@/hooks/useSendMail'
import { useState } from 'react'
import { toast } from 'react-toastify'
import styles from './styles.module.css'

export const Contact = () => {

  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [load, setLoad] = useState(false)

  const handlerClearInputs = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const handlerVerifyInputs = () => {
    if (name.length <= 0 || subject.length <= 0 || email.length <= 0 || message.length <= 0) {
      return false
    } else {
      return true
    }
  }

  const handlerSendMail = async (event: any) => {
    setLoad(true)
    event.preventDefault()

    if (handlerVerifyInputs() == false) {
      toast.error("Preencha todos os dados")
      return
    }

    const templateParams = {
      from_name: name,
      message: message,
      email: email,
      subject: subject
    }

    useSendMail(templateParams)
      .finally(() => {
        handlerClearInputs()
        setLoad(false)
      })
  }


  return (
    <section className={styles.container} id="contact">
      <Title title='Contato' subtitle='Contribua para um futuro promissor! Preencha o formulário e faça a diferença!' />
      <form onSubmit={handlerSendMail} className={styles.form}>
        <input required type="text" name="name" placeholder="Nome" maxLength={50} value={name} onChange={(e) => setName(e.target.value)} />
        <input required type="text" name="email" placeholder="Email" maxLength={50} value={email} onChange={(e) => setEmail(e.target.value)} />
        <input required type="text" name="subject" placeholder='Assunto' maxLength={50} value={subject} onChange={(e) => setSubject(e.target.value)} />
        <textarea required name="message" placeholder='Mensagem' maxLength={250} value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
        <button type='submit' disabled={load} className={styles.btnSubmit}>{load ? 'Enviado...' : 'Enviar'}</button>
      </form>
    </section>
  )
}