import { About } from "@/components/Containers/About";
import { Banner } from "@/components/Containers/Banner";
import { Contact } from "@/components/Containers/Contact";
import { ContainerPrimary } from "@/components/Containers/ContainerPrimary";
import { Events } from "@/components/Containers/Events";
import { Header } from "@/components/Containers/Header";
import { Main } from "@/components/Containers/Main";
import { Maps } from "@/components/Containers/Maps";
import { HeadContent } from "@/components/Elements/HeadContent";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  return (
    <>
      <HeadContent />
      <ContainerPrimary>
        <Header />
        <Main />
        <About />
        <Banner />
        <Events />
        <Contact />
        <Maps />
      </ContainerPrimary>
      <ToastContainer autoClose={2000} />
    </>
  )
}
