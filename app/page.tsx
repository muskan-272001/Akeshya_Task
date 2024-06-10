import HomePage from "@/components/HomePage/HomePage";
import AboutUs from "@/components/AboutUs/AboutUs";
import Image from "next/image";
import Services from "@/components/Services/Services";
import Process from "@/components/Process/Process";

export default function Home() {
  return (
    <div>
      <HomePage/>
      <AboutUs/>
      <Services/>
      <Process/>
    </div>
  );
}
