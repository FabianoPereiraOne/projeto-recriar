import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import styles from "./styles.module.css";

const Map = dynamic(() => import('@/components/Blocks/Map'), { ssr: false })

export const Maps = () => {

 return (
  <section className={styles.container}>
   <div className={styles.center}>
    <Map />
   </div>
  </section>
 )
}