import { Contacts } from "@/components/ui/Contacts";
import { Warranty } from "@/components/ui/Warranty";
import Footer from "@/components/ui/Footer";
import { FramerCarousel } from "@/components/ui/framer-carousel";
import JacModelsSlider from "@/components/ui/JacModelsSlider";
import { Feedback } from "@/components/ui/Feedback";

export default function Home() {
  return (
    <main className="flex flex-col xl:gap-4">
      <FramerCarousel />
      <JacModelsSlider />
      <Warranty />
      <Feedback />
      <Contacts />
      <Footer />
    </main>
  );
}
