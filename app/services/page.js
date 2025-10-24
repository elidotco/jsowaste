const servicesData = {
  hero: {
    title: "Unlocking Sustainable Growth, Shaping a Better Future",
    description:
      "Driven by innovation and a commitment to environmental stewardship, we deliver cutting-edge services that foster economic growth while preserving our planet's precious resources.",
    ctaText: "Contact Us",
    ctaLink: "/contact",
  },
  services: [
    {
      id: 1,
      title: "Domestic Waste Management",
      description: `
Since 1972, JSO has been building trust with communities across Ghana through reliable, door-to-door waste collection services for households and residential areas. We understand that effective waste management starts at home, which is why we combine convenient scheduled pickups with comprehensive education programs that teach residents the importance of waste segregation—separating organic and inorganic materials to maximize recycling potential and minimize environmental impact.
Our domestic waste management services go beyond simple collection. We work closely with communities to raise awareness about proper waste disposal practices, provide clearly marked bins for different waste types, and ensure that collected waste is processed responsibly. By making sustainable waste management accessible and straightforward for all households, we're helping to transform neighborhoods, reduce landfill burden, and create cleaner, healthier living environments across Ghana. Our commitment to education and action ensures that every family can participate in building a more sustainable future.`,
      image: "/domes.jpg",
      learnMoreLink: "/services/agribusiness-broker",
      imagePosition: "left",
    },
    {
      id: 2,
      title: "Industrial Waste Management",
      description: `JSO delivers specialized, customized waste solutions designed specifically for manufacturing facilities, construction sites, and commercial operations across Ghana. We understand that industrial waste streams are complex, often hazardous, and subject to strict regulatory requirements—which is why our services go far beyond basic waste removal to provide comprehensive management that ensures compliance, safety, and environmental responsibility.
Our industrial waste management services include detailed waste audits and characterization, hazardous material handling and transport according to international protocols, bulk waste removal with appropriate equipment and logistics, recycling and recovery programs tailored to specific industrial processes, and regulatory compliance consulting to meet Ghana's evolving environmental standards.
We work proactively with businesses to develop waste reduction strategies that minimize generation at the source, identify opportunities for material recovery and reuse, and implement best practices that reduce both environmental footprint and operating costs. From construction debris to manufacturing byproducts, chemical waste to electronic scrap, our team has the expertise and resources to handle diverse industrial waste streams safely and sustainably.
As Ghana's industrial sector grows and environmental regulations strengthen, partnering with JSO ensures your operations remain compliant while demonstrating corporate environmental responsibility. Our proven track record since 1972 and commitment to innovation mean you can focus on your core business while we manage your waste challenges with professionalism and care.`,
      image: "/indus.jpg",
      learnMoreLink: "/services/go-waste",
      imagePosition: "right",
    },
    {
      id: 3,
      title: " Landfill Management",
      description: `JSO brings decades of expertise to the design, operation, and monitoring of landfill facilities that meet international environmental standards while addressing Ghana's unique waste management challenges. Our comprehensive landfill management solutions protect groundwater resources through engineered liner systems, control methane emissions and odors through gas collection technologies, and maximize site longevity through strategic waste placement and compaction techniques.
We understand that responsible landfill management is critical for environmental protection and public health. Our team conducts regular monitoring of leachate levels, soil conditions, and air quality to ensure compliance with regulations while minimizing ecological impact. We balance the practical need for efficient waste disposal capacity with our commitment to environmental stewardship, implementing best practices that include proper site selection, drainage management, and progressive closure planning.
As Ghana generates over 3,000 tonnes of waste daily in Accra alone, professional landfill management has never been more important. We're transforming traditional dumping sites into properly managed facilities that protect communities and the environment for generations to come, while exploring innovative approaches like waste-to-energy integration and biogas recovery to extract value from disposed materials.`,
      image: "/fill.jpg",
      learnMoreLink: "/services/go-waste",
      imagePosition: "left",
    },
    {
      id: 4,
      title: "Recycling Services",
      description: `
JSO is pioneering Ghana's transition to a circular economy through comprehensive end-to-end recycling programs that recover valuable materials from plastics, metals, paper, and organic waste streams. With Ghana's recycling rate currently below 5%, we recognize the enormous opportunity—and urgent need—to build the infrastructure and systems that transform waste into resources rather than letting it clog drainage systems or accumulate in landfills.
Our recycling services partner with communities, businesses, and the informal sector to establish efficient collection networks, modern sorting facilities, and processing capabilities that create real economic value from materials others discard. We provide the education, equipment, and ongoing support needed to separate recyclables at the source, ensuring higher quality recovered materials and better market prices.
By working closely with Ghana's informal waste collectors—who handle 60-70% of waste collection nationwide—we're integrating these essential workers into formal recycling systems, providing them with training, proper equipment, and fair compensation. Our approach doesn't just reduce environmental impact; it creates jobs, generates income, and contributes to sustainable development. From plastic bottles to electronic components, we're proving that waste isn't garbage—it's an untapped resource waiting to fuel Ghana's green economy.`,
      image: "/resc.jpg",
      learnMoreLink: "/services/go-waste",
      imagePosition: "right",
    },
  ],
};

function ServicesPage() {
  return (
    <div className=" pt-56 bg-gray-50">
      {/* Hero Section */}
      <section className=" py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            {servicesData.hero.title}
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
            {servicesData.hero.description}
          </p>

          <a
            href={servicesData.hero.ctaLink}
            className="inline-flex items-center gap-2 px-8 py-4 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-full transition-colors"
          >
            {servicesData.hero.ctaText}
            <span>→</span>
          </a>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6">
        <hr className="border-gray-300" />
      </div>

      {/* Services List */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-20">
          {servicesData.services.map((service, index) => (
            <div key={service.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div
                  className={
                    service.imagePosition === "right" ? "lg:order-2" : ""
                  }
                >
                  <div className="rounded-2xl overflow-hidden shadow-xl h-96">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={
                    service.imagePosition === "right" ? "lg:order-1" : ""
                  }
                >
                  <div className="lg:pr-8">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 leading-relaxed mb-8">
                      {service.description}
                    </p>

                    <a
                      href={service.learnMoreLink}
                      className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-full transition-all"
                    >
                      Learn More
                      <span>→</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Divider between services */}
              {index < servicesData.services.length - 1 && (
                <div className="mt-20">
                  <hr className="border-gray-200" />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ServicesPage;
