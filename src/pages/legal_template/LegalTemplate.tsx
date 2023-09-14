import Footer from "../../universal/footer/Footer";

function LegalTemplate({ type }: { type: "imprint" | "privacy" | "terms" }) {
  const legalTexts = {
    imprint: {
      titel: "Impressum",
      text: `Angaben gemäß § 5 TMG:
      <br />
      <br />
      Firmenbezeichnung: MyArt Digital Solutions GmbH
      <br />
      Rechtsform: Gesellschaft mit beschränkter Haftung
      <br />
      <br />
      Anschrift:
      <br />
      Kunststraße 12345678 <br />
      ArtstadtDeutschland
      <br />
      <br />
      Kontakt:
      <br />
      Telefon: +49 123 4567890
      <br />
      Telefax: +49 123 4567891
      <br />
      E-Mail: kontakt@myart.de
      <br />
      <br />
      Vertretung:
      <br />
      Geschäftsführer: Max Künstler, Anna Kunstliebhaber
      <br />
      Registergericht: Amtsgericht ArtstadtRegisternummer: HRB 123456
      <br />
      Umsatzsteuer-ID:Umsatzsteuer-Identifikationsnummer gemäß §27 a
      Umsatzsteuergesetz: DE123456789
      <br />
      <br />
      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
      <br />
      Max Künstler
      <br />
      Kunststraße 12345678 <br />
      Artstadt
      <br />
      <br />
      Haftungshinweis:
      <br />
      Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
      Haftung für die Inhalte externer Links. Für den Inhalt der
      verlinkten Seiten sind ausschließlich deren Betreiber
      verantwortlich.
      <br />
      <br />
      Urheberrechtshinweis:
      <br />
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
      diesen Seiten unterliegen dem deutschen Urheberrecht. Die
      Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
      schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`,
    },
    privacy: {
      titel: "Datenschutz",
      text: `Angaben gemäß § 5 TMG:
      <br />
      <br />
      Firmenbezeichnung: MyArt Digital Solutions GmbH
      <br />
      Rechtsform: Gesellschaft mit beschränkter Haftung
      <br />
      <br />
      Anschrift:
      <br />
      Kunststraße 12345678 <br />
      ArtstadtDeutschland
      <br />
      <br />
      Kontakt:
      <br />
      Telefon: +49 123 4567890
      <br />
      Telefax: +49 123 4567891
      <br />
      E-Mail: kontakt@myart.de
      <br />
      <br />
      Vertretung:
      <br />
      Geschäftsführer: Max Künstler, Anna Kunstliebhaber
      <br />
      Registergericht: Amtsgericht ArtstadtRegisternummer: HRB 123456
      <br />
      Umsatzsteuer-ID:Umsatzsteuer-Identifikationsnummer gemäß §27 a
      Umsatzsteuergesetz: DE123456789
      <br />
      <br />
      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
      <br />
      Max Künstler
      <br />
      Kunststraße 12345678 <br />
      Artstadt
      <br />
      <br />
      Haftungshinweis:
      <br />
      Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
      Haftung für die Inhalte externer Links. Für den Inhalt der
      verlinkten Seiten sind ausschließlich deren Betreiber
      verantwortlich.
      <br />
      <br />
      Urheberrechtshinweis:
      <br />
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
      diesen Seiten unterliegen dem deutschen Urheberrecht. Die
      Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
      schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`,
    },
    terms: {
      titel: "Allgemeine Geschäftsbedingungen",
      text: `Angaben gemäß § 5 TMG:
      <br />
      <br />
      Firmenbezeichnung: MyArt Digital Solutions GmbH
      <br />
      Rechtsform: Gesellschaft mit beschränkter Haftung
      <br />
      <br />
      Anschrift:
      <br />
      Kunststraße 12345678 <br />
      ArtstadtDeutschland
      <br />
      <br />
      Kontakt:
      <br />
      Telefon: +49 123 4567890
      <br />
      Telefax: +49 123 4567891
      <br />
      E-Mail: kontakt@myart.de
      <br />
      <br />
      Vertretung:
      <br />
      Geschäftsführer: Max Künstler, Anna Kunstliebhaber
      <br />
      Registergericht: Amtsgericht ArtstadtRegisternummer: HRB 123456
      <br />
      Umsatzsteuer-ID:Umsatzsteuer-Identifikationsnummer gemäß §27 a
      Umsatzsteuergesetz: DE123456789
      <br />
      <br />
      Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:
      <br />
      Max Künstler
      <br />
      Kunststraße 12345678 <br />
      Artstadt
      <br />
      <br />
      Haftungshinweis:
      <br />
      Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
      Haftung für die Inhalte externer Links. Für den Inhalt der
      verlinkten Seiten sind ausschließlich deren Betreiber
      verantwortlich.
      <br />
      <br />
      Urheberrechtshinweis:
      <br />
      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
      diesen Seiten unterliegen dem deutschen Urheberrecht. Die
      Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
      Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
      schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.`,
    },
  };

  return (
    <>
      <div className="px-40 bg-slate-100 ">
        <div className="basis-0 py-16">
          <div className="text-5xl font-bold">{legalTexts[type].titel}</div>
          <div
            className="text-xl leading-loose"
            dangerouslySetInnerHTML={{ __html: legalTexts[type].text }}
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LegalTemplate;
