"use client";

import { useState } from "react";
import { BRAND_NAME, FAQ_ITEMS } from "@/lib/landing-data";
import { MaterialIcon } from "./MaterialIcon";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faq"
      className="bg-surface-container-low py-section-padding-desktop"
    >
      <div className="max-w-3xl mx-auto px-gutter">
        <div className="text-center mb-16">
          <h2
            className="text-headline-xl mb-stack-md"
            style={{ fontFamily: "var(--font-display)" }}
          >
            자주 묻는 질문
          </h2>
          <p className="text-on-surface-variant">
            {BRAND_NAME}에 대해 궁금한 점을 해결해 드립니다.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question} className="faq-item group">
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex items-center justify-between p-6 bg-surface-container-lowest rounded-xl hover:bg-surface transition-all duration-200 text-left shadow-sm ${
                    isOpen ? "bg-indigo-50/50" : ""
                  }`}
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-lg">{item.question}</span>
                  <MaterialIcon
                    name={isOpen ? "remove" : "add"}
                    className="transition-transform duration-300"
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    maxHeight: isOpen ? "500px" : "0px",
                  }}
                >
                  <div className="p-6 text-on-surface-variant text-body-md bg-indigo-50/50 rounded-b-xl -mt-2">
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
