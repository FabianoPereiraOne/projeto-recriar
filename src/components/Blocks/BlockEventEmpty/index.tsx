import Image from 'next/image'
import styles from './styles.module.css'


export const BlockEventEmpty = () => {
  return (
    <div className={styles.container}>
      <Image src="/assets/empty.png" alt="Imagem de nenhum evento encontrado" width={300} height={300} />
      <p>Nenhum evento disponível</p>
    </div>
  )
}