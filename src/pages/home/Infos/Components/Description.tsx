import ExtendableButton from "../../../../universal/organisms/ExtendableButton";
import { BsPatchCheck } from "react-icons/bs";

function Description({
  title,
  subtitle,
  bullets,
  buttonTitle,
  buttonContent,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
  buttonTitle: string;
  buttonContent: string;
}) {
  return (
    <>
      <div className="max-w-fit px-10 lg:max-w-lg 2xl:max-w-4xl 2xl:px-30">
        <div className="text-[32px] lg:text-5xl font-bold ">{title}</div>
        <div className="text-[22px] pb-3 lg:text-2xl lg:py-6 font-bold">
          {subtitle}
        </div>
        <ul className="pb-5">
          {bullets.map((bullet, index) => {
            return (
              <li
                className="flex-row flex gap-3 items-baseline	pb-3 lg:text-xl"
                key={index}
              >
                <BsPatchCheck />
                {bullet}
              </li>
            );
          })}
        </ul>
        <ExtendableButton title={buttonTitle} content={buttonContent} />
      </div>
    </>
  );
}

export default Description;
