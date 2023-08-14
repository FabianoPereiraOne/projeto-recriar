import { SocialMedia } from '@/components/Blocks/socialMedia';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiXCircle } from "react-icons/fi";
import { Link } from 'react-scroll';
import styles from './styles.module.css';


export const Header = () => {
 const [isActiveMenu, setIsActiveMenu] = useState(false)

 const handlerToggleMenu = () => {
  setIsActiveMenu(valueProps => !valueProps)
 }

 return (
  <header className={styles.container}>
   <Image src="/assets/logo.png" alt="Logo Associação Recriar" unoptimized width={80} height={80} className={styles.logo} />
   <nav className={styles.navbar}>
    <Link to="#" spy={true} smooth={true} duration={1000}>Inicio</Link>
    <Link to="about" spy={true} smooth={true} duration={1000}>Sobre</Link>
    <Link to="events" spy={true} smooth={true} duration={1000}>Eventos</Link>
    <Link to="contact" spy={true} smooth={true} duration={1000}>Contato</Link>
   </nav>

   <button className={styles.btnMenu} onClick={handlerToggleMenu}>
    <FiMenu />
   </button>

   <aside className={isActiveMenu ? styles.sidebar : styles.disable}>
    <button className={styles.btnClose} onClick={handlerToggleMenu}>
     <FiXCircle />
    </button>
    <nav className={styles.navbarMobile}>
     <Link to="#" spy={true} smooth={true} duration={1000} onClick={handlerToggleMenu}>Inicio</Link>
     <Link to="about" spy={true} smooth={true} duration={1000} onClick={handlerToggleMenu}>Sobre</Link>
     <Link to="events" spy={true} smooth={true} duration={1000} onClick={handlerToggleMenu}>Eventos</Link>
     <Link to="contact" spy={true} smooth={true} duration={1000} onClick={handlerToggleMenu}>Contato</Link>
    </nav>
    <SocialMedia router='about' label='Conheça a historia da Recriar' routerName='' btnExploreVisible={false} />
   </aside>
  </header>
 )
}