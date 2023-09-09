function Paper() {
  return (
    <>
      <div className="grow shrink basis-0 p-12 bg-neutral-50 rounded-2xl shadow flex-col justify-center items-center gap-6 inline-flex">
        <div className="self-stretch h-[60px] p-1 bg-neutral-50 rounded-lg flex-col justify-center items-center flex">
          <img
            className="w-[216px] h-[52px]"
            src="https://via.placeholder.com/216x52"
          />
        </div>
        <div className="self-stretch justify-center items-center gap-3 inline-flex">
          <div className="grow shrink basis-0 text-xl font-bold leading-loose">
            “Die Kunst von morgen. MyArt die neue App”
          </div>
          <div className="self-stretch flex-col justify-end items-end inline-flex">
            <div className="w-6 h-6 relative" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Paper;
