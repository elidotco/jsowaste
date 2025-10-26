const aboutData = {
  whoWeAre: {
    title: "WHO WE ARE?",
    description:
      "Since 1972, JSO has been a trusted name in waste management, evolving from a family business to a forward-thinking leader in sustainable waste solutions. We combine decades of experience with innovative approaches to meet the challenges of modern waste management.",
  },
  vision: {
    title: "Our Vision",
    description: `To position ourselves at the forefront of effective waste management by pioneering innovative solutions that transform waste into opportunity, protect our environment for future generations, and create lasting value for our communities.

We envision a world where waste is no longer seen as a problem but as a resource—where sustainable practices are the standard, not the exception. Through cutting-edge technology, strategic partnerships, and unwavering commitment to environmental stewardship, we will lead the industry in creating circular economy solutions that benefit both people and planet

Our vision is to be recognized globally as the trusted leader in waste management excellence, setting new benchmarks for efficiency, sustainability, and social responsibility while inspiring others to join us in building a cleaner, greener future.`,
    image: "/street.jpg",
  },
  mission: {
    title: "Our Mission",
    description: `We are committed to positioning ourselves at the forefront of effective waste management in Ghana. Through education and action, we're raising awareness about the importance of waste segregation—separating organic and inorganic materials to maximize recycling and minimize environmental impact.`,
    image: "/background.jpg",
  },
  wasteManagement: {
    title: "Revolutionizing Waste Management | Catalyzing Sustainable Growth",
    paragraphs: [
      `JSO Waste and Renewables is transforming Ghana's waste sector through innovative collection, sorting, and recycling solutions that combine 50+ years of expertise with modern technology. By tackling critical waste management challenges head-on, we reduce environmental pollution, promote resource conservation through waste segregation, and create economic opportunities within the circular economy.
`,
      `Our comprehensive approach supports the informal sector—which handles 60-70% of Ghana's waste collection—while working closely with communities, businesses, and government partners to develop sustainable solutions. Through education, action, and strategic collaboration, we're catalyzing economic growth, ensuring environmental responsibility, and positioning Ghana at the forefront of effective waste management that transforms challenges into opportunities for future generations.`,
    ],
    image: "/truck.jpg",
  },
};

function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 px-6 pt-56">
      <div className="max-w-7xl mx-auto">
        {/* Who We Are */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            {aboutData.whoWeAre.title}
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            {aboutData.whoWeAre.description}
          </p>
        </div>

        {/* Our Vision - Image Left, Text Right */}
        <div className="mb-12 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="h-80 lg:h-auto">
              <img
                src={aboutData.vision.image}
                alt="Our Vision"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="bg-gray-700 text-white p-8 lg:p-12 flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-6">
                {aboutData.vision.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {aboutData.vision.description}
              </p>
            </div>
          </div>
        </div>

        {/* Our Mission - Text Left, Image Right */}
        <div className="mb-16 rounded-3xl overflow-hidden shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="bg-gray-600 text-white p-8 lg:p-12 flex flex-col justify-center order-2 lg:order-1">
              <h3 className="text-3xl font-bold mb-6">
                {aboutData.mission.title}
              </h3>
              <p className="text-gray-200 leading-relaxed">
                {aboutData.mission.description}
              </p>
            </div>
            <div className="h-80 lg:h-auto order-1 lg:order-2">
              <img
                src={aboutData.mission.image}
                alt="Our Mission"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Waste Management Section with Decorative Arrows */}
        <div className="relative">
          {/* Decorative Left Arrows */}
          <div className="absolute left-0 top-0 bottom-0 w-32 hidden xl:flex flex-col justify-center gap-8">
            <div className="w-0 h-0 border-t-[60px] border-t-transparent border-r-[80px] border-r-green-300 border-b-[60px] border-b-transparent"></div>
            <div className="w-0 h-0 border-t-[60px] border-t-transparent border-r-[80px] border-r-green-300 border-b-[60px] border-b-transparent"></div>
            <div className="w-0 h-0 border-t-[60px] border-t-transparent border-r-[80px] border-r-green-300 border-b-[60px] border-b-transparent"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center xl:pl-36">
            {/* Text Content */}
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8 leading-tight">
                {aboutData.wasteManagement.title}
              </h2>

              {aboutData.wasteManagement.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-gray-600 leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={aboutData.wasteManagement.image}
                alt="GO WASTE Project"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
