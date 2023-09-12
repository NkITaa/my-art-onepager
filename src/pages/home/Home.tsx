import Download from "../Download";
import Footer from "../Footer";
import Banner from "./Banner/Banner";
import Explore from "./Explore/Explore";
import Infos from "./Infos/Infos";
import Referals from "./Referals/Referals";

function Home() {
  const arr: string[] = [
    "Durchstöbere eine umfangreiche Sammlung von Werken.",
    "MyArt ermöglicht es dir, Kunstwerke direkt von talentierten Künstlern.",
    "Erwerben oder selbst zum Verkauf anzubieten, wobei der gesamte Prozess sicher.",
  ];
  return (
    <>
      <Banner />
      <Infos
        align="left"
        image="../../../assets/artwork_mockup frontal.png"
        title="Kunstmarkplatz"
        subtitle="kaufe und verkaufe deine Kunst"
        bullets={arr}
        buttonContent="Durchstöbere eine umfangreiche Sammlung von Werken.
        MyArt ermöglicht es dir, Kunstwerke direkt von talentierten
        Künstlern. Erwerben oder selbst zum Verkauf anzubieten, wobei
        der gesamte Prozess sicher."
        buttonTitle="mehr Informationen"
      />
      <Infos
        align="right"
        image="../../../assets/artwork_mockup diagonal right.png"
        title="Kunstmarkplatz"
        subtitle="kaufe und verkaufe deine Kunst"
        bullets={arr}
        buttonContent="Durchstöbere eine umfangreiche Sammlung von Werken.
                  MyArt ermöglicht es dir, Kunstwerke direkt von talentierten
                  Künstlern. Erwerben oder selbst zum Verkauf anzubieten, wobei
                  der gesamte Prozess sicher."
        buttonTitle="mehr Informationen"
      />
      <Infos
        align="left"
        image="../../../assets/artwork_mockup diagonal left.png"
        title="Kunstmarkplatz"
        subtitle="kaufe und verkaufe deine Kunst"
        bullets={arr}
        buttonContent="Durchstöbere eine umfangreiche Sammlung von Werken.
                  MyArt ermöglicht es dir, Kunstwerke direkt von talentierten
                  Künstlern. Erwerben oder selbst zum Verkauf anzubieten, wobei
                  der gesamte Prozess sicher."
        buttonTitle="mehr Informationen"
      />
      <Explore />
      <Referals />
      <Download />
      <Footer />
    </>
  );
}

export default Home;
