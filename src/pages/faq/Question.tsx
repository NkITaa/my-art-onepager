import { useRef, useState } from "react";

function Question({ question, answer }: { question: string; answer: string }) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
  }
  return (
    <>
      <li>
        <div
          className={`${
            active
              ? "bg-white dark:bg-neutral-900"
              : "bg-slate-100 dark:bg-zinc-800"
          } px-5 sm:px-20 lg:px-40 2xl:px-80 pt-12 `}
        >
          <button
            className="py-6 box-border cursor-pointer flex items-center w-full"
            onClick={toggleAccordion}
          >
            <div className="text-[22px] lg:text-2xl font-bold leading-10 text-start grow basis-0 tracking-widest">
              {question}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className={`${
                active
                  ? "duration-700 ease rotate-180 opacity-0"
                  : "duration-700 ease "
              } h-6 w-6 self-center`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            ref={contentSpace}
            style={{ maxHeight: `${height}` }}
            className="self-stretch lg:text-xl overflow-hidden transition-max-height duration-700 ease-in-out leading-loose"
          >
            {answer}
          </div>
          <div className="self-stretch h-[0px] border border-neutral-300"></div>
        </div>
      </li>
    </>
  );
}

export default Question;
