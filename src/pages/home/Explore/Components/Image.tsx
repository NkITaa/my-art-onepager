function Image({ url, key }: { url: string; key: number }) {
  return (
    <>
      <div className="relative z-0">
        <img
          key={key}
          className="naked rounded-[32.40px] border border-black border-opacity-50"
          src={url}
        />
        <img
          key={key}
          className="frame rounded-[32.40px] transition-transform absolute inset-0 flex opacity-0  justify-center items-center  z-10"
          src="../../../assets/artwork_mockup frontal.png"
        />
        <div className=""></div>
      </div>
    </>
  );
}
export default Image;
