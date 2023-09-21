import Button from "./organisms/Button";

function Presskit({ art }: { art: string }) {
  return (
    <>
      <div
        className="w-full px-40 bg-white dark:bg-neutral-900 bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage: `url(${art})`,
        }}
      >
        <div className="py-16 flex-col flex items-center">
          <div className="">
            <div className="text-[32px] lg:text-5xl text-center font-bold">
              Downloade Dein Presseset
            </div>
            <div className="text-[22px] lg:text-2xl font-bold tracking-widest text-center pb-12 pt-4">
              Für Deine Berichterstattung über MyArt
            </div>
          </div>
          <Button
            link="https://drive.google.com/drive/folders/0B8kKmwX314STd0pqSC13Qm56Rnc?resourcekey=0-EM5_6PwyNeI34We89VEFCA"
            text="Presseset"
          />
        </div>
      </div>
    </>
  );
}

export default Presskit;
