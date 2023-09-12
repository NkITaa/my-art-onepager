import Description from "./Components/Description";
import Image from "./Components/Image";

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
      <div
        className={`p-4 lg:p-10 2xl:p-30 ${
          align === "left" ? "bg-white" : "bg-slate-100 "
        }`}
      >
        <div className="flex flex-col lg:flex-row lg:justify-center items-center">
          {align === "left" ? <Image image={image} /> : null}
          <Description
            title={title}
            subtitle={subtitle}
            bullets={bullets}
            buttonTitle={buttonTitle}
            buttonContent={buttonContent}
          />
          {align === "right" ? <Image image={image} /> : null}
        </div>
      </div>
    </>
  );
}

export default Infos;
