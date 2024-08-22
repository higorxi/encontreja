import { ContactSection } from "@/components/component/contact-section";
import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { InitialScreen } from "@/components/component/initial-screen";
import { Price } from "@/components/component/price";
import { WhyIsEncontreJA } from "@/components/component/why-is-encontre-ja";

export default function Home() {
  return (
    <>
    <Header/>
    <InitialScreen/>
    <section id="why">
    <WhyIsEncontreJA/>
    </section>
    <section id="price">
    <Price/>
    </section>
    <section id="contact">
    <ContactSection/>
    </section>
    <Footer/>
    </>
  );
}
