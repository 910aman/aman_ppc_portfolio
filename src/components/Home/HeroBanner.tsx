import { JSX } from "react";
import BannerSlider from "./BannerSlider";
import { bannerSlides } from "../../data/bannerSlides";

const Landing = (): JSX.Element => {

  return (
    <BannerSlider slides={bannerSlides} />
  )
}

export default Landing