import ExtendableButton from "../../../../organisms/ExtendableButton";
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
      <div className="2xl:max-w-4xl lg:max-w-lg max-w-fit px-10 2xl:px-30">
        <div className="text-5xl font-bold ">{title}</div>
        <div className="text-2xl font-bold py-6 ">{subtitle}</div>
        <ul className="pb-5">
          {bullets.map((bullet, index) => {
            return (
              <li
                className="flex-row flex gap-3 items-baseline	pb-3"
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
