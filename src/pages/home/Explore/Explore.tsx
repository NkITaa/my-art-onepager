import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./explore.css";
import Image from "./Components/Image";

function Explore() {
  const images = [
    {
      url: "../../../assets/artwork_blog.png",
    },
    {
      url: "../../../assets/artwork_browse.png",
    },

    {
      url: "../../../assets/artwork_fav artworks.png",
    },
    {
      url: "../../../assets/artwork_fav collections.png",
    },
    {
      url: "../../../assets/artwork_feed.png",
    },
    {
      url: "../../../assets/artwork_chat preview.png",
    },
    {
      url: "../../../assets/artwork_chat.png",
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
      <div className="bg-slate-100 overflow-hidden">
        <div className="py-16">
          <div className="flex-col items-center flex">
            <div className="text-5xl font-bold ">Entdecke Kunst</div>
            <div className="text-2xl font-bold tracking-widest pt-3">
              Browse durch die Screens von MyArt
            </div>
          </div>

          <div className="py-16">
            <Slider {...settings}>
              {images.map((image, index) => {
                return <Image key={index} url={image.url} />;
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
