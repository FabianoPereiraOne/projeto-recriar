import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from './styles.module.css'

export const SocialMedia = () => {
 return (
  <div className={styles.container}>
   <a href="#explorar" aria-label='Explorar mais sobre a Recriar' className={styles.btnExplore}>Explorar</a>
   <a href="#" aria-label='Link para Instagram' className={styles.linkInstagram}><FaInstagram /></a>
   <a href="#" aria-label='Link para Facebook' className={styles.linkFacebook}><FaFacebookF /></a>
   <a href="#" aria-label='Link para WhatsApp' className={styles.linkWhatsApp}><FaWhatsapp /></a>
  </div>
 )
}