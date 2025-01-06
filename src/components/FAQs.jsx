import React, { useState, useRef } from "react";
import { ACCORDION_ITEMS_LIST } from "../utils/helper";

const FAQs = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const contentRefs = useRef([]);

    const toggleAccordion = (index) => {
        setOpenAccordion(openAccordion === index ? null : index);
    };

    return (
        <div className="bg-z-black lg:pt-[98px] md:pt-16 pt-10">
            <div className="container max-w-[1022px] mx-auto">
                <h2 className="text-center text-white lg:text-5xl text-3xl font-semibold pb-10">
                    FAQs
                </h2>
                <div className="pt-[60px]">
                    {ACCORDION_ITEMS_LIST.map((item, index) => (
                        <div
                            key={index}
                            className={`relative mb-6 rounded-xl ${openAccordion === index
                                    ? "active-gradient-border"
                                    : "border border-white border-opacity-10"
                                }`}
                        >
                            <button
                                onClick={() => toggleAccordion(index)}
                                className={`font-medium text-xl leading-7 text-white flex justify-between items-center text-start p-6 max-sm:pe-3 max-w-[1022px] w-full ${openAccordion === index ? "pb-4" : "pb-6"
                                    }`}
                            >
                                {item.heading}
                                <img
                                    src="./assets/images/svg/faq-arrow.svg"
                                    alt={openAccordion === index ? "Collapse" : "Expand"}
                                    className={`size-6 ml-3  transition-transform duration-500 transform ${openAccordion === index ? "rotate-180" : "rotate-0"
                                        }`}
                                />
                            </button>
                            <div
                                ref={(el) => (contentRefs.current[index] = el)}
                                className={`transition-all duration-500 ease-in-out overflow-hidden`}
                                style={{
                                    maxHeight:
                                        openAccordion === index
                                            ? `${contentRefs.current[index]?.scrollHeight}px`
                                            : "0",
                                }}
                            >
                                <div>
                                    {item.description && (
                                        <p className="text-white font-normal text-base leading-7 sm:p-6 p-3 max-w-[950px]">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQs;
