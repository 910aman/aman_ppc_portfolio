import { JSX } from "react"
import SlideCard from "./SlideCard"
import { portraitSlides } from "../../data/portraitSlides"
import { weddingSlides } from "../../data/weddingSlides"
import { productsSlides } from "../../data/productsSlides"
import { petsSlides } from "../../data/petsSlides"

import { FaImagePortrait } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";
import { MdOutlinePets } from "react-icons/md";

const SlideServicesCards = (): JSX.Element => {
  
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-20 px-4 lg:px-20 py-10 max-w-6xl mx-auto p-20 overflow-hidden"
      aria-label="Interactive slide services cards"
      role="region"
    >
      <SlideCard
        slidesArray={portraitSlides}
        service={<>Portraits <FaImagePortrait /></>}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem fugiat illo nihil dolorem fugit obcaecati necessitatibus magni aperiam delectus?"
      />
      <SlideCard
        slidesArray={weddingSlides}
        service={<>Weddings <FaHeart /></>}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem fugiat illo nihil dolorem fugit obcaecati necessitatibus magni aperiam delectus?"
      />
      <SlideCard
        slidesArray={productsSlides}
        service={<>Products <AiFillProduct /></>}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem fugiat illo nihil dolorem fugit obcaecati necessitatibus magni aperiam delectus?"
      />
      <SlideCard
        slidesArray={petsSlides}
        service={<>Pets <MdOutlinePets /></>}
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis quidem fugiat illo nihil dolorem fugit obcaecati necessitatibus magni aperiam delectus?"
      />
    </section>
  )
}

export default SlideServicesCards