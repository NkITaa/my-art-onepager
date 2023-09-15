import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

function Paper({ link, quotation }: { link: string; quotation: string }) {
  return (
    <>
      <Link
        to={
          "https://www.spiegel.de/fotostrecke/anleitung-buch-magic-rubik-s-cube-zauberwuerfel-tayo-braun-fotostrecke-95038.html"
        }
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="w-[310px] h-[160px]">
          <div className="">
            <img className="w-[216px] h-[52px]" src={link} />
          </div>
          <div className="pt-6 flex flex-row">
            <div className="text-lg lg:text-xl font-bold dark:text-neutral-900">
              {quotation}
            </div>
            <AiOutlineArrowRight className="text-4xl self-end dark:text-neutral-900" />
          </div>
        </div>
      </Link>
    </>
  );
}

export default Paper;
