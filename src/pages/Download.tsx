import AppstoreButton from "../organisms/AppstoreButton";
import PlaystoreButton from "../organisms/PlaystoreButton";

function Download() {
  return (
    <>
      <div className="w-full h-[364.40px] px-40 bg-slate-100 flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[364.40px] py-16 flex-col justify-start items-center gap-16 flex">
          <div className="self-stretch h-[110px] flex-col justify-start items-center gap-3 flex">
            <div className="self-stretch text-center  text-2xl font-bold leading-10 tracking-widest">
              Werde ein Teil der MyArt Community
            </div>
            <div className="self-stretch text-center  text-5xl font-bold leading-[58px]">
              Downloade dir hier MyArt
            </div>
          </div>
          <div className="self-stretch justify-center items-start inline-flex">
            <div className="grow shrink basis-0 h-[62.40px] justify-center items-start gap-3 flex">
              <AppstoreButton />
              <PlaystoreButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
