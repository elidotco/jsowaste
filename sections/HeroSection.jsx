import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { Roboto_Condensed } from "next/font/google";
import React from "react";

const roboto = Roboto_Condensed({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const HeroSection = () => {
  return (
    <section className={"w-full h-screen py-10 px-5 " + roboto.className}>
      <div className="w-full h-full rounded-4xl text-center px-10 xl:px-48  relative xl:rounded-[64px] bg-green-950 flex items-center flex-col gap-y-10  py-28 xl:pt-44 text-white">
        <div className="ellipse-1 absolute top-[169px] left-[365px] blur-[130px]"></div>
        <div className="ellipse-2 border left-2/5 md:left-auto  absolute bottom-[214px] lg:right-[284px] blur-[130px]"></div>
        {/* Content */}
        <h1 className="lg:text-[3.5vw] text-[7vw] font-bold ">
          Where Waste Becomes Resource, Where Sustainability Becomes Standard
        </h1>
        <p className="xl:w-1/2">
          {" "}
          JSO Waste and Renewables is at the forefront of Ghana's waste
          management transformation—pioneering recycling infrastructure,
          supporting waste collectors, and turning environmental challenges into
          opportunities for communities and businesses.
        </p>

        <a
          href="/contact"
          className="bg-green-100 text-black px-5 py-3 rounded-full hover:bg-green-800 hover:text-white transition "
        >
          Learn More <ArrowRightIcon className="h-5 w-5 inline-block ml-2" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
