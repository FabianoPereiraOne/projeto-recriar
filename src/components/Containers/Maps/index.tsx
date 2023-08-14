import "leaflet/dist/leaflet.css";
import dynamic from "next/dynamic";
import { FaMapMarkerAlt } from 'react-icons/fa';
import styles from "./styles.module.css";

const Map = dynamic(() => import('@/components/Blocks/Map'), { ssr: false })

export const Maps = () => {

 return (
  <section className={styles.container}>
   <div className={styles.center}>
    <Map />
   </div>
   <div className={styles.groupAddress}>
    <h6>Unidades</h6>
    <article className={styles.address}>
     <strong><FaMapMarkerAlt />Recriar Cruzeiro</strong>
     <address>Rua Vinte e Cinco 532 Jardim das Alterosas MG</address>
     <p>
      A Creche Comunitária Recriar foi a primeira creche a ser instalada no bairro Cruzeiro do Sul e atualmente atende 145 crianças de 02 a 05 anos de idade.
     </p>
    </article>
    <article className={styles.address}>
     <strong><FaMapMarkerAlt />Recriar Petrovale</strong>
     <address>Rua Camboja, 240 - Petrovale, Betim - MG</address>
     <p>
      O novo centro infantil do bairro Petrovale, em Betim, na região metropolitana de BH,  inaugurado em uma cerimônia especial.
     </p>
    </article>
    <article className={styles.address}>
     <strong><FaMapMarkerAlt />Recriar Teresópolis
     </strong>
     <address>Rua  Corrente 105 Bairro Jardim Teresópolis MG</address>
     <p>
      Sede Administrativa Recriar Jardim Teresópolis Betim MG e cursos profissionalizantes e encaminhamento para o mercado de trabalho
     </p>
    </article>
   </div>
  </section>
 )
}