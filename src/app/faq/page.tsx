import { FAQ } from "@/components/component/faq";
import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";

export default function FAQScreen(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
        <FAQ />
        </div>
        <Footer />
        </div>
        </>
    )
}