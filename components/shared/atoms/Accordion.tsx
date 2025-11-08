"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface IAccordionItem {
  title: string;
  content: React.ReactNode;
}

interface IAccordionProps {
  items: IAccordionItem[];
}

export default function Accordion({ items }: IAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
      {items.map((item, index) => (
        <div key={index} className="overflow-hidden border-b-2">
          <button className="w-full" onClick={() => toggle(index)}>
            <div className="flex justify-between items-center py-3 md:py-5">
              <p className="m-0 text-start font-normal leading-6 text-lg">
                {item.title}
              </p>
              <span className="ml-2">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <p>{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
