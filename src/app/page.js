import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutMe from "../components/AboutMe";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return<main className="flex min-h-screen flex-col bg-[#03110f]">
    <Navbar />
    <div className="container mt-2 md:mt-8 mx-auto px-2 md:px-12 py-4">

      <Hero />
      <AboutMe />
      <Projects />
    </div>
  </main>
}