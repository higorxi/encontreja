import { Contact } from "@/components/component/contact";
import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";

export default function ContactScreen(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
        <Contact />
        </div>
        <Footer />
        </div>
        </>
    )
}