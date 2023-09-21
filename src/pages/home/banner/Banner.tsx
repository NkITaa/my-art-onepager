import Picture from "./components/Picture";
import Sumup from "./components/Sumup";

export default function Banner({ art }: { art: string }) {
  return (
    <>
      {" "}
      <div className="bg-slate-100 dark:bg-zinc-800 p-8 lg:p-10 2xl:p-30 relative ">
        <div
          className="top-0 left-0 right-0 bottom-0 absolute bg-cover bg-center bg-no-repeat opacity-20"
          style={{ backgroundImage: `url(${art})` }}
        ></div>
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Sumup />
          <Picture />
        </div>
      </div>
    </>
  );
}
