function Infos() {
  return (
    <>
      <div className="w-[2336px] h-[878px] px-40 bg-white justify-center items-center inline-flex">
        <div className="grow shrink basis-0 h-[878px] py-16 justify-center items-center gap-16 flex">
          <div className="justify-center items-center flex">
            <div className="w-[400px] h-[750px] flex-col justify-center items-center inline-flex">
              <img
                className="w-[400px] h-[750px] rounded-[13.60px] shadow"
                src="https://via.placeholder.com/400x750"
              />
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
            <div className="self-stretch h-[110px] flex-col justify-center items-start gap-3 flex">
              <div className="text-5xl font-bold leading-[58px]">
                Kunstmarkplatz
              </div>
              <div className="self-stretch text-2xl font-bold leading-10 tracking-widest">
                kaufe und verkaufe deine Kunst
              </div>
            </div>
            <div className="self-stretch h-[120px] flex-col justify-center items-start gap-3 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="grow shrink basis-0 text-xl  leading-loose">
                  Durchstöbere eine umfangreiche Sammlung von Werken.
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="grow shrink basis-0 text-xl  leading-loose">
                  MyArt ermöglicht es dir, Kunstwerke direkt von talentierten
                  Künstlern.
                </div>
              </div>
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="grow shrink basis-0 text-xl  leading-loose">
                  Erwerben oder selbst zum Verkauf anzubieten, wobei der gesamte
                  Prozess sicher.
                </div>
              </div>
            </div>
            <div className="self-stretch h-16 flex-col justify-center items-start gap-2.5 flex">
              <div className="px-8 py-4 bg-neutral-900 rounded-xl justify-center items-center gap-2 inline-flex">
                <div className="text-zinc-100 text-xl font-bold leading-loose">
                  mehr Informationen
                </div>
                <div className="w-5 h-5 justify-center items-center flex" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Infos;
