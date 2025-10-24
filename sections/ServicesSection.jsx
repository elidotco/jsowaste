import React from "react";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="xl:w-[80%] w-[86%]  mx-auto min-h-screen py-10  "
    >
      <div className=" flex justify-center pb-16 items-center flex-col gap-y-6 ">
        <h2 className="text-center text-3xl font-bold">Our Services</h2>
        <p className=" md:w-1/2 xl:w-1/3 text-lg text-center">
          From waste collection and recycling infrastructure to consulting and
          community education, we provide integrated solutions that transform
          Ghana's waste challenges into opportunities for growth.
        </p>
      </div>
      <div className="flex flex-wrap justify-between gap-y-14">
        {" "}
        <div className="flex w-full md:w-[48%] lg:w-2/3 min-h-120 rounded-4xl bg-amber-200 bg-center bg-cover bg-[url(/landfill.jpg)] relative flex-col justify-end  text-red-600 items-center">
          <div className="opacity-50 bg-black absolute w-full h-full rounded-4xl" />
          <div className="z-10 p-5 w-[90%]  mb-10 text-white backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl ">
            <h3 className="text-2xl font-bold mb-4">Landfill Management</h3>
            <p className="font-light">
              {" "}
              Professional landfill operations and maintenance that meet
              international standards, minimize environmental hazards, and
              transform waste disposal sites into managed, sustainable
              facilities.
            </p>

            {/* Button */}
            <a
              href="/contact"
              className="mt-4 bg-green-100 text-black px-5 py-3 rounded-full hover:bg-green-800 hover:text-white transition inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex w-full md:w-[48%] lg:w-[30%] min-h-120 rounded-4xl bg-amber-200 bg-center bg-cover bg-[url(/waste.jpg)] relative flex-col justify-end  items-center">
          <div className="opacity-50 bg-black absolute w-full h-full rounded-4xl" />
          <div className="z-10 p-5 w-[90%]  mb-10 text-white backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl ">
            <h3 className="text-2xl font-bold mb-4">
              {" "}
              Domestic Waste Management
            </h3>
            <p className="font-light">
              {" "}
              Comprehensive household waste collection and management services
              that promote proper segregation, reduce environmental impact, and
              keep communities clean and healthy across Ghana.
            </p>

            {/* Button */}
            <a
              href="/contact"
              className="mt-4 bg-green-100 text-black px-5 py-3 rounded-full hover:bg-green-800 hover:text-white transition inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex w-full md:w-[48%] lg:w-[30%] min-h-120 rounded-4xl bg-amber-200 bg-center bg-cover bg-[url(/industry.jpg)] relative flex-col justify-end  items-center">
          <div className="opacity-50 bg-black absolute w-full h-full rounded-4xl" />
          <div className="z-10 p-5 w-[90%]  mb-10 text-white backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl ">
            <h3 className="text-2xl font-bold mb-4">
              {" "}
              Industrial Waste Management
            </h3>
            <p className="font-light">
              {" "}
              Specialized solutions for businesses and industries, ensuring safe
              handling, compliant disposal, and sustainable management of
              commercial and industrial waste streams.
            </p>

            {/* Button */}
            <a
              href="/contact"
              className="mt-4 bg-green-100 text-black px-5 py-3 rounded-full hover:bg-green-800 hover:text-white transition inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="flex w-full md:w-[48%] lg:w-2/3 min-h-120 rounded-4xl bg-amber-200 bg-center bg-cover bg-[url(/rec.jpg)] relative flex-col justify-end  text-red-600 items-center">
          <div className="opacity-50 bg-black absolute w-full h-full rounded-4xl" />
          <div className="z-10 p-5 w-[90%]  mb-10 text-white backdrop-blur-lg bg-white/10 border border-white/20 rounded-xl shadow-xl ">
            <h3 className="text-2xl font-bold mb-4">Recycling Services</h3>
            <p className="font-light">
              {" "}
              Building Ghana's circular economy through efficient collection,
              sorting, and processing of recyclable materials, turning waste
              into valuable resources while reducing landfill dependency.
            </p>

            {/* Button */}
            <a
              href="/contact"
              className="mt-4 bg-green-100 text-black px-5 py-3 rounded-full hover:bg-green-800 hover:text-white transition inline-block"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
