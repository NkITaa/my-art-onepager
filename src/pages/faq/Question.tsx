import { useRef, useState } from "react";

function Question({ question, answer }: { question: string; answer: string }) {
  const [active, setActive] = useState(false);
  const [height, setHeight] = useState("0px");
  const [rotate, setRotate] = useState("transform duration-700 ease");

  const contentSpace = useRef(null);

  function toggleAccordion() {
    setActive((prevState) => !prevState);
    // @ts-ignore
    setHeight(active ? "0px" : `${contentSpace.current.scrollHeight}px`);
    setRotate(
      active
        ? "transform duration-700 ease"
        : "transform duration-700 ease rotate-180"
    );
  }
  return (
    <>
      <li>
        <div className="px-40 pt-12 bg-slate-100">
          <button
            className="py-6 box-border cursor-pointer flex items-center"
            onClick={toggleAccordion}
          >
            <div className="grow basis-0 text-2xl font-bold leading-10 tracking-widest">
              {question}
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className={`${rotate} inline-block h-6 w-6`}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </button>
          <div
            ref={contentSpace}
            style={{ maxHeight: `${height}` }}
            className="self-stretch text-xl overflow-hidden transition-max-height duration-700 ease-in-out leading-loose"
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
