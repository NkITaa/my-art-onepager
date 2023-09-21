import AppstoreButton from "./organisms/AppstoreButton";
import PlaystoreButton from "./organisms/PlaystoreButton";

function Download({ slate = true, art }: { slate?: boolean; art: string }) {
  return (
    <>
      <div
        className={
          slate
            ? "bg-slate-100 dark:bg-zinc-800"
            : "bg-white dark:bg-neutral-900 "
        }
      >
        <div
          className="p-16 bg-cover bg-center bg-no-repeat relative"
          style={{
            backgroundImage: `url(${art})`,
          }}
        >
          <div className="pb-16">
            <div className="text-[22px] lg:text-2xl text-center font-bold tracking-widest">
              Werde ein Teil der MyArt Community
            </div>
            <div className="text-[32px] lg:text-5xl text-center font-bold">
              Downloade dir hier MyArt
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-3 justify-center justify-items-center	">
            <AppstoreButton />
            <PlaystoreButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default Download;
