import Navbar from "@/sections/Navbar";
import Hero from "@/sections/Hero";
import LogoTicker from "@/sections/LogoTicker";
import Introduction from "@/sections/Introduction";
import Features from "@/sections/Features";
import Integrations from "@/sections/Integrations";
import Faqs from "@/sections/Faqs";
import CallToAction from "@/sections/CallToAction";
import Footer from "@/sections/Footer";
import { LocaleSelect } from './LocaleSelect';


export default   function Home() {

    return (

        <>
       < LocaleSelect />
        <Navbar />
        <Hero />
        <LogoTicker /> 
        <Introduction />
        <Features />
        <Integrations />
        <Faqs />
        <CallToAction />
        <Footer />
      

        </>
    )
}
