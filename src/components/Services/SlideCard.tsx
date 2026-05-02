import { FunctionComponent, ReactNode } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import routes from "../../routes/routes";

import 'swiper/css';
import 'swiper/css/effect-cards';
import { ICarouselImage } from "../../interfaces/ICarouselImage";


interface SlideCardProps {
  slidesArray: ICarouselImage[];
  service: ReactNode;
  description: string;
}

const { contact } = routes

const SlideCard: FunctionComponent<SlideCardProps> = ({ slidesArray, service, description }) => {
  return (
    <section
      className="w-[90%] sm:w-[100%] max-w-md"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper hover:brightness-110"
      >
        {slidesArray.map((image, index)=> (
          <SwiperSlide key={index}>
            <figure
              tabIndex={0}
              className="w-full h-100 outline-none focus:outline-blue-600"
              aria-label={`Carousel image ${index + 1}: ${image.description}`}
            >
              <img
                src={image.src}
                className="swiper-lazy w-full h-full object-cover rounded-xl"
                alt={image.description}
                loading="lazy"
              />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="py-4">
        <h3 className="card-title text-2xl mb-1">{service}</h3>
        <div className="divider mt-0" aria-hidden="true"></div>
        <p>{description}</p>
        <a
          href={contact}
          role="button"
          className="btn btn-outline dark:text-shadow hover-shadowless"
          title="Click to do a consultation for this service"
          aria-label="Click to do a consultation for this service"
        >
          Do A Consultation
        </a>
      </div>
    </section>
  )
}

export default SlideCard