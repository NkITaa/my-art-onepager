import Paper from "./Components/Paper";

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
      <div className="w-full h-full py-20 bg-red-50">
        <div className="text-center text-5xl font-bold">
          bekannt aus folgenden Berichten
        </div>
        <div className="p-20 flex flex-row flex-wrap gap-6 justify-center">
          {papers.map((paper, index) => (
            <Paper link={paper.link} quotation={paper.quotation} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Referals;
