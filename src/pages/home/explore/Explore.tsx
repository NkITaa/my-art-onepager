import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./explore.css";
import Image from "./components/Image";

import carousel1 from "../../../assets/carousel/1.png";
import carouselMockup1 from "../../../assets/carousel/mockup_1.png";
import carousel2 from "../../../assets/carousel/2.png";
import carouselMockup2 from "../../../assets/carousel/mockup_2.png";
import carousel3 from "../../../assets/carousel/3.png";
import carouselMockup3 from "../../../assets/carousel/mockup_3.png";
import carousel4 from "../../../assets/carousel/4.png";
import carouselMockup4 from "../../../assets/carousel/mockup_4.png";
import carousel5 from "../../../assets/carousel/5.png";
import carouselMockup5 from "../../../assets/carousel/mockup_5.png";
import carousel6 from "../../../assets/carousel/6.png";
import carouselMockup6 from "../../../assets/carousel/mockup_6.png";

function Explore() {
  const images = [
    {
      url: carousel1,
      urlMockup: carouselMockup1,
    },
    {
      url: carousel2,
      urlMockup: carouselMockup2,
    },

    {
      url: carousel3,
      urlMockup: carouselMockup3,
    },
    {
      url: carousel4,
      urlMockup: carouselMockup4,
    },
    {
      url: carousel5,
      urlMockup: carouselMockup5,
    },
    {
      url: carousel6,
      urlMockup: carouselMockup6,
    },
  ];

  var settings = {
    slidesToShow: 5,
    dots: true,
    arrows: false,
    focusOnSelect: true,
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 1900, // width to change options
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-slate-100 dark:bg-zinc-800 overflow-hidden">
        <div className="py-16">
          <div className="flex-col items-center flex">
            <div className="text-[32px] lg:text-5xl font-bold ">
              Entdecke Kunst
            </div>
            <div className="text-[22px] px-5 lg:text-2xl font-bold tracking-widest pt-3">
              Browse durch die Screens von MyArt
            </div>
          </div>

          <div className="py-16">
            <Slider {...settings}>
              {images.map((image, index) => {
                return (
                  <Image key={index} url={image.url} mockup={image.urlMockup} />
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
