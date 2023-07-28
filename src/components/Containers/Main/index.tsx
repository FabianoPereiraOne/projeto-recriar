import Image from 'next/image'
import styles from './styles.module.css'

export const Main = () => {
 return (
  <section className={styles.mainContent}>
   <div className={styles.groupTitle}>
    <h1>
     Associação
     <strong className={styles.Color1}> R</strong>
     <span className={styles.Color2}>e</span>
     <span className={styles.Color3}>c</span>
     <span className={styles.Color4}>r</span>
     <span className={styles.Color5}>i</span>
     <span className={styles.Color6}>a</span>
     <span className={styles.Color7}>r</span>
    </h1>
    <p>
     Transformando vidas desde 2002: Conheça nossa história, uma jornada
     dedicada à educação e cuidado infantil.
    </p>
    <a href="#about">Saiba Mais</a>
   </div>
   <div className={styles.groupImage}>
    <Image
     src="/assets/childrens.png"
     unoptimized
     alt="Imagem de crianças modificada - Associação Recriar"
     width={500}
     height={400}
    />
   </div>
  </section>
 )
}
