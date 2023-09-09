function DownloadMe() {
  return (
    <>
      <div className="w-full h-[878px] px-40 bg-slate-100 justify-center items-start inline-flex">
        <div className="grow shrink basis-0 h-[878px] py-16 justify-center items-center gap-16 flex">
          <div className="justify-start items-start flex">
            <img
              className="w-[400px] h-[750px] rounded-2xl shadow"
              src="https://via.placeholder.com/400x750"
            />
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-16 inline-flex">
            <div className="self-stretch h-[58px] flex-col justify-center items-start gap-3 flex">
              <div className="self-stretch text-neutral-900 text-5xl font-bold leading-[58px]">
                Downloade dir MyArt
              </div>
            </div>
            <div className="self-stretch h-[233.70px] flex-col justify-end items-start gap-3 flex">
              <div className="self-stretch text-neutral-900 text-2xl font-bold leading-10 tracking-widest">
                Download per QR-Code
              </div>
              <div className="w-[181.70px] h-[181.70px] relative"></div>
            </div>
            <div className="self-stretch h-[114.40px] flex-col justify-center items-start gap-3 flex">
              <div className="self-stretch text-neutral-900 text-2xl font-bold leading-10 tracking-widest">
                Download in den Stores
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="w-[216px] h-[62.40px] justify-center items-center flex">
                  <div className="w-[216px] h-[62.40px] relative">
                    <div className="w-[124.05px] h-[10.90px] left-[69.88px] top-[10.23px] absolute"></div>
                    <div className="w-[127.59px] h-[27.16px] left-[67.86px] top-[28.08px] absolute"></div>
                  </div>
                </div>
                <div className="w-[172.80px] h-[49.92px] justify-center items-center flex">
                  <div className="w-[172.80px] h-[49.92px] relative">
                    <div className="w-[29.56px] h-[32.10px] left-[12.76px] top-[8.91px] absolute"></div>
                    <div className="w-[49.72px] h-[7.82px] left-[52.93px] top-[33.53px] absolute"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadMe;
