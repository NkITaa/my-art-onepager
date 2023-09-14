function Image({ url, mockup }: { url: string; mockup: string }) {
  return (
    <>
      <div className="relative z-0">
        <img
          className="naked rounded-[32.40px] border border-black border-opacity-50"
          src={url}
        />
        <img
          className="frame rounded-[32.40px] transition-transform absolute inset-0 flex opacity-0  justify-center items-center  z-10"
          src={mockup}
        />
        <div className=""></div>
      </div>
    </>
  );
}
export default Image;
