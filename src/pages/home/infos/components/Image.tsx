function Image({ image }: { image: string }) {
  return (
    <>
      <div className="py-16 px-8 2xl:py-20 2xl:px-12">
        <img
          className="w-[264px] h-[495px] ld:w-[304px] ld:h-[570px] 2xl:w-[328px] 2xl:h-[615px] hover:scale-105 transition duration-300 ease-in-out"
          src={image}
        />
      </div>
    </>
  );
}

export default Image;
