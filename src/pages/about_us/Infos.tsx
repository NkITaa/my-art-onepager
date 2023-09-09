function Infos() {
  return (
    <>
      <div className="w-full h-[528px] px-40 bg-slate-100 flex-col justify-center items-center inline-flex">
        <div className="self-stretch py-16 justify-center items-center gap-16 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
            <div className="self-stretch h-[110px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch  text-5xl font-bold leading-[58px]">
                unsere Mission
              </div>
              <div className="self-stretch  text-2xl font-bold leading-10 tracking-widest">
                wir stellen unsere Mission vor
              </div>
            </div>
            <div className="self-stretch  text-xl  leading-loose">
              Bei MyArt dreht sich alles um die Kunst und die Menschen dahinter.
              Unsere Mission ist es, Kunstliebhaber und Künstler auf einer
              einzigartigen Plattform zusammenzubringen, die sowohl Entdeckung
              als auch Austausch ermöglicht. <br />
              <br />
              Seit unserer Gründung haben wir es uns zur Aufgabe gemacht, eine
              Brücke zwischen traditionellen Kunstgalerien und der digitalen
              Welt zu schlagen.{" "}
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start inline-flex">
            <img
              className="w-[668px] h-[400px] relative rounded-2xl"
              src="https://via.placeholder.com/668x400"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Infos;
