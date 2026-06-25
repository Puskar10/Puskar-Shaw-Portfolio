import { div } from "motion/react-client";
import Image from "next/image";
import Navbar from "../components/navbar";
import Hero from "../components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";


export default function Home() {
  return (
   <div>
    
    <Navbar/>
    <Hero/>
    <About/>
    <Skills/>
    <ContactForm/>
    <Footer/>
    
   </div>
  );
}
