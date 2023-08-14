import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import styles from './styles.module.css';

type socialMediaProps = {
 router: string,
 routerName: string,
 label: string,
 btnExploreVisible?: boolean
}

export const SocialMedia = ({ router, routerName, label, btnExploreVisible = true }: socialMediaProps) => {
 return (
  <div className={styles.container}>
   {btnExploreVisible ? <Link to={router} spy={true} smooth={true} duration={1000} aria-label={label} className={styles.btnExplore}>{routerName}</Link> : ""}
   <a target="_blank" href="https://www.instagram.com/recriarcruzeiro/" aria-label='Link para Instagram' className={styles.linkInstagram}><FaInstagram /></a>
   <a target="_blank" href="https://www.facebook.com/RecriarBetim" aria-label='Link para Facebook' className={styles.linkFacebook}><FaFacebookF /></a>
   <a target="_blank" href="https://api.whatsapp.com/send/?phone=553135313298&text&type=phone_number&app_absent=0" aria-label='Link para WhatsApp' className={styles.linkWhatsApp}><FaWhatsapp /></a>
  </div>
 )
}