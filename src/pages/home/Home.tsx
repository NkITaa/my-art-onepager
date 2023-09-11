import Download from "../Download";
import Footer from "../Footer";
import Banner from "./Banner/Banner";
import Explore from "./Explore";
import Infos from "./Infos";
import Referals from "./Referals/Referals";

function Home() {
  const arr: string[] = ["A", "B", "C"];
  return (
    <>
      <Banner />
      <Infos
        align="left"
        image="https://via.placeholder.com/400x750"
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
        image="https://via.placeholder.com/400x750"
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
        image="https://via.placeholder.com/400x750"
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
