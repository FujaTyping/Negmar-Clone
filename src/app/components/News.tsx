import React from "react";
import { CalendarDays } from "lucide-react";

function News() {
  return (
    <>
      <div className="mb-24">
        <h1 className="text-center font-bold text-3xl md:text-5xl mb-3 md:mb-8">News</h1>
        <div className="flex flex-col p-5 md:p-0 md:flex-row items-stretch justify-center mx-auto w-full gap-3 md:gap-2">
          {[
            {
              img: "https://negmar.com/wp-content/uploads/2023/03/haber.jpeg",
              title:
                "Negmar Shipping Chairman of the Board Mehmet Koç: Turkey is becoming a huge distribution center in world LPG trade",
              date: "28 April 2023",
              description: "Negmar Shipping Chairman of the …",
            },
            {
              img: "https://negmar.com/wp-content/uploads/2023/03/halka-arz.jpg",
              title: "Narlı Ferry goes public!",
              date: "28 April 2023",
              description: "Narlı Ferry goes public!",
            },
          ].map((news, index) => (
            <div
              key={index}
              className="max-w-sm group cursor-pointer flex flex-col h-full"
            >
              <div className="overflow-hidden rounded-t-lg">
                <img
                  src={news.img}
                  alt={`News${index + 1}`}
                  className="group-hover:scale-125 transition-all h-[250px] duration-500 w-full object-cover"
                />
              </div>
              <div className="bg-gray-200 p-6 py-8 flex-grow h-[230px] flex flex-col rounded-b-lg">
                <h1 className="font-bold text-blue-600 text-[18px]">
                  {news.title}
                </h1>
                <div className="flex text-sm items-center gap-2 mt-1 text-gray-500">
                  <CalendarDays size={10} />
                  <p>{news.date}</p>
                </div>
                <p className="mt-4">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default News;
