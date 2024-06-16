import HomePage from "@/components/HomePage/HomePage";
import AboutUs from "@/components/AboutUs/AboutUs";
import Image from "next/image";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";
import Features from "@/components/Features/Features";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <AboutUs/>
      <Services/>
      <Process/>
      <Features/>
      <Contact/>
      <Footer/>
    </div>
  );
}
