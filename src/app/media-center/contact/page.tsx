import Link from "next/link";
import React from "react";
import { IoIosMail, IoIosPin } from "react-icons/io";

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
              Contact
            </a>
          </li>
        </ol>
      </div>
      <div className="max-w-6xl flex flex-col md:flex-row items-start justify-center mx-auto py-8 pb-14 md:py-14 p-5 gap-10 md:gap-5">
        <div>
          <h1 className="font-bold text-5xl mb-5 text-blue-900">Contact</h1>
          <div className="flex flex-col gap-2">
            <Link href={"mailto:negmar@negmar.com"}>
              <div className="flex items-center gap-3">
                <IoIosMail className="w-6 h-6" />
                <h2 className="font-bold text-lg">negmar@negmar.com</h2>
              </div>
            </Link>
            <div className="flex items-start gap-2">
              <IoIosPin className="mt-1 min-w-6 min-h-6" />
              <div>
                <h2 className="font-bold text-lg">Headquarters</h2>
                <p>
                  Altunizade Mah. Ord Prof. Fahrettin Kerim Gökay Cad. No:35/1
                  Üsküdar, İstanbul
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="relative w-full overflow-hidden rounded-lg"
          style={{ paddingTop: "56.25%" }}
        >
          <iframe
            loading="lazy"
            className="absolute top-0 left-0 w-full h-full"
            src="https://maps.google.com/maps?q=Negmar%20Denizcilik%20A.%C5%9E&amp;t=m&amp;z=15&amp;output=embed&amp;iwloc=near"
            title="Negmar Denizcilik A.Ş"
            aria-label="Negmar Denizcilik A.Ş"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default page;
