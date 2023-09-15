import { Link } from "react-router-dom";

export default function Popup({ setVisible }: { setVisible: any }) {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-slate-100 dark:bg-zinc-800">
      <div className="w-[358px] h-[452px] p-6 lg:w-[860px] lg:h-[392px] object-center absolute lg:p-12 bg-neutral-50 dark:bg-neutral-900 rounded-2xl">
        <div className="dark:text-zinc-100 text-neutral-900 text-2xl font-bold font-['Plus Jakarta Sans']">
          Cookies
        </div>
        <div className="dark:text-zinc-100 text-neutral-900 text-xl font-normal font-['Plus Jakarta Sans'] lg:my-12">
          Wir verwenden Cookies, um dir das beste Erlebnis auf unserer Webseite
          zu bieten und um unseren Service zu optimieren. Indem du fortfährst,
          stimmst du der Verwendung von Cookies gemäß unserer
          Datenschutzrichtlinie zu.
        </div>
        <div className="flex flex-row flex-wrap gap-5 m-5 justify-center text-center">
          <Link
            to={"https://en.wikipedia.org/wiki/Wolfgang_Beltracchi"}
            className="h-16 px-8 py-4 dark:bg-neutral-50 bg-neutral-900 w-full lg:w-auto rounded-xl border border-gray-400"
          >
            <div className="text-zinc-100 dark:text-neutral-900 lg:text-xl font-bold font-['Plus Jakarta Sans']">
              Alle Cookies ablehnen
            </div>
          </Link>
          <button
            onClick={() => {
              setVisible(false);
              localStorage.setItem("pop_status", "1");
              console.log(localStorage.getItem("pop_status"));
              console.log(localStorage.getItem("pop_status"));
            }}
            className="h-16 px-8 w-full py-4 bg-neutral-50 dark:bg-neutral-900 lg:w-auto rounded-xl border border-gray-400"
          >
            <div className="dark:text-zinc-100 text-neutral-900 lg:text-xl font-bold font-['Plus Jakarta Sans']">
              Alle Cookies aktzeptieren
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
