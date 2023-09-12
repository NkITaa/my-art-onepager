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
        <div className="w-[460px] h-[268px] flex-col justify-center items-center flex bg-neutral-50 rounded-2xl shadow px-12">
          <div className="">
            <img className="w-[216px] h-[52px]" src={link} />
          </div>
          <div className="pt-6 flex flex-row">
            <div className="text-xl font-bold">{quotation}</div>
            <AiOutlineArrowRight className="text-4xl self-end" />
          </div>
        </div>
      </Link>
    </>
  );
}

export default Paper;
