import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return<main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4"> 
      <Hero />
      <AboutMe />
      <Projects />
      <Footer />
    </div>
  </main>
}