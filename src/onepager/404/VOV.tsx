function VOV() {
  return (
    <>
      <div className="w-full h-[548px] px-40 bg-slate-100 justify-center items-center inline-flex">
        <div className="grow shrink basis-0 py-16 flex-col justify-center items-center gap-16 inline-flex">
          <div className="self-stretch h-[292px] flex-col justify-center items-center gap-3 flex">
            <div className=" text-[160px] font-bold leading-[200px]">404</div>
            <div className="self-stretch text-center  text-2xl font-bold leading-10 tracking-widest">
              Künstler gesucht! Hier fehlt das Meisterwerk.
            </div>
          </div>
          <div className="self-stretch justify-center items-start gap-4 inline-flex">
            <div className="px-8 py-4 bg-neutral-900 rounded-xl justify-center items-center flex">
              <div className="text-zinc-100 text-xl font-bold leading-loose">
                zur Homepage
              </div>
            </div>
            <div className="px-8 py-4 bg-neutral-50 rounded-xl border border-gray-400 justify-center items-center flex">
              <div className=" text-xl font-bold leading-loose">
                Melde einen Bug
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VOV;
