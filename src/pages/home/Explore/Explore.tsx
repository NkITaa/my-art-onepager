import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./explore.css";
import Image from "./components/Image";

function Explore() {
  const images = [
    {
      url: "../../../assets/carousel/1.png",
      urlMockup: "../../../assets/carousel/mockup_1.png",
    },
    {
      url: "../../../assets/carousel/2.png",
      urlMockup: "../../../assets/carousel/mockup_2.png",
    },

    {
      url: "../../../assets/carousel/3.png",
      urlMockup: "../../../assets/carousel/mockup_3.png",
    },
    {
      url: "../../../assets/carousel/4.png",
      urlMockup: "../../../assets/carousel/mockup_4.png",
    },
    {
      url: "../../../assets/carousel/5.png",
      urlMockup: "../../../assets/carousel/mockup_5.png",
    },
    {
      url: "../../../assets/carousel/6.png",
      urlMockup: "../../../assets/carousel/mockup_6.png",
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
