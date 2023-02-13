import React from "react";

const About = () => {
  return (
    <div id="about" className="flex tracking-widest bg-gray-100  ">
      <div className="mx-[60px]">
        <h1 className="text-center text-5xl uppercase pt-[56px]">about us</h1>

        {/* overall box */}
        <div className="flex flex-col md:flex-row justify-center text-center pt-10 mb-10 ">
          {/* box1 */}
          <div className="sm:w-[70%] md:w-[33%]">
            <h1 className="text-2xl uppercase tracking-wide">What We Do</h1>
            <div className="m-10">
              Our specialties include decks/porches, painting (indoor and
              outdoor), and all inside-the-home renovations (flooring, tile,
              trim, and more). Our projects include both new construction and
              repairs/restorations. Occupied job sites are never a problem--we
              will work around your schedule. We can also plan, manage, and
              build multi-phase projects.
            </div>
          </div>
          {/* box2 */}
          <div className="sm:w-[70%] md:w-[33%]">
            <h1 className="text-2xl uppercase tracking-wide">
              Working Together
            </h1>
            <div className="m-10">
              We offer an end-to-end client experience that includes seamless
              communication, budgeting, staffing, on-site organization, and
              solid, quality handiwork every time.
            </div>
          </div>
          {/* box3 */}
          <div className="sm:w-[70%] md:w-[33%]">
            <h1 className="text-2xl uppercase tracking-wide">Why Choose us</h1>
            <div className="m-10">
              We are a local small business, committed to maintaining our
              reputation of dedication to our clients' vision. Call us today and
              bring our project management skills and extensive construction
              experience to your next project.
            </div>
          </div>
        </div>
        {/* form */}
        <div className=" mb-4 text-center">
          <form className="flex  flex-row justify-center space-y-2 ">
            <label className=" flex pt-4 text-[#3482Ad] font-extrabold tracking-widest text-xl  uppercase">subscribe</label>
            <input className=" border border-black px-2 mx-5 w-[50%]" type="email" placeholder="Email Address" />
            <button
              className="text-center bg-[#3482Ad] hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 
                uppercase border-r-4 border-gray-500 hover:border-blue-500"
              type="submit"
            >
              sign up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
