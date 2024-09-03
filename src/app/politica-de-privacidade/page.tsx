import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { PolicyPrivacy } from "@/components/component/policy-privacy";

export default function PolicyPrivacyScreen(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
        <PolicyPrivacy />
        </div>
        <Footer />
        </div>
        </>
    )
}