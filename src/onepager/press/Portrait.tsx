function Portrait() {
  return (
    <>
      <div className="w-full h-[718px] px-40 bg-slate-100 flex-col justify-start items-center inline-flex">
        <div className="self-stretch h-[718px] py-16 flex-col justify-center items-center gap-16 flex">
          <div className="self-stretch h-[110px] flex-col justify-start items-start gap-3 flex">
            <div className="self-stretch text-5xl font-bold leading-[58px]">
              Kurzportrait
            </div>
            <div className="self-stretch text-2xl font-bold leading-10 tracking-widest">
              Fakten zur Berichterstattung
            </div>
          </div>
          <div className="self-stretch justify-center items-center inline-flex">
            <div className="grow shrink basis-0 text-xl  leading-loose">
              Die MyArt Digital Solutions GmbH ist ein Technologie-Unternehmen
              im Kunstsektor mit Sitz in Berlin, gegründet im Jahr 2020 von den
              Schwestern Lena und Sophie Kunstfreund, zusammen mit Marco
              Bilderlieb und Julia Farbenvoll.
              <br />
              <br />
              Das Unternehmen beschäftigt heute etwa 60 talentierte
              Mitarbeiterinnen und Mitarbeiter an den Standorten Berlin und
              Hamburg. Als Gesellschafter des Unternehmens treten die Gründer in
              Erscheinung, während Minderheitsbeteiligungen von mehreren
              renommierten Kunstinvestoren gehalten werden. <br />
              <br />
              Das Hauptprodukt von MyArt Digital Solutions GmbH ist die App
              MyArt, die 2021 an den Start ging - eine digitale Plattform, die
              Kunstliebhabern und Künstlern gleichermaßen dient. Mit MyArt
              können Benutzer Kunstwerke entdecken, kaufen und verkaufen, sich
              mit Künstlern direkt austauschen und Teil einer wachsenden
              Gemeinschaft werden.
              <br />
              <br />
              Die MyArt-App zählt bereits über 800.000 registrierte Nutzer und
              positioniert sich damit als eine der führenden Plattformen für
              Kunstinteraktion im deutschen Raum.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Portrait;
