import Image from 'next/image'
import styles from './styles.module.css'

export const Main = () => {
 return (
  <section className={styles.mainContent}>
   <div className={styles.groupTitle}>
    <h1 className={styles.title}>
     Associação
     <strong className={styles.color1}> R</strong>
     <span className={styles.color2}>e</span>
     <span className={styles.color3}>c</span>
     <span className={styles.color4}>r</span>
     <span className={styles.color5}>i</span>
     <span className={styles.color6}>a</span>
     <span className={styles.color7}>r</span>
    </h1>
    <p className={styles.paragraph}>
     Transformando vidas desde 2002: Conheça nossa história, uma jornada
     dedicada à educação e cuidado infantil.
    </p>
    <a href="#about" className={styles.btnMore}>Saiba Mais</a>
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
