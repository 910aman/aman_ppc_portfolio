import { JSX } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Navigation } from "swiper/modules";
import { galleryCarouselImages } from "../../data/galleryCarouselImages";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";


const GalleryCarousel = (): JSX.Element => {

  return (
    <section
      className="relative w-full max-h-[100vh]"
      aria-label="Interactive carousel of images"
      role="region"
    >
      <Swiper
        modules={[Navigation, EffectCreative]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
            opacity: 0.5
          },
          next: {
            translate: ["100%", 0, 0],
            opacity: 0
          },
        }}
        speed={800}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        className="w-full h-[100vh]"
      >
        {galleryCarouselImages.map((image, index) => (
          <SwiperSlide key={index}>
            <figure
              tabIndex={0}
              className="w-full h-full outline-none focus:outline-blue-600"
              aria-label={`Carousel image ${index + 1}: ${image.description}`}
            >
              <img
                src={image.src}
                className="swiper-lazy w-full h-full object-cover"
                alt={image.description}
                loading="lazy"
              />
            </figure>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
          </SwiperSlide>
        ))}
        {/* Accessible Navigation */}
        <button
          className="swiper-button-prev"
          aria-label="Previous slide"
          title="Previous slide"
        />
        <button
          className="swiper-button-next"
          aria-label="Next slide"
          title="Next slide"
        />
      </Swiper>
    </section>
  );
};

export default GalleryCarousel;