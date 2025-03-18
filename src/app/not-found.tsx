"use client";

import React from "react";
import { IoArrowBackSharp } from "react-icons/io5";
import { useRouter } from "next/navigation";

function NotFound() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center h-screen w-full p-10 gap-20">
        <div className="max-w-2xl">
          <div className="mb-5">
            <h1 className="font-bold text-6xl md:text-8xl mb-1">404</h1>
            <h2 className="font-bold text-3xl md:text-5xl mb-3">
              Something went wrong
            </h2>
            <p>
              We are very sorry but the page you are looking for cannot be
              found.
            </p>
          </div>
          <button
            type="button"
            onClick={() => {
              router.back();
            }}
            className="flex gap-2 items-center cursor-pointer py-3 text-lg px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-transparent bg-blue-700 text-white hover:bg-blue-800 focus:outline-hidden focus:bg-blue-700 transition-all duration-300"
          >
            <IoArrowBackSharp /> Back
          </button>
        </div>
        <img
          className="w-[250px] md:w-[375px]"
          src="https://negmar.com/wp-content/themes/manufacturer/images/robo.png"
          alt="ROBONotfound"
        />
      </div>
    </>
  );
}

export default NotFound;
