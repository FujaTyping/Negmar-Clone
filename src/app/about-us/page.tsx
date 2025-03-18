import React from "react";
import { GoHistory } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { FaUsersRectangle, FaUsers } from "react-icons/fa6";
import { BsRecycle } from "react-icons/bs";

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
              About Us
            </a>
          </li>
        </ol>
      </div>
      <div className="max-w-6xl mx-auto py-8 pb-14 md:py-14 p-5">
        <div>
          <h1 className="font-bold text-4xl mb-4">Who We Are?</h1>
          <p>
            Negmar is a private company with an international structure
            operating in many sectors. The company, which takes its power from
            entrepreneurship, has made its investments in fields such as
            maritime, logistics, construction, agriculture, food, informatics
            and mining. It serves with more than twenty companies and three
            international offices.Negmar, one of Turkey’s leading ship-owner
            companies, with 11 ships in its fleet, some of which it manages,
            continues to grow with its new investments.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 text-white mt-8">
          <div className="group flex flex-col bg-blue-800 items-center justify-center rounded-lg h-48">
            <div className="flex flex-col px-3 items-center gap-3 justify-center transition-transform duration-150 group-hover:-translate-y-[10px]">
              <GoHistory className="h-10 w-10" />
              <h1 className="font-bold text-xl md:text-2xl">History</h1>
            </div>
          </div>
          <div className="group flex flex-col bg-blue-800 items-center justify-center rounded-lg h-48">
            <div className="flex flex-col px-3 items-center gap-3 justify-center transition-transform duration-150 group-hover:-translate-y-[10px]">
              <FaRegUser className="h-10 w-10" />
              <h1 className="font-bold text-xl md:text-2xl">
                Vision - Mission
              </h1>
            </div>
          </div>
          <div className="group flex flex-col bg-blue-800 items-center justify-center rounded-lg h-48">
            <div className="flex flex-col px-3 items-center gap-3 justify-center transition-transform duration-150 group-hover:-translate-y-[10px]">
              <FaUsersRectangle className="h-10 w-10" />
              <h1 className="font-bold text-xl md:text-2xl">
                Board of Directors
              </h1>
            </div>
          </div>
          <div className="group flex flex-col bg-blue-800 items-center justify-center rounded-lg h-48">
            <div className="flex flex-col px-3 items-center gap-3 justify-center transition-transform duration-150 group-hover:-translate-y-[10px]">
              <FaUsers className="h-10 w-10" />
              <h1 className="font-bold text-xl md:text-2xl">
                Negmar Community
              </h1>
            </div>
          </div>
          <div className="group flex flex-col bg-blue-800 items-center justify-center rounded-lg h-48">
            <div className="flex flex-col px-3 items-center gap-3 justify-center transition-transform duration-150 group-hover:-translate-y-[10px]">
              <BsRecycle className="h-10 w-10" />
              <h1 className="font-bold text-xl md:text-2xl">Sustainability</h1>
            </div>
          </div>
          <div className="group flex flex-col bg-blue-800 items-center justify-center rounded-lg h-48">
            <div className="flex flex-col px-3 items-center gap-3 justify-center transition-transform duration-150 group-hover:-translate-y-[10px]">
              <img
                src="https://negmar.com/wp-content/uploads/2023/04/negva-1.png"
                alt="Grid Icons"
                className="h-14 w-14"
              />
              <h1 className="font-bold  text-xl md:text-2xl">NEGVA</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
