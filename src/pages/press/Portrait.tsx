function Portrait({
  title,
  subtitle,
  content,
}: {
  title: string;
  subtitle: string;
  content: string[];
}) {
  return (
    <>
      <div className="px-10 lg:px-40 bg-slate-100 flex-col justify-start items-center inline-flex">
        <div className="py-16">
          <div className="text-[32px] lg:text-5xl font-bold ">{title}</div>
          <div className="text-[22px] lg:text-2xl font-bold tracking-widest pt-4 pb-8">
            {subtitle}
          </div>
          <div className="text-xl leading-loose">
            {content.map((paragraph, index) => (
              <p key={index}>
                {paragraph} <br />
                <br />
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Portrait;
