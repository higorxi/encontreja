import { FAQ } from "@/components/component/faq";
import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { ModernFaq } from "@/components/component/modern-faq";

export default function FAQScreen(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
        <ModernFaq />
        </div>
        <Footer />
        </div>
        </>
    )
}