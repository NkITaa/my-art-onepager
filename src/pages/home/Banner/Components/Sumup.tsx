import Button from "../../../../organisms/Button";

function Sumup() {
  return (
    <>
      <div className="2xl:max-w-4xl 2xl:p-10 lg:max-w-lg lg:p-4 sm:max-w-2xl sm:p-4 ">
        <div className="">
          <span className=" text-[52px] font-bold leading-[62.40px]">
            MyArt{" "}
          </span>
          <span className="text-zinc-700 text-[52px] font-bold leading-[62.40px]">
            Kunst für alle. <br />
            Entdecke und werde entdeckt.
          </span>
        </div>
        <div className="py-4 2xlpy-10">
          <span className="text-2xl font-bold leading-10">
            MyArt demokratisiert den Kunstmarkt.{" "}
          </span>
          <span className="text-2xl leading-10">
            Wir ermöglichen es, Künstler zu werden und Werke zu entdecken.
            Gleichzeitig bieten wir eine Gemeinschaft, unterstützt unser App.
          </span>
        </div>
        <Button link="/download" text="Download" />
      </div>
    </>
  );
}

export default Sumup;
