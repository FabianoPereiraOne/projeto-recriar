import { SocialMedia } from '@/components/Blocks/socialMedia';
import Image from 'next/image';
import styles from './styles.module.css';

export const Footer = () => {
 return (
  <footer className={styles.footer}>
   <Image src="/assets/logo.png" alt="Logo Associação Recriar" unoptimized width={80} height={80} className={styles.logo} />
   <p>Desenvolvido por: Fabiano Pereira</p>
   <SocialMedia router='#' label='Acesse nossas redes sociais' routerName='' btnExploreVisible={false} />
  </footer>
 )
}