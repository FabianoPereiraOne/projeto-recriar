import { BlockEventEmpty } from '@/components/Blocks/BlockEventEmpty'
import { Title } from '@/components/Blocks/Title'
import { SocialMedia } from '@/components/Blocks/socialMedia'
import { useFormatDateTime } from '@/hooks/useFormatDateTime'
import { useGetPostsData } from '@/hooks/useGetPostsData'
import { fetchHygraphql } from '@/lib/fetchHygraphql'
import { getPostsType, responseProps } from '@/types/getPostsType'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './styles.module.css'

export const Events = () => {
  const [events, setEvents] = useState<getPostsType[]>([])
  const [offset, setOffset] = useState(2)
  const [isEmptyEvents, setIsEmptyEvents] = useState(false)

  const handlerMoreEvents = async () => {
    try {
      const { posts }: responseProps = await fetchHygraphql(`
   query GetAllEvents {
    posts(orderBy: date_DESC, first: 1, skip: ${offset}) {
      id
      title
      content {
        text
      }
      coverImage {
        url
      }
      date
      address
    }
   }
   `)

      if (posts.length <= 0) {
        setIsEmptyEvents(true)
      } else {
        setOffset(offset + 1)
        setIsEmptyEvents(false)
        setEvents((oldValue) => [...oldValue, ...posts,])
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const { posts } = await useGetPostsData()
        if (posts.length <= 0) {
          setIsEmptyEvents(true)
        } else {
          setEvents(posts)
          setIsEmptyEvents(false)
        }


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
      }) : <BlockEventEmpty />}
      <button className={isEmptyEvents ? styles.buttonMoreEmpty : styles.buttonMore} onClick={handlerMoreEvents}>
        Carregar Mais
      </button>
    </section>
  )
}