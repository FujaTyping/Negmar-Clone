import React from "react";

function NewsSwiper() {
  return (
    <div
      data-hs-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer"
      }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full min-h-[50vh] bg-white rounded-lg">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide flex-shrink-0 w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src="https://negmar.com/wp-content/uploads/2023/03/halka-arz-800x458.jpg"
              alt="News1"
            />
            <div className="absolute inset-0 flex items-end justify-start p-5">
              <h2 className="text-white text-lg font-bold">
                Narlı Ferry goes public!
              </h2>
            </div>
          </div>
          <div className="hs-carousel-slide flex-shrink-0 w-full h-full relative">
            <img
              className="w-full h-full object-cover"
              src="https://negmar.com/wp-content/uploads/2023/03/haber.jpeg"
              alt="News2"
            />
            <div className="absolute inset-0 flex items-end justify-start p-5">
              <h2 className="text-white text-lg font-bold">
                Negmar Shipping Chairman of the Board Mehmet Koç: Turkey is
                becoming a huge distribution center in world LPG trade
              </h2>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="hs-carousel-prev hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 left-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-none"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-5"
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
            <path d="m15 18-6-6 6-6"></path>
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel-disabled:opacity-50 hs-carousel-disabled:cursor-default absolute top-1/2 right-2 inline-flex justify-center items-center size-10 bg-white border border-gray-100 text-gray-800 rounded-full shadow-2xs hover:bg-gray-100 -translate-y-1/2 focus:outline-none"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="shrink-0 size-5"
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
        </span>
      </button>
    </div>
  );
}

export default NewsSwiper;
