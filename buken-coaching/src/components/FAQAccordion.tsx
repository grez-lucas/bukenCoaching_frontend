import { useEffect } from "react";
import { Collapse, initTE } from "tw-elements";

type FAQItem = {
  question: string;
  answer: string;
};

interface FAQAccordionProps {
  items: FAQItem[];
}

export function FAQAccordion({ items }: FAQAccordionProps) {

  useEffect(() => {
    initTE({ Collapse });
    
  }, []);


  const numberToWord = (num: number) => {
    switch (num) {
      case 0:
        return "One";
      case 1:
        return "Two";
      case 2:
        return "Three";
      case 3:
        return "Four";
      case 4:
        return "Five";
      case 5:
        return "Six";
      case 6:
        return "Seven";
      case 7:
        return "Eight";
      case 8:
        return "Nine";
      default:
        return "One";
    }

  };


  return (
    <div id="accordionExample" className="w-full">
      <div className="border border-t-0 border-x-0 border-white bg-transparent dark:border-white dark:bg-neutral-800">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-t-0 border-x-0 border-white bg-transparent dark:border-white dark:bg-neutral-800"
          >
            <h2 className="mb-0" id={`heading${numberToWord(index)}`}>
              <button
                className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-transparent px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-transparent dark:text-white [&:not([data-te-collapse-collapsed])]:text-main"
                type="button"
                data-te-collapse-init
                // CONTINUE HERE, CHANGE ALL 1, 2 ,3 to One Two Three
                data-te-target={`#collapse${numberToWord(index)}` }
                aria-expanded="false"
                aria-controls={`collapse${numberToWord(index)}`}
              >
                {item.question}
                <span className="ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-main transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <div
              id={`collapse${numberToWord(index)}`}
              className="!visible hidden"
              aria-labelledby={`heading${numberToWord(index)}`}
              data-te-parent="#accordionExample"
            >
              <div className="px-5 py-4">
                <p className="whitespace-pre-line">
              
                {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
  );
}
