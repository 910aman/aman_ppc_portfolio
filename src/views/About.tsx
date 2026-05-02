import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { JSX } from "react"

const About = (): JSX.Element => {
  return (
    <>
      <Navbar />
      <div className="min-h-96 flex justify-center items-center">
        This is the About page
      </div>
      <Footer />
    </>
  )
}

export default About