import AppstoreButton from "../../universal/organisms/AppstoreButton";
import PlaystoreButton from "../../universal/organisms/PlaystoreButton";
import frontal from "../../assets/artwork_mockup frontal.png";
import frame2 from "../../assets/frame2.png";

function DownloadMe() {
  return (
    <>
      <div className="w-full py-20 bg-slate-100 dark:bg-zinc-800 ">
        <div className="flex flex-row flex-wrap justify-center place-items-center">
          <img
            className="w-[264px] h-[495px] lg:w-[304px] lg:h-[570px] 2xl:w-[328px] 2xl:h-[615px] m-8"
            src={frontal}
          />

          <div className="max-w-2xl	m-8 text-center sm:text-start">
            <div className="text-[32px] lg:text-5xl lg:leading-[58px] font-bold pb-12">
              Downloade dir MyArt
            </div>
            <div className="text-[22px] lg:text-2xl font-bold tracking-widest">
              Download per QR-Code
            </div>
            <img
              className="w-[182px] h-[182px] mb-16 justify-self-center dark:invert lg:justify-self-start"
              src={frame2}
            />
            <div className="text-[22px] lg:text-2xl font-bold tracking-widest">
              Download in den Stores
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-5">
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
