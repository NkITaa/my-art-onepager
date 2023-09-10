import AppstoreButton from "../../organisms/AppstoreButton";
import PlaystoreButton from "../../organisms/PlaystoreButton";

function DownloadMe() {
  return (
    <>
      <div className="w-full px-40 bg-slate-100 justify-center items-start inline-flex">
        <div className="grow shrink basis-0 py-16 justify-center items-center gap-16 flex">
          <div className="justify-start items-start flex">
            <img
              className="w-[400px] h-[750px] rounded-2xl shadow"
              src="https://via.placeholder.com/400x750"
            />
          </div>
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-16 inline-flex">
            <div className="self-stretch flex-col justify-center items-start gap-3 flex">
              <div className="self-stretch text-5xl font-bold leading-[58px]">
                Downloade dir MyArt
              </div>
            </div>
            <div className="self-stretch flex-col justify-end items-start gap-3 flex">
              <div className="self-stretch text-2xl font-bold leading-10 tracking-widest">
                Download per QR-Code
              </div>
              <div className="relative"></div>
            </div>
            <div className="self-stretch flex-col justify-center items-start gap-3 flex">
              <div className="self-stretch text-2xl font-bold leading-10 tracking-widest">
                Download in den Stores
              </div>
              <AppstoreButton />
              <PlaystoreButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DownloadMe;
