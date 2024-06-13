import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";

const Questions = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const questions = [
    "What is WELAND?",
    "How do I start?",
    "Are there any fees for transactions?",
    "How do I report a problem or bug?"
  ];
  const answer = [
    "answer1 is WELAND?",
    "answer2 is Tailwind CSS in React?",
    "answer3 is of using Tailwind CSS?",
    "answer4 is of using Tailwind CSS?",
  ];

  return (
    <>
      <div>
        <h1 className="text-3xl text-center font-semibold">
          Frequently Asked Questions
        </h1>

        <div className="container lg:w-[60vw] w-full mx-auto my-10 py-5">
          {questions.map((question, index) => (
            <div key={index} className="relative inline-block text-center w-full mb-4">
              <div>
                <button
                  onClick={() => toggleDropdown(index)}
                  type="button"
                  className="inline-flex gap-1 justify-start w-full rounded-md text-xl shadow-sm px-4 py-2 bg-[#33427675] font-medium text-white hover:bg-[#33427675] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  aria-expanded={openDropdown === index}
                  aria-haspopup="true"
                >
                  <IoMdArrowDropright className={`text-3xl transform transition-transform ${openDropdown === index ? 'rotate-90' : ''}`} />
                  <p className="my-auto font-['Oswald']">{question}</p>
                </button>
              </div>

              {openDropdown === index && (
                <div
                  className="origin-top-right relative left-0 mt-2 w-full rounded-md shadow-lg bg-[#33427675] ring-1 ring-black ring-opacity-5"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <div className="py-1" role="none">
                    <a
                      href="#"
                      className="block px-4 py-2 text-lg text-start hover:bg-[#33427675]"
                      role="menuitem"
                    >
                       {answer[index]}
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Questions;
