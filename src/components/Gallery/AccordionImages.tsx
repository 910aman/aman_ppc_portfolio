import { useState, JSX, MouseEventHandler, useCallback, KeyboardEvent } from "react"
import { galleryAccordionImages } from "../../data/galleryAccordionImages"
import { IAccordionImages } from "../../interfaces/IAccordionImages"

const GalleryImages = (): JSX.Element => {

  const [expandedIndex, setExpandedIndex] = useState<number>(0)

  const handleClick = useCallback((index: number): MouseEventHandler => {
    return (): void => setExpandedIndex(index)
  }, [])

  const handleOnKeyDown = useCallback((index: number, event: KeyboardEvent): void => {
    if(event.key === 'Enter' || event.key === ' ') {
      setExpandedIndex(index)
    }
  }, [])

  return (
    <section
      className="w-full h-full overflow-hidden flex items-center justify-center gap-2 relative py-15"
      style={{
        backgroundImage: `url(${galleryAccordionImages[expandedIndex].image})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      aria-label="Interactive gallery section"
    >
      {/* Blurred background div */}
      <div className="inset-0 absolute bg-[rgba(0, 0, 0, 0.3)] z-0 backdrop-blur-md" aria-hidden="true"></div>
      <div
        className="w-[1280px] h-[80vh] flex flex-col sm:flex-row items-center justify-center px-5 gap-2 z-10"
        data-aos="fade-left"
        data-aos-duration="2250"
      >
        {galleryAccordionImages.map((galleryImage: IAccordionImages, index: number)=> (
          <figure
            key={index}
            role="button"
            tabIndex={0}
            aria-pressed={expandedIndex === index}
            onClick={handleClick(index)}
            onKeyDown={(event): void => handleOnKeyDown(index, event)}
            className={`rounded-2xl bg-black cursor-pointer transition-all 
              duration-500 ease-in-out overflow-hidden w-full sm:h-full
              hover:brightness-130 focus:ring-2 focus:ring-white
              ${expandedIndex === index 
                ? 'h-[90vh] sm:w-[60%]' 
                : 'h-[10vh] sm:w-[10%]'}
            `}
          >
            <img
              src={galleryImage.image}
              alt={galleryImage.alt}
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default GalleryImages