import { FunctionComponent, JSX } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface BannerSlide {
  id: number;
  image: string;
  title?: string;
  subtitle?: string;
}

interface BannerSliderProps {
  slides: BannerSlide[];
}

const BannerSlider: FunctionComponent<BannerSliderProps> = ({ slides }): JSX.Element => {
  return (
    <section
      className="banner-slider-container"
      role="region"
      aria-label="Hero image carousel"
    >
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        speed={1500}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        navigation={false}
        pagination={{
          clickable: true,
          renderBullet: (_, className) => {
            return `<span class="${className}"></span>`;
          }
        }}
        className="banner-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="slide-content">
              <div 
                className="slide-image" 
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <img
                  className='slide-image object-cover'
                  alt={`${slide.title} - ${slide.subtitle}`}
                  loading="lazy"
                  src={slide.image}
                />
              </div>
              {(slide.title || slide.subtitle) && (
                <div className="slide-text">
                  {slide.title && <h2>{slide.title}</h2>}
                  {slide.subtitle && <p>{slide.subtitle}</p>}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerSlider;




{/* <section
className="banner-slider-container"
role="region"
aria-label="Hero image carousel"
>
<Swiper
  modules={[EffectFade, Autoplay, Pagination]}
  effect="fade"
  speed={1500}
  slidesPerView={1}
  loop={true}
  autoplay={{
    delay: 4000,
    disableOnInteraction: false,
  }}
  navigation={false}
  pagination={{
    clickable: true,
    renderBullet: (_, className) => {
      return `<span class="${className}"></span>`;
    }
  }}
  className="banner-swiper"
>
  {slides.map((slide) => (
    <SwiperSlide key={slide.id}>
      <div className="slide-content">
        <div 
          className="slide-image" 
          style={{ backgroundImage: `url(${slide.image})` }}
        >
        </div>
        {(slide.title || slide.subtitle) && (
          <div className="slide-text">
            {slide.title && <h2>{slide.title}</h2>}
            {slide.subtitle && <p>{slide.subtitle}</p>}
          </div>
        )}
      </div>
    </SwiperSlide>
  ))}
</Swiper>
</section> */}