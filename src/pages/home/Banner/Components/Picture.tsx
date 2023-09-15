import img from "../../../../assets/artwork_mockup hero.png";

function Picture() {
  return (
    <img
      className="w-[320px] h-[440px] my-14 lg:w-[352px] lg:h-[484px] lg:p-0 2xl:w-[480px] 2xl:h-[660px] hover:scale-y-105 transition duration-300 ease-in-out"
      src={img}
    />
  );
}

export default Picture;
