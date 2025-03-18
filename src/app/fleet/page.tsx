import React from "react";

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
              Fleet
            </a>
          </li>
        </ol>
      </div>
      <div className="max-w-6xl mx-auto py-8 pb-14 md:py-14 p-5">
        <div className="flex flex-col items-center justify-center gap-6">
          <div>
            <h1 className="font-bold text-4xl mb-4">FLEET</h1>
            <p>
              Operating under Negmar, Negmar Teknik Ship Management Inc. with
              its experienced team, it carries out the technical and commercial
              management of both group and non-group ships. The company is
              responsible for the safe and efficient operation of its fleet,
              which has a wide range from LPG to dry cargo, in national and
              international waters, and proudly reflects the name of Negmar in
              world shipping.
            </p>
          </div>
          <div className="w-16 h-0.5 bg-blue-600"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-9">
          <div>
            <img
              src="https://negmar.com/wp-content/uploads/elementor/thumbs/lpg-12-q5arb8t0qsug89ho5xmc9rj9uxxfbosmlzxjoczeew.jpg"
              alt="Flex1"
              className="rounded-lg h-[200px]"
            />
            <p className="font-bold text-center mt-4">LPG</p>
          </div>
          <div>
            <img
              src="https://negmar.com/wp-content/uploads/elementor/thumbs/Negmar-Cicek-3-q5ard96ld1lj28kjfawm3r9rlm0osdryjy5xmo033s.jpeg"
              alt="Flex1"
              className="rounded-lg h-[200px]"
            />
            <p className="font-bold text-center mt-4">Dry Cargo</p>
          </div>
          <div>
            <img
              src="https://negmar.com/wp-content/uploads/elementor/thumbs/tagg-1-q5argvu5r0kdw1ar8ddr8cau664pib6ndwufc4md2w.jpeg"
              alt="Flex1"
              className="rounded-lg h-[200px]"
            />
            <p className="font-bold text-center mt-4">Ro-Ro</p>
          </div>
          <div>
            <img
              src="https://negmar.com/wp-content/uploads/elementor/thumbs/hamidiye-1-q5ar9htu0wg8me15doec4pfe24jtzyum1c80itkrzs.jpg"
              alt="Flex1"
              className="rounded-lg h-[200px]"
            />
            <p className="font-bold text-center mt-4">Passenger Ferries</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
