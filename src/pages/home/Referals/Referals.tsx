import Paper from "./Components/Paper";

function Referals() {
  return (
    <>
      <div className="w-full px-40 bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch py-16 flex-col justify-start items-center gap-16 flex">
          <div className="self-stretch flex-col justify-start items-center flex">
            <div className="self-stretch text-center text-5xl font-bold leading-[58px]">
              bekannt aus folgenden Berichten
            </div>
          </div>
          <div className="self-stretch justify-center items-start gap-6 inline-flex">
            <Paper
              link="https://via.placeholder.com/216x52"
              quotation="“Die Kunst von morgen. MyArt die neue App”"
            />
            <Paper
              link="https://via.placeholder.com/216x52"
              quotation="“Die Kunst von morgen. MyArt die neue App”"
            />
            <Paper
              link="https://via.placeholder.com/216x52"
              quotation="“Die Kunst von morgen. MyArt die neue App”"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Referals;
