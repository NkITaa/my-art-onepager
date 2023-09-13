import Footer from "../../universal/footer/Footer";
import Presskit from "../../universal/Presskit";
import Portrait from "./Portrait";

function Press() {
  const content = [
    "Die MyArt Digital Solutions GmbH ist ein Technologie-Unternehmen im Kunstsektor mit Sitz in Berlin, gegründet im Jahr 2020 von den Schwestern Lena und Sophie Kunstfreund, zusammen mit Marco Bilderlieb und Julia Farbenvoll.",
    "Das Unternehmen beschäftigt heute etwa 60 talentierte Mitarbeiterinnen und Mitarbeiter an den Standorten Berlin und Hamburg. Als Gesellschafter des Unternehmens treten die Gründer in Erscheinung, während Minderheitsbeteiligungen von mehreren renommierten Kunstinvestoren gehalten werden.",
    "Das Hauptprodukt von MyArt Digital Solutions GmbH ist die App MyArt, die 2021 an den Start ging - eine digitale Plattform, die Kunstliebhabern und Künstlern gleichermaßen dient. Mit MyArt können Benutzer Kunstwerke entdecken, kaufen und verkaufen, sich mit Künstlern direkt austauschen und Teil einer wachsenden Gemeinschaft werden.",
    "Die MyArt-App zählt bereits über 800.000 registrierte Nutzer und positioniert sich damit als eine der führenden Plattformen für Kunstinteraktion im deutschen Raum.",
  ];

  return (
    <>
      <Portrait
        title="Kurzportrait"
        subtitle="Fakten zur Berichterstattung"
        content={content}
      />
      <Presskit />
      <Footer slate={true} />
    </>
  );
}

export default Press;
