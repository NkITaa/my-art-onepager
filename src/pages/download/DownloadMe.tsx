import AppstoreButton from "../../organisms/AppstoreButton";
import PlaystoreButton from "../../organisms/PlaystoreButton";

function DownloadMe() {
  return (
    <>
      <div className="w-full px-32 py-20 bg-slate-100">
        <div className="flex flex-row flex-wrap justify-center place-items-center">
          <img
            className="w-[400px] h-[750px] m-8"
            src="../../assets/artwork_mockup frontal.png"
          />

          <div className="max-w-2xl	m-8 ">
            <div className="text-5xl font-bold leading-[58px] pb-12">
              Downloade dir MyArt
            </div>
            <div className="text-2xl font-bold tracking-widest">
              Download per QR-Code
            </div>
            <img
              className="w-[182px] h-[182px] mb-16"
              src="../../assets/frame2.png"
            />
            <div className="text-2xl font-bold tracking-widest">
              Download in den Stores
            </div>
            <div className="flex flex-row wrap gap-5">
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
