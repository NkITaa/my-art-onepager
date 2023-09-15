import Download from "../../universal/Download";
import Footer from "../../universal/footer/Footer";
import Banner from "./banner/Banner";
import Explore from "./explore/Explore";
import Infos from "./infos/Infos";
import Referals from "./referals/Referals";
import info1 from "../../assets/artwork_mockup frontal.png";
import mockup1 from "../../assets/carousel/mockup_1.png";
import info2 from "../../assets/artwork_mockup diagonal right.png";
import mockup5 from "../../assets/carousel/mockup_5.png";
import info3 from "../../assets/artwork_mockup diagonal left.png";
import mockup4 from "../../assets/carousel/mockup_4.png";

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
        image={info1}
        imageSmall={mockup1}
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
        image={info2}
        imageSmall={mockup5}
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
        image={info3}
        imageSmall={mockup4}
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
