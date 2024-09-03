import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { Partners } from "@/components/component/partners";

export default function PartnersScreen(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
        <Partners />
        </div>
        <Footer />
        </div>
        </>
    )
}