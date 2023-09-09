import Paper from "./Components/Paper";

function Referals() {
  return (
    <>
      <div className="w-full h-[494px] px-40 bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[494px] py-16 flex-col justify-start items-center gap-16 flex">
          <div className="self-stretch h-[58px] flex-col justify-start items-center flex">
            <div className="self-stretch text-center text-5xl font-bold leading-[58px]">
              bekannt aus folgenden Berichten
            </div>
          </div>
          <div className="self-stretch justify-center items-start gap-6 inline-flex">
            <Paper />
            <Paper />
            <Paper />
          </div>
        </div>
      </div>
    </>
  );
}

export default Referals;
