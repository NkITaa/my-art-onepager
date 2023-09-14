import Picture from "./components/Picture";
import Sumup from "./components/Sumup";

function Banner() {
  return (
    <>
      <div className="bg-slate-100 dark:bg-zinc-800 p-8 lg:p-10 2xl:p-30">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Sumup />
          <Picture />
        </div>
      </div>
    </>
  );
}

export default Banner;
