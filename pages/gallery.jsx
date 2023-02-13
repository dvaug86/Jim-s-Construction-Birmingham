import Image from "next/image";
import React, { useState } from "react";
import { SliderData } from "../components/SliderData";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Slider from "@/components/Slider";

const gallery = () => {
  return (
    <div
      id="gallery"
      className="bg-gray-100 w-full lg:h-full py-12 md:pt-24 md:pb-32"
    >
      <div className="max-w-[1400px] m-auto px-6 w-full">
        <div className="w-full h-auto shadow-gray-400">

            <Slider className=" w-auto" slides={SliderData} />
        </div>

      </div>
    </div>
  );
};

export default gallery;
