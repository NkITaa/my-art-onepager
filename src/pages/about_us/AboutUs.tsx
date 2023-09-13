import Download from "../../universal/Download";
import Footer from "../../universal/footer/Footer";
import Infos from "./Infos";

function AboutUs() {
  return (
    <>
      <Infos
        align="right"
        title="unsere Mission"
        subtitle="wir stellen unsere Mission vor"
        content="
              Bei MyArt dreht sich alles um die Kunst und die Menschen dahinter.
              Unsere Mission ist es, Kunstliebhaber und Künstler auf einer
              einzigartigen Plattform zusammenzubringen, die sowohl Entdeckung
              als auch Austausch ermöglicht.
              Seit unserer Gründung haben wir es uns zur Aufgabe gemacht, eine
              Brücke zwischen traditionellen Kunstgalerien und der digitalen
              Welt zu schlagen."
        image="../../../assets/about_team (2).jpg"
      />
      <Infos
        align="left"
        title="unsere Mission"
        subtitle="wir stellen unsere Mission vor"
        content="
              Bei MyArt dreht sich alles um die Kunst und die Menschen dahinter.
              Unsere Mission ist es, Kunstliebhaber und Künstler auf einer
              einzigartigen Plattform zusammenzubringen, die sowohl Entdeckung
              als auch Austausch ermöglicht.
              Seit unserer Gründung haben wir es uns zur Aufgabe gemacht, eine
              Brücke zwischen traditionellen Kunstgalerien und der digitalen
              Welt zu schlagen."
        image="../../../assets/about_team (1).jpg"
      />
      <Download />
      <Footer />
    </>
  );
}

export default AboutUs;
