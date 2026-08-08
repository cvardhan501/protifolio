import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCards from "@/components/StatsCards";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main className="relative">
        <Hero />
        <StatsCards />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Testimonials />
        <Gallery />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
