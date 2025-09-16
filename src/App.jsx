import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import BusinessSection from "./components/BusinessSection";
import { businessData } from "./data/business";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {
        businessData.map((business, index) => (
          <BusinessSection key = {index} {...business} index = {index} />
        ))
      }
      <About />
      <Services />
      <Contact />
    </>
  );
}
