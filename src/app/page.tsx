import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="fixed left-3 top-3 z-[100] -translate-y-24 rounded bg-accent px-4 py-2.5 text-white transition-transform focus:translate-y-0"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main" className="flex-1">
        <Hero />
        <Services />
        <Stats />
        <CaseStudies />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
