import Button from "../../universal/organisms/Button";

function VOV() {
  return (
    <>
      <div className="px-10 lg:px-40 bg-slate-100 dark:bg-zinc-800 w-full py-16 text-center">
        <div className="text-[120px] leading-[120px] lg:text-[160px] lg:leading-[200px] font-bold ">
          404
        </div>
        <div className="lg:text-2xl font-bold tracking-widest">
          Künstler gesucht! Hier fehlt das Meisterwerk.
        </div>
        <div className="w-full justify-center items-start gap-4 inline-flex pt-14 lg:pt-20">
          <Button link="/" text="Homepage" />
        </div>
      </div>
    </>
  );
}

export default VOV;
