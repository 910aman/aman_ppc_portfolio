import { useEffect, JSX } from "react"

// AOS library imports
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar"
import ContactForm from "../components/Contact/ContactForm"
import ContactInfo from "../components/Contact/ContactInfo"
import Footer from "../components/Footer"


const Contact = (): JSX.Element => {

  useEffect((): void => {
    AOS.init()
  }, [])

  return (
    <>
      <Navbar />
      <main id="main-contact" className="flex flex-col justify-center items-center p-2 pt-8">
        <ContactForm />
        <ContactInfo />
      </main>
      <Footer />
    </>
  )
}

export default Contact