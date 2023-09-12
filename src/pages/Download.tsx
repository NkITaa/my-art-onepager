import AppstoreButton from "../organisms/AppstoreButton";
import PlaystoreButton from "../organisms/PlaystoreButton";

function Download() {
  return (
    <>
      <div className="bg-slate-100">
        <div className="p-16">
          <div className="pb-16">
            <div className="text-center text-2xl font-bold tracking-widest">
              Werde ein Teil der MyArt Community
            </div>
            <div className="text-center text-5xl font-bold">
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
