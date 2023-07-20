import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide1 from "../../assets/slide-1.jpg";
import slide2 from "../../assets/slide-2.jpg";
import slide3 from "../../assets/slide-3.jpg";
import GetirBiMutluluk from "../../assets/GetirBiMutluluk.svg";
import Slider from "react-slick";

import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import SlideImages from "./SlideImages";
import InputForm from "./InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
  };

  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+89",
    TR: "+90",
    FR: "+38",
  };
  return (
    <>
      <div className="w-full h-full overflow-hidden relative hidden md:block">
        <Slider {...settings}>
          <SlideImages img={slide1} />
          <SlideImages img={slide2} />
          <SlideImages img={slide3} />
        </Slider>
        <div className="absolute top-1/2 -translate-y-1/2 container left-1/2 -translate-x-1/2">
          <div className="container mx-auto w-full flex justify-between items-center">
            <div>
              <img src={GetirBiMutluluk} />
              <h2 className="text-4xl mt-8 text-white font-semibold">
                Dakikalar İçinde <br /> Kapınızda
              </h2>
            </div>
            <InputForm />
          </div>
        </div>
      </div>
      {/* for mobile */}
      <div className="md:hidden flex flex-col container ">
        <div className="flex items-center justify-between my-2">
          <div className="flex gap-2 items-center">
            <FontAwesomeIcon
              className="text-brand-text-purple"
              icon={faLocationDot}
            />
            <span className="font-semibold text-sm">
              Teslimat Adresi Belirle
            </span>
          </div>
          <span>
            <FontAwesomeIcon
              className="text-brand-text-purple font-semibold"
              icon={faChevronRight}
            />
          </span>
        </div>
        <InputForm />
      </div>
    </>
  );
};

export default Hero;
