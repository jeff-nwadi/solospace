import Hero from "@/components/landingpage/Hero";
import Subhero from "@/components/landingpage/Subhero";
import Features from "@/components/landingpage/Features";
import Pricing from "@/components/landingpage/Pricing";
import Testimonials from "@/components/landingpage/Testimonials";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <Subhero />
      <Features />
      <Pricing />
      <Testimonials />
    </main>
  );
}
