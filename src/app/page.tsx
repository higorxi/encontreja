import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { InitialScreen } from "@/components/component/initial-screen";
import { Price } from "@/components/component/price";

export default function Home() {
  return (
    <>
    <Header/>
    <InitialScreen/>
    <Price/>
    <Footer/>
    </>
  );
}
