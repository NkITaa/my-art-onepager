import { useRef } from "react";
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
  const windowWidth = useRef(window.innerWidth);

  return (
    <>
      <div
        className={` p-4 lg:p-10 2xl:p-30 ${
          align === "left"
            ? "bg-white dark:bg-neutral-900"
            : "bg-slate-100 dark:bg-zinc-800"
        }`}
      >
        <div className="flex flex-row flex-wrap items-center justify-center">
          {windowWidth.current <= 1024 ? null : align === "left" ? (
            <Image image={image} />
          ) : null}
          <Description
            title={title}
            subtitle={subtitle}
            bullets={bullets}
            buttonTitle={buttonTitle}
            buttonContent={buttonContent}
          />
          {windowWidth.current <= 1024 ? (
            <Image image={image} />
          ) : align === "right" ? (
            <Image image={image} />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Infos;
