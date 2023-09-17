import Footer from "../../universal/footer/Footer";
import Infos from "./infos/Infos";
import info1 from "../../assets/artwork_mockup frontal.png";
import mockup1 from "../../assets/carousel/mockup_1.png";
import info2 from "../../assets/artwork_mockup diagonal right.png";
import mockup5 from "../../assets/carousel/mockup_5.png";
import info3 from "../../assets/artwork_mockup diagonal left.png";
import mockup4 from "../../assets/carousel/mockup_4.png";
import Sumup from "./banner/components/Sumup";
import Picture from "./banner/components/Picture";

function Home() {
  const arr: string[] = [
    "Durchstöbere eine umfangreiche Sammlung von Werken.",
    "MyArt ermöglicht es dir, Kunstwerke direkt von talentierten Künstlern.",
    "Erwerben oder selbst zum Verkauf anzubieten, wobei der gesamte Prozess sicher.",
  ];
  return (
    <>
      <div className="bg-slate-100 dark:bg-zinc-800 p-8 lg:p-10 2xl:p-30">
        <div className="flex flex-row flex-wrap items-center justify-center">
          <Sumup />
          <Picture />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
