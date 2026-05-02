import { useState, JSX, memo } from "react"
import Lightbox from "yet-another-react-lightbox"
import { gallerySlides } from "../../data/gallerySlides";
import "yet-another-react-lightbox/styles.css";
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import GalleryImages from "../Gallery/GalleryImages"

const GallerySlider = (): JSX.Element => {

  const [index, setIndex] = useState<number>(-1)

  return (
    <>
      <h2 className="text-4xl text-center pt-10" data-aos="fade-up" data-aos-duration="1500">
        Eternal Memories
      </h2>
      <GalleryImages
        data={gallerySlides}
        onClick={(currentIndex)=> setIndex(currentIndex)}
      />
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end'
        }}
        index={index}
        slides={gallerySlides}
        open={index >= 0}
        close={()=> setIndex(-1)}
      />
    </>
  )
}

export default memo(GallerySlider)