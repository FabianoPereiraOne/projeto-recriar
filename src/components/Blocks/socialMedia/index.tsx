import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa'
import styles from './styles.module.css'

export const SocialMedia = () => {
 return (
  <div className={styles.container}>
   <a href="#explorar" aria-label='Explorar mais sobre a Recriar' className={styles.btnExplore}>Explorar</a>
   <a target="_blank" href="https://www.instagram.com/recriarcruzeiro/" aria-label='Link para Instagram' className={styles.linkInstagram}><FaInstagram /></a>
   <a target="_blank" href="https://www.facebook.com/RecriarBetim" aria-label='Link para Facebook' className={styles.linkFacebook}><FaFacebookF /></a>
   <a target="_blank" href="https://l.instagram.com/?u=https%3A%2F%2Fwa.me%2F553135313298&e=AT0UiDRlajBWRJ-3_Kan1unHat6_jJqK69DgNk6erVoPhdc-IWryXQbxPaxD_nePelbPL8YuT13QAnis44FuB8Jm4BE3d7hqVSCxxWA" aria-label='Link para WhatsApp' className={styles.linkWhatsApp}><FaWhatsapp /></a>
  </div>
 )
}