const heroData = {
  stats: {
    number: "50+",
    label: "YEARS OF EXPERIENCE",
  },
  image: "/images/waste-management-workers.jpg",
  content: {
    badge: "WHO WE ARE",
    title: "JSO, the Future of Waste Management!",
    subtitle:
      " Sustainable Waste Management Solutions for Homes, Businesses & Communities, Enhanced with Innovation..",
    description: `As a proudly Ghanaian-owned enterprise established in 1972, JSO Waste and Renewables has evolved from a family business into a forward-thinking leader in sustainable waste solutions. For over 50 years, we've specialized in delivering comprehensive waste management services that serve homes, businesses, and communities across Ghana. Our services encompass the entire waste management process, starting from collection, through haulage, transfer, sorting, recycling, and disposal.
We combine decades of trusted experience with innovative approaches to meet the challenges of modern waste management. With a particular focus on serving the informal sector—which handles 60-70% of Ghana's waste collection—we're working to integrate these essential workers into formal systems, providing them with proper equipment, training, and recognition.`,
    highlight: "",
    closingText: "we take immense pride in our commitment to excellence.",
    buttonText: "MORE ABOUT US",
    buttonLink: "/about",
  },
};

function AboutSection() {
  return (
    <section className="bg-gray-50 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image with Stats */}
          <div className="relative">
            {/* Stats Badge */}
            <div className="absolute top-0 left-0 bg-white rounded-lg shadow-xl p-6 z-10">
              <div className="text-5xl font-bold text-green-700 mb-1">
                {heroData.stats.number}
              </div>
              <div className="text-sm font-semibold text-gray-700 uppercase">
                {heroData.stats.label}
              </div>
            </div>

            {/* Main Image */}
            <div className="mt-20 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={heroData.image}
                alt="LAC Global Services"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div>
            {/* Badge */}
            <div className="inline-block mb-4">
              <span className="text-sm font-bold text-green-600 uppercase tracking-wider">
                {heroData.content.badge}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6 leading-tight">
              {heroData.content.title}
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              {heroData.content.subtitle}
            </h2>

            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-8">
              {heroData.content.description}{" "}
              <span className="font-bold text-gray-900">
                {heroData.content.highlight}
              </span>
              {heroData.content.closingText}
            </p>

            {/* CTA Button */}
            <a
              href={heroData.content.buttonLink}
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full transition-colors shadow-lg"
            >
              <span className="inline-flex items-center justify-center w-6 h-6 bg-white rounded-full">
                <span className="text-green-700 text-sm">i</span>
              </span>
              {heroData.content.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
