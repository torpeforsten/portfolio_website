import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import PhotoAndVideo from "../components/PhotoAndVideo";

export default function Home() {
  return<main className="flex min-h-screen flex-col bg-[#03110f]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4"> 
      <Hero />
      <AboutMe />
      <Projects />
      <PhotoAndVideo />
      <Footer />
    </div>
  </main>
}