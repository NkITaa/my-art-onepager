import Button from "../organisms/Button";

function Presskit() {
  return (
    <>
      <div className="w-full px-40 bg-white">
        <div className="py-16 flex-col flex items-center">
          <div className="">
            <div className="text-[32px] lg:text-5xl text-center font-bold">
              Downloade Dein Presseset
            </div>
            <div className="text-[22px] lg:text-2xl font-bold tracking-widest text-center pb-12 pt-4">
              Für Deine Berichterstattung über MyArt
            </div>
          </div>

          <div className="">
            <Button link="/download" text="Presseset" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Presskit;
