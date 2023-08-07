import { SocialMedia } from '@/components/Blocks/socialMedia';
import Image from 'next/image';
import { useState } from 'react';
import { FiMenu, FiXCircle } from "react-icons/fi";
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
    <a href="#">Inicio</a>
    <a href="#">Sobre</a>
    <a href="#">Eventos</a>
    <a href="#">Contato</a>
   </nav>

   <button className={styles.btnMenu} onClick={handlerToggleMenu}>
    <FiMenu />
   </button>

   <aside className={isActiveMenu ? styles.sidebar : styles.disable}>
    <button className={styles.btnClose} onClick={handlerToggleMenu}>
     <FiXCircle />
    </button>
    <nav className={styles.navbarMobile}>
     <a href="#">Inicio</a>
     <a href="#">Sobre</a>
     <a href="#">Eventos</a>
     <a href="#">Contato</a>
    </nav>
    <SocialMedia router='#about' label='Conheça a historia da Recriar' routerName='Explorar' />
   </aside>
  </header>
 )
}