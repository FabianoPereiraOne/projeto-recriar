import { Title } from '@/components/Blocks/Title'
import { SocialMedia } from '@/components/Blocks/socialMedia'
import { ButtonMore } from '@/components/Elements/ButtonMore'
import Image from 'next/image'
import styles from './styles.module.css'

export const Events = () => {
 return (
  <section className={styles.container}>
   <Title title='Eventos' subtitle='' />
   <article className={styles.card}>
    <figure className={styles.banner}>
     <Image src="/assets/image.png" alt="Evento reunião geral" width={948} height={438} />
     <time className={styles.time}>Dia 04/05 - 21hrs</time>
    </figure>
    <strong className={styles.title}>Reunião Geral</strong>
    <address className={styles.address}><strong>Local:</strong> Rua Vinte e Cinco 532 Jardim das Alterosas</address>
    <p className={styles.paragraph}>Nequedbadd suspendisse sed nunc in sit arcu amet. Sed orci at nisi soll ici tudin  ornare eget pelleLorene que dba dd sus pendisse sed nunc in sit arcu amet. Sed orci at nisi sollicitudin orna re eget v pelleLorsus pendisse sed nunc in sit arcu amet. Sed orci at nisi sollicitudin orna re eget v pellee...Ne quedbad dNequedbadd susp.</p>
    <SocialMedia router='#saibamais23' label='Veja mais sobre o evento' routerName='Saiba mais' />
   </article>
   <article className={styles.card}>
    <figure className={styles.banner}>
     <Image src="/assets/image.png" alt="Evento reunião geral" width={948} height={438} />
     <time className={styles.time}>Dia 04/05 - 21hrs</time>
    </figure>
    <strong className={styles.title}>Reunião Geral</strong>
    <address className={styles.address}><strong>Local:</strong> Rua Vinte e Cinco 532 Jardim das Alterosas</address>
    <p className={styles.paragraph}>Nequedbadd suspendisse sed nunc in sit arcu amet. Sed orci at nisi soll ici tudin  ornare eget pelleLorene que dba dd sus pendisse sed nunc in sit arcu amet. Sed orci at nisi sollicitudin orna re eget v pelleLorsus pendisse sed nunc in sit arcu amet. Sed orci at nisi sollicitudin orna re eget v pellee...Ne quedbad dNequedbadd susp.</p>
    <SocialMedia router='#saibamais22' label='Veja mais sobre o evento' routerName='Saiba mais' />
   </article>
   <ButtonMore />
  </section>
 )
}