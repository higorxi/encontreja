import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { TermsOfUser } from "@/components/component/terms-of-user";

export default function TermsOfUserScreen(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
        <TermsOfUser />
        </div>
        <Footer />
        </div>
        </>
    )
}