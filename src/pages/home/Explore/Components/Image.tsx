function Image({ url, mockup }: { url: string; mockup: string }) {
  return (
    <>
      <div className="flex flex-col align-middle relative">
        <img
          className="naked rounded-[32.40px] h-full absolute  border border-black border-opacity-50"
          src={url}
        />
        <img
          className="frame transition-transform relative opacity-0 z-10"
          src={mockup}
        />
      </div>
    </>
  );
}
export default Image;
