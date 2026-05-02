import { useState, JSX, memo } from "react"
import Lightbox from "yet-another-react-lightbox"
import { homeGallerySlides } from "../../data/homeGallerySlides"
import "yet-another-react-lightbox/styles.css";
import { Captions, Download, Fullscreen, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import HomeGalleryImages from "../Home/HomeGalleryImages"

const HomeGallerySlider = (): JSX.Element => {

  const [index, setIndex] = useState<number>(-1)

  return (
    <>
      <HomeGalleryImages
        data={homeGallerySlides}
        onClick={(currentIndex)=> setIndex(currentIndex)}
      />
      <Lightbox
        plugins={[Captions, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end'
        }}
        index={index}
        slides={homeGallerySlides}
        open={index >= 0}
        close={()=> setIndex(-1)}
      />
    </>
  )
}

export default memo(HomeGallerySlider)