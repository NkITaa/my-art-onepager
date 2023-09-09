function LegalTemplate() {
  return (
    <>
      <div className="w-full h-[1234px] px-40 bg-slate-100 justify-center items-start inline-flex">
        <div className="grow shrink basis-0 py-16 flex-col justify-start items-start gap-6 inline-flex">
          <div className="text-5xl font-bold leading-[58px]">Impressum</div>
          <div className="self-stretch">
            <span className="text-xl  leading-loose">
              Angaben gemäß § 5 TMG:
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
              E-Mail:{" "}
            </span>
            <span className="text-xl  leading-loose">
              kontakt@myart.de
              <br />
            </span>
            <span className="text-xl  leading-loose">
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
              schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default LegalTemplate;
