import { Title } from '@/components/Blocks/Title'
import { SocialMedia } from '@/components/Blocks/socialMedia'
import Image from 'next/image'
import styles from './styles.module.css'

export const About = () => {
 return (
  <main className={styles.container}>
   <Title title="Sobre" subtitle="" />
   <div className={styles.contentAbout}>
    <figure className={styles.contentImage}>
     <Image src="/assets/banner.png" alt="Imagem Associação Recriar" width={580} height={400} />
    </figure>
    <div className={styles.contentBody}>
     <p>
      A Associação Recriar do Município de Betim foi fundada em 06/06/2002 por Jecilenio Teixeira, com o objetivo de oferecer cursos profissionalizantes e encaminhamento para o mercado de trabalho. Em 2009, expandimos nossas atividades para a área da educação infantil, estabelecendo o Instituto Educacional Recriar no Bairro Cruzeiro do Sul, com atendimento a crianças de 02 a 05 anos de idade.
     </p>
     <p>

      O Instituto Educacional Recriar operava de forma social e particular, mas em 2013, graças aos esforços do então Presidente Jecilenio e em colaboração com a prefeitura, estabelecemos um convênio que nos permitiu evoluir para a Creche Comunitária Recriar. Atualmente, atendemos 146 crianças no Bairro Cruzeiro do Sul e, além disso, estendemos nossos serviços ao Bairro Petrovale, onde oferecemos atendimento integral para 350 crianças, abrangendo a faixa etária de 4 meses a 05 anos de idade.
     </p>
     <SocialMedia router='#explorar' label='Explore mais sobre a Recriar' routerName='Explorar' />
    </div>
   </div>
  </main>
 )
}