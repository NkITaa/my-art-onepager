import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./explore.css";

function Explore() {
  const windowWidth = window.innerWidth;

  var settings = {
    dots: true,
    arrows: false,
    focusOnSelect: true,
    className: "center w-screen",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: windowWidth / 400,
  };
  return (
    <>
      <div className="w-screen bg-slate-100 flex-col   inline-flex">
        <div className="self-stretch flex-col gap-16 flex">
          <div className="self-stretch h-[110px] flex-col justify-start items-center gap-3 flex">
            <div className="self-stretch justify-center items-center gap-6 inline-flex">
              <div className="text-5xl font-bold leading-[58px]">
                Entdecke Kunst
              </div>
              <div className="w-12 h-12 pb-[0.20px] flex-col justify-start items-center gap-[4.80px] inline-flex">
                <div className="w-12 h-12 p-3 bg-neutral-900 rounded-[80px] flex-col justify-start items-start inline-flex">
                  <div className="w-6 h-6 flex-col justify-center items-start flex" />
                </div>
                <div className="w-7 h-[5px] bg-zinc-300 rounded-full" />
              </div>
            </div>
            <div className="text-center text-2xl font-bold leading-10 tracking-widest">
              Browse durch die Screens von MyArt
            </div>
          </div>

          <div className="container py-1">
            <Slider {...settings}>
              <img
                className="w-[400px] h-[750px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
                src="https://via.placeholder.com/240x520"
              />
              <img
                className="w-[400px] h-[750px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
                src="https://via.placeholder.com/240x520"
              />
              <img
                className="w-[400px] h-[750px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
                src="https://via.placeholder.com/240x520"
              />
              <img
                className="w-[400px] h-[750px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
                src="https://via.placeholder.com/240x520"
              />
              <img
                className="w-[400px] h-[750px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
                src="https://via.placeholder.com/240x520"
              />
              <img
                className="w-[400px] h-[750px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
                src="https://via.placeholder.com/240x520"
              />
              <img
                className="w-[400px] h-[750px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
                src="https://via.placeholder.com/240x520"
              />
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
