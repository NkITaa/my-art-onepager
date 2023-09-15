import Button from "../../../../universal/organisms/Button";

function Sumup() {
  return (
    <>
      <div className=" sm:max-w-2xl sm:pr-4 lg:max-w-lg lg:pr-4 2xl:max-w-4xl 2xl:pr-10">
        <div className="">
          <span className="text-[32px] lg:text-[52px] lg:leading-[62.40px] font-bold ">
            MyArt{" "}
          </span>
          <span className="text-[32px] lg:text-[52px] lg:leading-[62.40px] text-zinc-700 dark:text-neutral-200 font-bold">
            Kunst für alle. <br />
            Entdecke und werde entdeckt.
          </span>
        </div>
        <div className="py-4 2xl:py-10">
          <span className="text-lg lg:text-2xl lg:leading-10 font-bold">
            MyArt demokratisiert den Kunstmarkt.{" "}
          </span>
          <span className="text-lg lg:text-2xl lg:leading-10">
            Wir ermöglichen es, Künstler zu werden und Werke zu entdecken.
            Gleichzeitig bieten wir eine Gemeinschaft, unterstützt unser App.
          </span>
        </div>
        <Button download link="/download" text="Download" />
      </div>
    </>
  );
}

export default Sumup;
