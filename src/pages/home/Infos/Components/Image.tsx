function Image({ image }: { image: string }) {
  return (
    <>
      <div className="">
        <div className="">
          <img
            className="w-[264px] h-[495px] ld:w-[304px] ld:h-[570px] 2xl:w-[328px] 2xl:h-[615px] hover:scale-y-105 transition duration-300 ease-in-out"
            src={image}
          />
        </div>
      </div>
    </>
  );
}

export default Image;
