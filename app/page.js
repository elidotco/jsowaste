import {
  AboutSection,
  BlogSection,
  HeroSection,
  ServicesSection,
} from "@/sections";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <BlogSection />
    </main>
  );
}
