import { useState } from "react";
import type { FAQ } from "../data/data.type";

const AccordionItem = ({
  title,
  body,
  isOpen,
  handleToggle,
}: FAQ & { isOpen: boolean; handleToggle: () => void }) => {
  return (
    <div className="flex flex-col">
      <div
        className={`rounded-lg flex flex-row justify-between align-middle cursor-pointer gap-x-2 p-4 ${
          isOpen ? "bg-red-100 dark:bg-red-400" : "bg-red-50 dark:bg-red-800"
        }`}
        onClick={handleToggle}
      >
        <span className="text-xl">{title}</span>
        <span className="grid grid-cols-1 place-content-center">
          <i
            className={`ph ph-caret-up transition-transform duration-150 ${
              isOpen ? "rotate-180" : ""
            }`}
          ></i>
        </span>
      </div>
      {isOpen && (
        <p className="px-4 mt-2 animate__animated animate__fadeIn">{body}</p>
      )}
    </div>
  );
};

const Accordion = ({ data }: { data: ReadonlyArray<FAQ> }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col gap-4">
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          body={item.body}
          isOpen={openIndex === index}
          handleToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
