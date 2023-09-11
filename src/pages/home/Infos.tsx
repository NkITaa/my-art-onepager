import ExtendableButton from "../../organisms/ExtendableButton";

function Infos({
  title,
  subtitle,
  bullets,
  image,
  align,
  buttonTitle,
  buttonContent,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  image: string;
  align: "left" | "right";
  buttonTitle: string;
  buttonContent: string;
}) {
  return (
    <>
      <div className="px-40 bg-white justify-center items-center inline-flex">
        <div className="grow shrink basis-0 h-[878px] py-16 justify-center items-center gap-16 flex">
          {align === "left" ? (
            <div className="justify-center items-center flex">
              <div className="w-[400px] h-[750px] flex-col justify-center items-center inline-flex">
                <img
                  className="w-[400px] h-[750px] rounded-[13.60px] shadow"
                  src={image}
                />
              </div>
            </div>
          ) : null}
          <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
            <div className="self-stretch h-[110px] flex-col justify-center items-start gap-3 flex">
              <div className="text-5xl font-bold leading-[58px]">{title}</div>
              <div className="self-stretch text-2xl font-bold leading-10 tracking-widest">
                {subtitle}
              </div>
            </div>
            <div className="self-stretch max-h-fit flex-col justify-center items-start gap-3 flex">
              <div className="self-stretch justify-start items-center gap-3 inline-flex">
                <div className="w-5 h-5 relative" />
                <div className="grow shrink basis-0 text-xl  leading-loose">
                  <ul>
                    {bullets.map((bullet, index) => {
                      return <li key={index}>{bullet}</li>;
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <ExtendableButton title={buttonTitle} content={buttonContent} />
          </div>
          {align === "right" ? (
            <div className="justify-center items-center flex">
              <div className="w-[400px] h-[750px] flex-col justify-center items-center inline-flex">
                <img
                  className="w-[400px] h-[750px] rounded-[13.60px] shadow"
                  src={image}
                />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Infos;
