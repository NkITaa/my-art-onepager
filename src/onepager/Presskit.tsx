function Presskit() {
  return (
    <>
      <div className="w-full h-[366px] px-40 bg-white flex-col justify-start items-start inline-flex">
        <div className="self-stretch h-[366px] py-16 flex-col justify-start items-start gap-16 flex">
          <div className="self-stretch h-[110px] flex-col justify-start items-center gap-3 flex">
            <div className="self-stretch text-center  text-5xl font-bold leading-[58px]">
              Downloade Dein Presseset
            </div>
            <div className="self-stretch text-center  text-2xl font-bold leading-10 tracking-widest">
              Für Deine Berichterstattung über MyArt
            </div>
          </div>
          <div className="self-stretch h-16 flex-col justify-start items-center flex">
            <div className="px-8 py-4 bg-neutral-900 rounded-xl justify-center items-center inline-flex">
              <div className="text-zinc-100 text-xl font-bold leading-loose">
                Presseset Download
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Presskit;
