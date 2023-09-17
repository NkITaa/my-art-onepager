import Download from "../../universal/Download";
import Footer from "../../universal/footer/Footer";
import Banner from "./banner/Banner";
import Explore from "./explore/Explore";

function Home() {
  const arr: string[] = [
    "Durchstöbere eine umfangreiche Sammlung von Werken.",
    "MyArt ermöglicht es dir, Kunstwerke direkt von talentierten Künstlern.",
    "Erwerben oder selbst zum Verkauf anzubieten, wobei der gesamte Prozess sicher.",
  ];
  return (
    <>
      <Banner />
      <Explore />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
