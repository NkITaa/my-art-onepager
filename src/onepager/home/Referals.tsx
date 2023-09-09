function Referals() {
  return (
    <>
      <div className="w-full h-[494px] px-40 bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[494px] py-16 flex-col justify-start items-center gap-16 flex">
          <div className="self-stretch h-[58px] flex-col justify-start items-center flex">
            <div className="self-stretch text-center text-neutral-900 text-5xl font-bold leading-[58px]">
              bekannt aus folgenden Berichten
            </div>
          </div>
          <div className="self-stretch justify-center items-start gap-6 inline-flex">
            <div className="grow shrink basis-0 p-12 bg-neutral-50 rounded-2xl shadow flex-col justify-center items-center gap-6 inline-flex">
              <div className="self-stretch h-[60px] p-1 bg-neutral-50 rounded-lg flex-col justify-center items-center flex">
                <img
                  className="w-[216px] h-[52px]"
                  src="https://via.placeholder.com/216x52"
                />
              </div>
              <div className="self-stretch justify-center items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 text-neutral-900 text-xl font-bold leading-loose">
                  “Die Kunst von morgen. MyArt die neue App”
                </div>
                <div className="self-stretch flex-col justify-end items-end inline-flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-12 bg-neutral-50 rounded-2xl shadow flex-col justify-center items-center gap-6 inline-flex">
              <div className="self-stretch h-[60px] p-1 bg-neutral-50 rounded-lg flex-col justify-center items-center flex">
                <img
                  className="w-[216px] h-[52px]"
                  src="https://via.placeholder.com/216x52"
                />
              </div>
              <div className="self-stretch justify-center items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 text-neutral-900 text-xl font-bold leading-loose">
                  “Das ist sehr stark Menschenskindaaaaa”
                </div>
                <div className="self-stretch flex-col justify-end items-end inline-flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
            <div className="grow shrink basis-0 p-12 bg-neutral-50 rounded-2xl shadow flex-col justify-center items-center gap-6 inline-flex">
              <div className="self-stretch h-[60px] p-1 bg-neutral-50 rounded-lg flex-col justify-center items-center flex">
                <img
                  className="w-[216px] h-[52px]"
                  src="https://via.placeholder.com/216x52"
                />
              </div>
              <div className="self-stretch justify-center items-center gap-3 inline-flex">
                <div className="grow shrink basis-0 text-neutral-900 text-xl font-bold leading-loose">
                  “Lol vallah beschder Zeitungsbeitrag”
                </div>
                <div className="self-stretch flex-col justify-end items-end inline-flex">
                  <div className="w-6 h-6 relative" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Referals;
