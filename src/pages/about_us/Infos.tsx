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
  return (
    <>
      <div
        className={`${align === "left" ? "bg-white" : "bg-slate-100"} py-16`}
      >
        <div className="flex flex-row flex-wrap items-center justify-center">
          {align === "left" ? (
            <div className="p-8">
              <img
                className="w-[668px] h-[400px] rounded-2xl object-cover"
                src={image}
              />
            </div>
          ) : null}
          <div className="max-w-[668px] p-8">
            <div className="text-[32px] lg:text-5xl font-bold pb-2">
              {title}
            </div>
            <div className="text-[22px] lg:text-2xl font-bold tracking-widest">
              {subtitle}
            </div>
            <div className="text-xl pt-6">{content}</div>
          </div>

          {align === "right" ? (
            <div className="p-8">
              <img
                className="w-[668px] h-[400px] rounded-2xl object-cover"
                src={image}
              />
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}

export default Infos;
