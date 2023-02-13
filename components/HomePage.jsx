import React from "react";
import Link from "next/link";
const HomePage = () => {
  return (
    <section
      id="home"
      className="h-screen bg-fixed bg-center bg-cover custom-img flex justify-end items-end w-full lg:h-full py-12 md:pt-24 md:pb-32  "
    >
      <div className=" mx-5 border rounded-full border-b-4 border-gray-500 h-[250px] w-[250px] bg-gray-100">
        <div className="flex-col align-middle m-9 top-0 left-0 right-0 bottom-0 h-[175px] w-[175px] z-10">
          <div className=" flex uppercase text-center font-bold text-2xl text-[#3482Ad]">
            building trust with quality work
          </div>
          <div className="flex justify-center">
            <button
              className="flex   text-center bg-[#3482Ad] hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 
          uppercase border-r-4 border-gray-500 hover:border-blue-500"
            >
              <Link href="/gallery">recent work</Link>
            </button>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default HomePage;
