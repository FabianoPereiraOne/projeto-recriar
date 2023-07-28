import { ReactNode } from "react"
import styles from './styles.module.css'
type ContainerPrimaryProps = {
 children: ReactNode
}

export const ContainerPrimary = ({ children }: ContainerPrimaryProps) => {
 return <div className={styles.containerPrimary}>{children}</div>
}