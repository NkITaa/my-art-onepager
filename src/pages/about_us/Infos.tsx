import { useRef } from "react";

function Infos({
  align,
  title,
  subtitle,
  content,
  image,
}: {
  align: "left" | "right";
  title: string;
  subtitle: string;
  content: string;
  image: string;
}) {
  const windowWidth = useRef(window.innerWidth); //1416
  return (
    <>
      <div
        className={`${
          align === "left"
            ? "bg-white dark:bg-neutral-900"
            : "bg-slate-100 dark:bg-zinc-800"
        } p-8 lg:p-10 2xl:p-30`}
      >
        <div className="flex flex-row flex-wrap items-center justify-center">
          {windowWidth.current < 1416 ? null : align === "left" ? (
            <img
              className="w-[668px] h-[400px] m-8 rounded-2xl object-cover"
              src={image}
            />
          ) : null}
          <div className="max-w-[668px] ">
            <div className="text-[32px] lg:text-5xl font-bold pb-2">
              {title}
            </div>
            <div className="text-[22px] lg:text-2xl font-bold tracking-widest">
              {subtitle}
            </div>
            <div className="lg:text-xl pt-6">{content}</div>
          </div>

          {windowWidth.current < 1416 ? (
            <img
              className="w-[668px] h-[400px] m-8 rounded-2xl object-cover"
              src={image}
            />
          ) : align === "right" ? (
            <img
              className="w-[668px] h-[400px] m-8 rounded-2xl object-cover"
              src={image}
            />
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Infos;
