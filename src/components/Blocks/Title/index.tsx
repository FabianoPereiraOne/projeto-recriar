import styles from './styles.module.css'

type titleParams = {
 title: string,
 subtitle: string
}

export const Title = ({ title, subtitle }: titleParams) => {
 return (
  <div className={styles.container}>
   <h2>{title}</h2>
   <p className={subtitle.length <= 0 ? styles.emptySubtitle : ""}>{subtitle}</p>
  </div>
 )
}