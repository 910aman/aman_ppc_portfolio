import { useEffect, JSX } from "react"

// AOS library imports
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar"
import HeroBanner from "../components/Home/HeroBanner"
import AboutSection from "../components/Home/AboutSection"
import QuoteSection from "../components/Home/QuoteSection"
import HomeGallerySlider from "../components/Home/HomeGallerySlider"
import HomeContact from "../components/Home/HomeContact"
import Footer from "../components/Footer"


const Home = (): JSX.Element => {

  useEffect((): void => {
    AOS.init()
  }, [])

  return (
    <>
      <Navbar />
      <HeroBanner />
      <AboutSection />
      <QuoteSection />
      <HomeGallerySlider />
      <HomeContact />
      <Footer />
    </>
  )
}

export default Home