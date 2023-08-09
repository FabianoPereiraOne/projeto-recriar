import { Title } from '@/components/Blocks/Title'
import styles from './styles.module.css'

export const Contact = () => {

 return (
  <section className={styles.container}>
   <Title title='Contato' subtitle='Contribua para um futuro promissor! Preencha o formulário e faça a diferença!' />
   <form id="form" action="https://api.staticforms.xyz/submit" method="post" className={styles.form}>
    <input required type="text" name="name" placeholder="Nome" maxLength={50} />
    <input required type="text" name="email" placeholder="Email" maxLength={50} />
    <input required type="text" name="subject" placeholder='Assunto' maxLength={50} />
    <textarea required name="message" placeholder='Mensagem' maxLength={250}></textarea>
    <input type="text" name="honeypot" className={styles.hidden} />
    <input type="hidden" name="accessKey" value={`${process.env.NEXT_PUBLIC_MAIL_KEY}`} className={styles.hidden} />
    <input type="hidden" name="subject" value="Novo contato - Site Associação Recriar" className={styles.hidden} />
    <input type="hidden" name="redirectTo" value="https://projeto-recriar.vercel.app/" className={styles.hidden} />
    <button type='submit' className={styles.btnSubmit}>Enviar</button>
   </form>
  </section>
 )
}