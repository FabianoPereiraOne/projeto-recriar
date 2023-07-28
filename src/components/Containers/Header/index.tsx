import Image from 'next/image'

export const Header = () => {
 return (
  <header>
   <Image src="/assets/logo.png" alt="Logo Associação Recriar" unoptimized width={80} height={80} />
   <nav>
    <a href="#">Inicio</a>
    <a href="#">Sobre</a>
    <a href="#">Eventos</a>
    <a href="#">Contato</a>
   </nav>
  </header>
 )
}