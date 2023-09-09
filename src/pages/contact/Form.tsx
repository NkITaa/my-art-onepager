import Button from "../../organisms/Button";

function Form() {
  return (
    <>
      <div className="w-full h-[609px] px-40 bg-slate-100 flex-col justify-center items-center inline-flex">
        <div className="self-stretch py-16 justify-center items-center gap-16 inline-flex">
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[146px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch text-5xl font-bold leading-[58px]">
                Kontaktiere uns!
              </div>
              <div className="self-stretch text-xl  leading-loose">
                Kontaktiere uns jederzeit gerne bei Fragen/ Feedback <br />
                oder sonstigen Anliegen auf einen unserer vielen Kontaktwege.
              </div>
            </div>
            <div className="justify-start items-start gap-6 inline-flex">
              <div className="w-8 h-8 relative" />
              <div className="w-8 h-8 relative" />
              <div className="w-8 h-8 relative" />
              <div className="h-8 flex-col justify-center items-center inline-flex" />
            </div>
          </div>
          <div className="grow shrink basis-0 flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[355px] flex-col justify-start items-start gap-6 flex">
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[328px] h-5 pr-[258px] justify-start items-center inline-flex">
                    <div className=" text-base  leading-snug tracking-tight">
                      Vorname
                    </div>
                  </div>
                  <div className="self-stretch p-4 bg-neutral-50 rounded-xl border border-gray-400" />
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[328px] h-5 pr-[243px] justify-start items-center inline-flex">
                    <div className=" text-base  leading-snug tracking-tight">
                      Nachname
                    </div>
                  </div>
                  <div className="self-stretch p-4 bg-neutral-50 rounded-xl border border-gray-400" />
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-3 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[328px] h-5 pr-[278px] justify-start items-center inline-flex">
                    <div className=" text-base  leading-snug tracking-tight">
                      E-mail
                    </div>
                  </div>
                  <div className="self-stretch p-4 bg-neutral-50 rounded-xl border border-red-600 justify-between items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-red-600 text-base  leading-snug tracking-tight">
                      oguzhan.sayar@googlemail.com
                    </div>
                  </div>
                  <div className="w-[328px] h-5 justify-end items-center inline-flex">
                    <div className="w-[400.89px] text-red-600 text-base  leading-snug tracking-tight">
                      Gebe bitte eine NORMALE E-Mail Adresse an mrk
                    </div>
                  </div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[328px] h-5 pr-32 justify-start items-center inline-flex">
                    <div className=" text-base  leading-snug tracking-tight">
                      Telefonnummer (optional)
                    </div>
                  </div>
                  <div className="self-stretch p-4 bg-neutral-50 rounded-xl border border-gray-400 justify-between items-center gap-2 inline-flex">
                    <div className="grow shrink basis-0 text-slate-500 text-base  leading-snug tracking-tight">
                      + 49 ...
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch justify-start items-start gap-4 inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-1 inline-flex">
                  <div className="w-[71px] h-5 justify-end items-center inline-flex">
                    <div className=" text-base  leading-snug tracking-tight">
                      Deine Nachricht
                    </div>
                  </div>
                  <div className="self-stretch h-[104px] p-4 bg-neutral-50 rounded-xl border border-gray-400" />
                </div>
              </div>
            </div>
            <div className="self-stretch h-[102px] flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch justify-start items-center gap-2 inline-flex">
                <div className="w-5 h-5 relative" />
                <div>
                  <span className=" text-base  leading-relaxed">
                    Ich habe die{" "}
                  </span>
                  <span className=" text-base font-bold leading-relaxed">
                    Datenschutzerklärung
                  </span>
                  <span className=" text-base  leading-relaxed">
                    {" "}
                    gelesen blyat
                  </span>
                </div>
              </div>
              <Button link="/download" text="Nachricht absenden" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Form;
