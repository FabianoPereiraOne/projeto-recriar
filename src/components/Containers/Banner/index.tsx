import { FaBullseye, FaEye, FaHandHoldingHeart } from 'react-icons/fa'
import styles from './styles.module.css'

export const Banner = () => {
 return (
  <section className={styles.container}>
   <div className={styles.contentCenter}>
    <div className={styles.infoCard}>
     <div className={styles.icon} ><FaBullseye /></div>
     <p className={styles.paragraph}><strong>Missão:</strong> Oferecer  um ambiente acessível com educação de qualidade para todas as crianças.</p>
    </div>
    <div className={styles.infoCard}>
     <div className={styles.icon} ><FaEye /></div>
     <p className={styles.paragraph}><strong>Visão:</strong> Construir um futuro promissor para todas as crianças de nossa comunidade.</p>
    </div>
    <div className={styles.infoCard}>
     <div className={styles.icon} ><FaHandHoldingHeart /></div>
     <p className={styles.paragraph}><strong>Valores:</strong> O Respeito, a dedicação e a excelência em proporcionar um desenvolvimento integral.</p>
    </div>
   </div>
  </section>
 )
}