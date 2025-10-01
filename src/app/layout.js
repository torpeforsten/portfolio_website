import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Roope Forstén - Portfolio",
  description: "Made by Roope Forstén",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#03110f] text-white">
        <Navbar />
        <main className="container mt-24 mx-auto px-12 py-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
