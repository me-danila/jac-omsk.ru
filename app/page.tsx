import { Suspense } from "react";
import { Contacts } from "@/components/ui/Contacts";
import { Feedback } from "@/components/ui/Feedback";
import Footer from "@/components/ui/Footer";
import { FramerCarousel } from "@/components/ui/framer-carousel";
import Header from "@/components/ui/Header";
import JacModelsSlider from "@/components/ui/JacModelsSlider";
import { Warranty } from "@/components/ui/Warranty";

export default function Home() {
  return (
    <main className="flex flex-col xl:gap-4">
      <Header />
      <FramerCarousel />
      <Suspense fallback={null}>
        <JacModelsSlider />
      </Suspense>
      <Warranty />
      <Feedback />
      <Contacts />
      <Footer />
    </main>
  );
}
