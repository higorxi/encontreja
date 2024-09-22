import { Footer } from "@/components/component/footer";
import { Header } from "@/components/component/header";
import { Profile } from "@/components/component/profile";

export default function Perfil(){
    return(
        <>
        <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
        <Profile/>
        </div>
        <Footer />
        </div>
        </>
    )
}