import { Advertisements } from "@/components/component/advertisements";
import { Footer } from "@/components/component/footer";
import { HeaderAlternative } from "@/components/component/headerAlternative";

export default function Servicos() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderAlternative />
      <div className="flex-grow">
        <Advertisements />
      </div>
      <Footer />
    </div>
  );
}
