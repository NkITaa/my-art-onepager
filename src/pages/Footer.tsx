import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="w-full h-[494px] px-40 bg-white flex-col justify-center items-center inline-flex">
        <div className="self-stretch h-[494px] py-16 flex-col justify-start items-center gap-16 flex">
          <div className="self-stretch justify-between items-start inline-flex">
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className=" text-xl font-bold leading-loose">
                Informationen
              </div>
              <ul className="flex-col justify-start items-start gap-3 flex">
                <li className=" text-xl  leading-loose">
                  <Link to="/about">About Us</Link>
                </li>
                <li className=" text-xl  leading-loose">
                  <Link to="/contact">Kontakt</Link>
                </li>
                <li className=" text-xl  leading-loose">
                  <Link to="/press">Presse</Link>
                </li>
                <li className=" text-xl  leading-loose">
                  <Link to="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className=" text-xl font-bold leading-loose">
                Rechtliches
              </div>
              <ul className="flex-col justify-start items-start gap-3 flex">
                <li className=" text-xl  leading-loose">Impressum</li>
                <li className=" text-xl  leading-loose">Datenschutz Web</li>
                <li className=" text-xl  leading-loose">Datenschutz App</li>
                <li className=" text-xl  leading-loose">AGB</li>
              </ul>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className=" text-xl font-bold leading-loose">
                Kontaktiere uns
              </div>
              <ul className="flex-col justify-start items-start gap-3 flex">
                <li className=" text-xl  leading-loose">+1012 3456 789</li>
                <li className=" text-xl  leading-loose">hi@myart.de</li>
                <li className=" text-xl  leading-loose">Kontaktformular</li>
              </ul>
            </div>
            <div className="flex-col justify-start items-start gap-3 inline-flex">
              <div className=" text-xl font-bold leading-loose">
                Social Media
              </div>
              <ul className="flex-col justify-start items-start gap-3 flex">
                <li className="justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className=" text-xl  leading-loose">myart.original</div>
                </li>
                <li className="justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 justify-center items-end flex" />
                  <div className=" text-xl  leading-loose">my.art</div>
                </li>
                <li className="justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className=" text-xl  leading-loose">myart</div>
                </li>
                <li className="justify-center items-center gap-3 inline-flex">
                  <div className="h-6 flex-col justify-center items-center inline-flex" />
                  <div className=" text-xl  leading-loose">MYart</div>
                </li>
                <li className="justify-center items-center gap-3 inline-flex">
                  <div className="w-6 h-6 relative" />
                  <div className=" text-xl  leading-loose">+ 123 456 789</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="self-stretch h-[50px] flex-col justify-start items-center gap-6 flex">
            <div className="self-stretch h-[0px] bg-zinc-800"></div>
            <div className=" text-base  leading-relaxed">
              ©2023 MyArt. All right reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
