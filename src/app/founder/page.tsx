import React from "react";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { GiRuleBook } from "react-icons/gi";
import { RiSpeakAiLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { IoDocumentTextOutline } from "react-icons/io5";

function page() {
  return (
    <>
      <div className="px-10 md:px-20 py-4 border-b border-gray-200">
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <a
              className="flex items-center text-sm text-blue-500 hover:text-blue-600 focus:outline-hidden focus:text-blue-600"
              href="#"
            >
              Negmar
            </a>
            <svg
              className="shrink-0 mx-2 size-4 text-blue-400"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6"></path>
            </svg>
          </li>
          <li className="inline-flex items-center">
            <a
              className="flex items-center text-sm text-blue-700 hover:text-blue-600 focus:outline-hidden focus:text-blue-600 font-bold"
              href="#"
            >
              Founder
            </a>
          </li>
        </ol>
      </div>
      <div className="max-w-6xl mx-auto py-8 pb-14 md:py-14 p-5">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          <div>
            <h1 className="font-bold text-4xl mb-10 text-blue-900">
              Mehmet KOÇ
            </h1>
            <div className="grid grid-cols-3 gap-6 text-blue-900">
              <div className="flex flex-col items-center justify-center gap-2">
                <FaRegUser className="w-6 h-6 md:w-8 md:h-8" />
                <h2 className="font-bold text-md md:text-xl">Biography</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <GiRuleBook className="w-6 h-6 md:w-8 md:h-8" />
                <h2 className="font-bold text-md md:text-xl">
                  Second Rule of Entrepreneurship
                </h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <RiSpeakAiLine className="w-6 h-6 md:w-8 md:h-8" />
                <h2 className="font-bold text-md md:text-xl">Speeches</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <FaUserGroup className="w-6 h-6 md:w-8 md:h-8" />
                <h2 className="font-bold text-md md:text-xl">Interviews</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <FaVideo className="w-6 h-6 md:w-8 md:h-8" />
                <h2 className="font-bold text-md md:text-xl">Video</h2>
              </div>
              <div className="flex flex-col items-center justify-center gap-2">
                <IoDocumentTextOutline className="w-6 h-6 md:w-8 md:h-8" />
                <h2 className="font-bold text-md md:text-xl">Articles</h2>
              </div>
            </div>
          </div>
          <img
            className="max-w-[330px] md:max-w-lg rounded-lg"
            src="https://negmar.com/wp-content/uploads/2023/03/mehmet-koc-2.jpg"
            alt="Founder"
          />
        </div>
      </div>
    </>
  );
}

export default page;
