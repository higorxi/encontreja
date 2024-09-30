import { Footer } from "@/components/component/footer";
import { HeaderAlternative } from "@/components/component/headerAlternative";
import { MyAdvertisement } from "@/components/component/myadvertisement";

export default function MeuServico() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAlternative />
      <div className="flex-grow">
        <MyAdvertisement />
      </div>
      <Footer />
    </div>
  );
}
