function Explore() {
  return (
    <>
      <div className="w-full h-[1052px] px-40 bg-slate-100 flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[1052px] py-16 flex-col justify-center items-center gap-16 flex">
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
          <div className="self-stretch justify-center items-center gap-12 inline-flex">
            <img
              className="w-60 h-[520px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
              src="https://via.placeholder.com/240x520"
            />
            <img
              className="w-60 h-[520px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
              src="https://via.placeholder.com/240x520"
            />
            <img
              className="w-60 h-[520px] opacity-90 rounded-[32.40px] border border-black border-opacity-50"
              src="https://via.placeholder.com/240x520"
            />
            <div className="w-[400px] h-[750px] flex-col justify-center items-center inline-flex">
              <img
                className="w-[400px] h-[750px] rounded-[13.60px] shadow"
                src="https://via.placeholder.com/400x750"
              />
            </div>
            <img
              className="w-60 h-[520px] opacity-90 rounded-[32.40px] border border-black border-opacity-50"
              src="https://via.placeholder.com/240x520"
            />
            <img
              className="w-60 h-[520px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
              src="https://via.placeholder.com/240x520"
            />
            <img
              className="w-60 h-[520px] opacity-40 rounded-[32.40px] border border-black border-opacity-50"
              src="https://via.placeholder.com/240x520"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
