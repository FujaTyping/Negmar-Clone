import React from "react";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Navbar() {
  return (
    <>
      <header className="relative flex flex-wrap border-b sm:justify-start sm:flex-nowrap w-full text-lg py-3 bg-white">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <Link
              className="flex-none text-xl font-semibold focus:outline-hidden focus:opacity-80"
              href="/"
              aria-label="Brand"
            >
              <span className="inline-flex items-center gap-x-2 text-xl font-semibold">
                <img
                  className="w-32 h-auto"
                  src="https://negmar.com/wp-content/uploads/2018/07/logo.png"
                  alt="Logo"
                />
              </span>
            </Link>
            <div className="sm:hidden">
              <button
                type="button"
                className="hs-collapse-toggle relative size-9 flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                id="hs-navbar-example-collapse"
                aria-expanded="false"
                aria-controls="hs-navbar-example"
                aria-label="Toggle navigation"
                data-hs-collapse="#hs-navbar-example"
              >
                <IoMdMenu className="hs-collapse-open:hidden shrink-0 size-4" />
                <IoClose className="hs-collapse-open:block hidden shrink-0 size-4" />
                <span className="sr-only">Toggle navigation</span>
              </button>
            </div>
          </div>
          <div
            id="hs-navbar-example"
            className="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow sm:block"
            aria-labelledby="hs-navbar-example-collapse"
          >
            <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5 text-blue-900">
              <Link
                className="group font-medium focus:text-blue-600"
                href="/"
                aria-current="page"
              >
                Home
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </Link>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                <button
                  id="hs-navbar-example-dropdown"
                  type="button"
                  className="group hs-dropdown-toggle flex items-center w-full focus:outline-hidden focus:text-blue-600 font-medium relative"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Mega Menu"
                >
                  About
                  <span className="absolute left-0 bottom-0 inline-block w-full h-[1.25px] bg-blue-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  <FaAngleDown className="ml-1" />
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 sm: before:absolute top-full sm:border border-gray-200 before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-navbar-example-dropdown"
                >
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                    href="/about-us"
                  >
                    About US
                  </Link>
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                    href="#"
                  >
                    Companies
                  </a>
                </div>
              </div>
              <Link
                className="group font-medium focus:outline-hidden focus:text-blue-600"
                href="/fleet"
              >
                Fleet
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </Link>
              <a
                className="group font-medium focus:outline-hidden focus:text-blue-600"
                href="#"
              >
                Human resources
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-blue-900"></span>
              </a>
              <div className="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] ">
                <button
                  id="hs-navbar-example-dropdown"
                  type="button"
                  className="group hs-dropdown-toggle flex items-center w-full focus:outline-hidden focus:text-blue-600 font-medium relative"
                  aria-haspopup="menu"
                  aria-expanded="false"
                  aria-label="Mega Menu"
                >
                  Media Center
                  <span className="absolute left-0 bottom-0 inline-block w-full h-[1.25px] bg-blue-900 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></span>
                  <FaAngleDown className="ml-1" />
                </button>

                <div
                  className="hs-dropdown-menu transition-[opacity,margin] ease-in-out duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-1 space-y-1 sm: before:absolute top-full sm:border border-gray-200 before:-top-5 before:start-0 before:w-full before:h-5 hidden"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="hs-navbar-example-dropdown"
                >
                  <a
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                    href="#"
                  >
                    Center
                  </a>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                    href="/media-center/news"
                  >
                    News
                  </Link>
                  <Link
                    className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100"
                    href="/media-center/contact"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
