import React from "react";

const services = () => {
  return (
    <section
      id="services"
      className="bg-gray-100 w-full lg:h-full py-12 md:pt-24 md:pb-32"
    >
      <div className="max-w-[1400px] m-auto px-6 w-full">
        <p className="text-3xl text-center tracking-widest uppercase my-5 pt-8 md:pt-2 font-bold">Services</p>
        <div className="w-full h-auto shadow-gray-400"></div>
        {/* overall box */}
        <div className="flex flex-col md:flex-row justify-center text-center pt-10 mb-10 ">
          {/* box1 */}
          <div className="md:w-[90%] lg:w-[33%]">
            <h1 className="text-2xl uppercase tracking-wide text-[#3482ad]">PRE-CONSTRUCTION</h1>
            <div className="m-10">
            During our initial conversation, we will schedule a time to visit the site to create your free quote. This phase includes constant interaction to ensure the total scope of your desired project is clear. We keep an eye on budgets to ensure the lowest costs, while maintaining the quality that is expected of Jim's Construction.  
            </div>
          </div>
          {/* box2 */}
          <div className="md:w-[90%] lg:w-[33%] md:border-x md:border-black/25">
            <h1 className="text-2xl uppercase tracking-wide text-[#3482ad]">
            CONSTRUCTION
            </h1>
            <div className="m-10">
            When the quote is delivered, we will provide our earliest start date. Upon receipt of the deposit, your start date is secured. From the first date of construction until the final walkthrough, we are available for communication on progress and other general questions that may arise.
            </div>
          </div>
          {/* box3 */}
          <div className="md:w-[90%] lg:w-[33%]">
            <h1 className="text-2xl uppercase tracking-wide text-[#3482ad]">POST-CONSTRUCTION</h1>
            <div className="m-10">
            The last step in any build. This phase includes site cleanup and our final inspections.n. After completion, we have a final walkthrough to ensure your complete satisfaction. 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
