import { Title } from '@/components/Blocks/Title'
import { SocialMedia } from '@/components/Blocks/socialMedia'
import { ButtonMore } from '@/components/Elements/ButtonMore'
import { useFormatDateTime } from '@/hooks/useFormatDateTime'
import { useGetPostsData } from '@/hooks/useGetPostsData'
import { getPostsType } from '@/types/getPostsType'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const Events = () => {
 const [events, setEvents] = useState<getPostsType[]>([])

 useEffect(() => {
  async function fetchData() {
   try {
    const { posts } = await useGetPostsData()
    setEvents((oldValue) => [...posts, ...oldValue,])
    console.log(posts);
   } catch (err) {
    console.log(err);
   }
  }
  fetchData();
 }, []);

 return (
  <section className={styles.container} id="events">
   <Title title='Eventos' subtitle='' />
   {events.length > 0 ? events.map((event, index) => {
    return (
     <article key={index.toString()} className={styles.card}>
      <figure className={styles.banner}>
       <Image loader={() => event.coverImage.url} src={event.coverImage.url} alt={`Imagem do evento ${event.title}`} width={948} height={438} />
       <time className={styles.time}>{useFormatDateTime(new Date(event.date))}</time>
      </figure>
      <strong className={styles.title}>{event.title}</strong>
      <address className={styles.address}><strong>Local:</strong> {event.address}</address>
      <p className={styles.paragraph}>{event.content.text}</p>
      <SocialMedia btnExploreVisible={false} router='' label='Veja mais sobre o evento' routerName='Saiba mais' />
     </article>
    )
   }) : ''}
   <ButtonMore />
  </section>
 )
}