function Footer() {
  return (
    <>
      <div className="w-full h-[494px] px-40 bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[494px] py-16 flex-col justify-start items-center gap-16 flex">
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-neutral-900 text-xl font-bold leading-loose">
                Informationen
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  About us
                </div>
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  Kontakt
                </div>
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  Presse
                </div>
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  FAQ
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-neutral-900 text-xl font-bold leading-loose">
                Rechtliches
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  Impressum
                </div>
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  Datenschutz Web
                </div>
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  Datenschutz App
                </div>
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  AGB
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-neutral-900 text-xl font-bold leading-loose">
                Kontaktiere uns
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  +1012 3456 789
                </div>
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  hi@myart.de
                </div>
                <div className="text-neutral-900 text-xl font-normal leading-loose">
                  Kontaktformular
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className="text-neutral-900 text-xl font-bold leading-loose">
                Social Media
              </div>
              <div className="flex-col justify-start items-start gap-3 flex">
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-neutral-900 text-xl font-normal leading-loose">
                    myart.original
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 justify-center items-end flex" />
                  <div className="text-neutral-900 text-xl font-normal leading-loose">
                    my.art
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-neutral-900 text-xl font-normal leading-loose">
                    myart
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="h-6 flex-col justify-center items-center inline-flex" />
                  <div className="text-neutral-900 text-xl font-normal leading-loose">
                    MYart
                  </div>
                </div>
                <div className="justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className="text-neutral-900 text-xl font-normal leading-loose">
                    + 123 456 789
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch h-[50px] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[0px] bg-zinc-800"></div>
            <div className="text-neutral-900 text-base font-normal leading-relaxed">
              ©2023 MyArt. All right reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
