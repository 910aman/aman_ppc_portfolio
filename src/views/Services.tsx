import { useEffect, JSX } from "react"

// AOS library imports
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "../components/Navbar"
import HeroServices from "../components/Services/HeroServices"
import SlideServicesCards from "../components/Services/SlideServicesCards"
import AdditionalService from "../components/Services/AdditionalService"
import FAQ from "../components/Services/FAQ"
import ServicesContact from "../components/Services/ServicesContact"
import Footer from "../components/Footer"

import { MdEventAvailable } from "react-icons/md";
import { GiClothes } from "react-icons/gi";
import { RiLandscapeAiLine } from "react-icons/ri";
import { ImCool } from "react-icons/im";

const Services = (): JSX.Element => {

  useEffect(() => {
    // Handle scrolling to hash on page load
    const handleScroll = () => {
      if (window.location.hash) {
        // Get the element id from the hash
        const id = window.location.hash.substring(1);
        const element = document.getElementById(id);
        
        if (element) {
          // Give React a moment to finish rendering
          setTimeout(() => {
            // Get header height if you have a fixed header
            const headerHeight = document.querySelector('header')?.offsetHeight || 0;
            
            // Scroll to element with offset for header
            window.scrollTo({
              top: element.offsetTop - headerHeight - 20, // Extra 20px padding
              behavior: 'smooth'
            });
          }, 300); // Slightly longer timeout to ensure everything is rendered
        }
      }
    };
    
    // Run once when component mounts
    handleScroll();
    
    // Also handle if the hash changes while on the page
    window.addEventListener('hashchange', handleScroll);
    return () => window.removeEventListener('hashchange', handleScroll);
  }, []);

  useEffect((): void => {
    AOS.init()
  }, [])

  return (
    <>
      <Navbar />
      <HeroServices />
      <main id="main-services" className="overflow-hidden">
        <h1
          className="text-center text-5xl pt-10 pb-5"
          data-aos="fade-down"
          data-aos-duration="1500"
        >
          Main Services I Offer
        </h1>
        <SlideServicesCards />
        <section id="additional-services">
          <AdditionalService
            id="events-service"
            name={<>Events <MdEventAvailable /></>}
            img="/images/additional-services/events.webp"
            alt="description alternative"
            reversed={true}
          >
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus officia architecto, id omnis minus cum sapiente vero? Amet, assumenda?</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore laborum hic iure expedita eveniet porro reprehenderit tempore accusamus! Magnam autem cupiditate ut quam repellat tenetur qui perferendis sint, incidunt at vero! Doloribus, unde beatae?</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime harum placeat odio pariatur consequuntur?</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus officia architecto, id omnis minus cum sapiente vero? Amet, assumenda?</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore laborum hic iure expedita eveniet porro reprehenderit tempore accusamus! Magnam autem cupiditate ut quam repellat tenetur qui perferendis sint, incidunt at vero! Doloribus, unde beatae?</p>
          </AdditionalService>
          <AdditionalService
            id="fashion-service"
            name={<>Fashion <GiClothes /></>}
            img="/images/additional-services/fashion.webp"
            alt="description alternative"
          >
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus officia architecto, id omnis minus cum sapiente vero? Amet, assumenda?</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore laborum hic iure expedita eveniet porro reprehenderit tempore accusamus! Magnam autem cupiditate ut quam repellat tenetur qui perferendis sint, incidunt at vero! Doloribus, unde beatae?</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime harum placeat odio pariatur consequuntur?</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus officia architecto, id omnis minus cum sapiente vero? Amet, assumenda?</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore laborum hic iure expedita eveniet porro reprehenderit tempore accusamus! Magnam autem cupiditate ut quam repellat tenetur qui perferendis sint, incidunt at vero! Doloribus, unde beatae?</p>
          </AdditionalService>
          <AdditionalService
            id="landscapes-service"
            name={<>Landscapes <RiLandscapeAiLine/></>}
            img="/images/additional-services/landscape.webp"
            alt="description alternative"
            reversed={true}
          >
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus officia architecto, id omnis minus cum sapiente vero? Amet, assumenda?</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore laborum hic iure expedita eveniet porro reprehenderit tempore accusamus! Magnam autem cupiditate ut quam repellat tenetur qui perferendis sint, incidunt at vero! Doloribus, unde beatae?</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime harum placeat odio pariatur consequuntur?</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus officia architecto, id omnis minus cum sapiente vero? Amet, assumenda?</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore laborum hic iure expedita eveniet porro reprehenderit tempore accusamus! Magnam autem cupiditate ut quam repellat tenetur qui perferendis sint, incidunt at vero! Doloribus, unde beatae?</p>
          </AdditionalService>
          <AdditionalService
            id="lifestyle-service"
            name={<>Lifestyle <ImCool /></>}
            img="/images/additional-services/lifestyle.webp"
            alt="description alternative"
          >
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus officia architecto, id omnis minus cum sapiente vero? Amet, assumenda?</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore laborum hic iure expedita eveniet porro reprehenderit tempore accusamus! Magnam autem cupiditate ut quam repellat tenetur qui perferendis sint, incidunt at vero! Doloribus, unde beatae?</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam maxime harum placeat odio pariatur consequuntur?</p>
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam possimus officia architecto, id omnis minus cum sapiente vero? Amet, assumenda?</p>
            <p className="text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi labore laborum hic iure expedita eveniet porro reprehenderit tempore accusamus! Magnam autem cupiditate ut quam repellat tenetur qui perferendis sint, incidunt at vero! Doloribus, unde beatae?</p>
          </AdditionalService>
        </section>
        {/* End of Additional Services section */}
        <FAQ />
        <ServicesContact />
      </main>
      <Footer />
    </>
    
  )
}

export default Services