import Button from "../organisms/Button";

function Presskit() {
  return (
    <>
      <div className="w-full px-40 bg-white">
        <div className="py-16 flex-col flex items-center">
          <div className="">
            <div className="text-center text-5xl font-bold">
              Downloade Dein Presseset
            </div>
            <div className="text-center text-2xl font-bold tracking-widest pb-12 pt-4">
              Für Deine Berichterstattung über MyArt
            </div>
          </div>

          <div className="">
            <Button link="/download" text="Presseset Download" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Presskit;
