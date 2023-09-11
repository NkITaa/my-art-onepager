import Picture from "./Components/Picture";
import Sumup from "./Components/Sumup";

function Banner() {
  return (
    <>
      <div className="bg-slate-100 p-4 lg:p-10 2xl:p-30">
        <div className="flex flex-col lg:flex-row lg:justify-center items-center">
          <Sumup />
          <Picture />
        </div>
      </div>
    </>
  );
}

export default Banner;
