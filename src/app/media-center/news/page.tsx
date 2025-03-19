import React from "react";
import { FaRegCalendarAlt, FaComments } from "react-icons/fa";
import { CgDetailsMore } from "react-icons/cg";

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
              Media Center
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
              News
            </a>
          </li>
        </ol>
      </div>
      <div className="max-w-6xl mx-auto py-8 pb-14 md:py-14 p-5">
        <h1 className="font-bold text-5xl text-blue-900 mb-7">News</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col w-full bg-gray-200 p-5 py-10 gap-3 rounded-lg">
            <h1 className="font-bold text-blue-900">
              Negmar Shipping Chairman of the Board Mehmet Koç: Turkey is
              becoming a huge distribution center in world LPG trade
            </h1>
            <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt /> 28 April 2023
              </div>
              <div className="flex items-center gap-2">
                <CgDetailsMore />
                News
              </div>
              <div className="flex items-center gap-2">
                <FaComments /> No Comments
              </div>
            </div>
            <p>
              Negmar Shipping Chairman of the Board Mehmet Koç: Turkey is
              becoming a huge distribution center in world LPG
            </p>
          </div>
          <div className="flex flex-col w-full bg-gray-200 p-5 py-10 gap-3 rounded-lg">
            <h1 className="font-bold text-blue-900">
              Narlı Ferry goes public!
            </h1>
            <div className="flex flex-col md:flex-row gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <FaRegCalendarAlt /> 28 April 2023
              </div>
              <div className="flex items-center gap-2">
                <CgDetailsMore />
                News
              </div>
              <div className="flex items-center gap-2">
                <FaComments /> No Comments
              </div>
            </div>
            <p>Narlı Ferry goes public!</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
