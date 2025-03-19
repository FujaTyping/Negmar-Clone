import React from "react";
import { MdOutlineDocumentScanner } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import Link from "next/link";
import NewsSwiper from "../components/NewsSwiper";

function page() {
  return (
    <>
      <div className="px-4 md:px-20 py-4 border-b border-gray-200">
        <ol className="flex items-center whitespace-nowrap">
          <li className="inline-flex items-center">
            <a
              className="flex items-center text-sm text-blue-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
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
              className="flex items-center text-sm text-blue-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 font-bold"
              href="#"
            >
              Media Center
            </a>
          </li>
        </ol>
      </div>

      <div className="max-w-7xl flex flex-col md:flex-row items-start justify-center mx-auto py-8 mb-2 md:mb-4 pb-14 md:py-14 px-4 gap-8 md:gap-10">
        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            News
          </h1>
          <NewsSwiper />
        </div>

        <div className="w-full md:w-1/2">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Gallery
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <video
              className="w-full h-[200px] rounded-lg object-cover"
              src="https://negmar.com/wp-content/uploads/2023/03/Negmar1.mp4"
              muted
              autoPlay
              loop
            ></video>

            <img
              className="w-full h-[200px] rounded-lg object-cover"
              src="https://negmar.com/wp-content/uploads/elementor/thumbs/erdeniz-14-q5arsqkvxss0nvfkngpmabtap0e45n5921cjo3z94o.jpg"
              alt="Grid1"
            />

            <div className="flex h-[200px] flex-col py-8 px-4 gap-2 items-center justify-center border-2 border-blue-900 text-blue-900 rounded-lg">
              <MdOutlineDocumentScanner className="w-12 h-12" />
              <h1 className="font-bold text-xl text-center">
                Corporate Identity
              </h1>
            </div>

            <Link href={"/media-center/contact"}>
              <div className="flex h-[200px] flex-col py-8 px-4 gap-2 items-center justify-center border-2 border-blue-900 text-blue-900 rounded-lg">
                <IoIosCall className="w-12 h-12" />
                <h1 className="font-bold text-xl text-center">Contact</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
