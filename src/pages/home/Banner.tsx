import { Link } from "react-router-dom";
import Button from "../../organisms/Button";

function Banner() {
  return (
    <>
      <div className=" h-[868px] px-40 bg-slate-100 flex-col justify-center items-center inline-flex">
        <div className="self-stretch py-16 justify-center items-center gap-16 inline-flex">
          <div className="grow shrink basis-0 py-10 flex-col justify-center items-start gap-6 inline-flex">
            <div className="self-stretch">
              <span className=" text-[52px] font-bold leading-[62.40px]">
                MyArt{" "}
              </span>
              <span className="text-zinc-700 text-[52px] font-bold leading-[62.40px]">
                Kunst für alle. <br />
                Entdecke und werde entdeckt.
              </span>
            </div>
            <div className="self-stretch">
              <span className="text-2xl font-bold leading-10">
                MyArt demokratisiert den Kunstmarkt.{" "}
              </span>
              <span className="text-2xl leading-10">
                Wir ermöglichen es, Künstler zu werden und Werke zu entdecken.
                Gleichzeitig bieten wir eine Gemeinschaft, unterstützt unser
                App.
              </span>
            </div>
            <Button />
          </div>
          <div className="py-10 justify-start items-start flex">
            <img
              className="w-[480px] h-[660px] shadow"
              src="https://via.placeholder.com/480x660"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
