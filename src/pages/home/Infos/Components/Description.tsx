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
      <div className="2xl:max-w-4xl lg:max-w-lg max-w-fit p-4">
        <div className="">
          <div className="text-5xl font-bold ">{title}</div>
          <div className="text-2xl font-bold  ">{subtitle}</div>
        </div>
        <div className="">
          <ul>
            {bullets.map((bullet, index) => {
              return (
                <li key={index}>
                  <BsPatchCheck />
                  {bullet}
                </li>
              );
            })}
          </ul>
        </div>
        <ExtendableButton title={buttonTitle} content={buttonContent} />
      </div>
    </>
  );
}

export default Description;
