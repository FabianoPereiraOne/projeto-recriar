import { About } from "@/components/Containers/About";
import { Banner } from "@/components/Containers/Banner";
import { ContainerPrimary } from "@/components/Containers/ContainerPrimary";
import { Header } from "@/components/Containers/Header";
import { Main } from "@/components/Containers/Main";
import { HeadContent } from "@/components/Elements/HeadContent";

export default function Home() {
  return (
    <>
      <HeadContent />
      <ContainerPrimary>
        <Header />
        <Main />
        <About />
        <Banner />
      </ContainerPrimary>
    </>
  )
}
