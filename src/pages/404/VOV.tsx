import Button from "../../organisms/Button";

function VOV() {
  return (
    <>
      <div className="px-10 lg:px-40 bg-slate-100 w-full py-16 text-center">
        <div className="text-[160px] font-bold leading-[200px]">404</div>
        <div className="text-2xl font-bold tracking-widest">
          Künstler gesucht! Hier fehlt das Meisterwerk.
        </div>
        <div className="w-full justify-center items-start gap-4 inline-flex pt-20">
          <Button link="/" text="Zur Homepage" />
          <Button link="/download" text="Melde einen Bug" />
        </div>
      </div>
    </>
  );
}

export default VOV;
