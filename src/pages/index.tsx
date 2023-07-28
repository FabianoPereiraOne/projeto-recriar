import { About } from "@/components/Containers/About";
import { Contact } from "@/components/Containers/Contact";
import { ContainerPrimary } from "@/components/Containers/ContainerPrimary";
import { Events } from "@/components/Containers/Events";
import { Footer } from "@/components/Containers/Footer";
import { Header } from "@/components/Containers/Header";
import { Main } from "@/components/Containers/Main";
import { Maps } from "@/components/Containers/Maps";
import { HeadContent } from "@/components/Elements/HeadContent";

export default function Home() {
  return (
    <>
      <HeadContent />
      <ContainerPrimary>
        <Header />
        <Main />
        <About />
        <Events />
        <Contact />
        <Maps />
        <Footer />
      </ContainerPrimary>
    </>
  )
}
