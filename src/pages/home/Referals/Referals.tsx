import Paper from "./components/Paper";

function Referals() {
  const papers = [
    {
      link: "../../../assets/logo_FAZ.png",
      quotation: "“Die Kunst von morgen. MyArt die neue App”",
    },
    {
      link: "../../../assets/logo_der Spiegel.png",
      quotation: "“Die Kunst von morgen. MyArt die neue App”",
    },
    {
      link: "../../../assets/logo_Gea Reutlingen.png",
      quotation: "“Die Kunst von morgen. MyArt die neue App”",
    },
  ];

  return (
    <>
      <div className="py-16 lg:py-20 w-full h-full  dark:bg-neutral-900">
        <div className="text-[32px] lg:text-5xl font-bold text-center">
          bekannt aus folgenden Berichten
        </div>
        <div className="py-10 lg:py-20 flex flex-row flex-wrap gap-6 justify-center">
          {papers.map((paper, index) => (
            <Paper link={paper.link} quotation={paper.quotation} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Referals;
