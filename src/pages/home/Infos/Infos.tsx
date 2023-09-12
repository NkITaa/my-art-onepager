import Description from "./components/Description";
import Image from "./components/Image";

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
        <div className="flex flex-row flex-wrap items-center justify-center">
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
