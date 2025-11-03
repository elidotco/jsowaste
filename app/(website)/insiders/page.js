const inJsoWasteData = {
  hero: {
    title: "IN JSO WASTE",
    subtitle: "Official announcements, press releases, and company updates",
  },
  pressReleases: [
    {
      id: 1,
      type: "Press Release",
      date: "October 20, 2025",
      title:
        "JSO Waste Announces Strategic Partnership with Accra Metropolitan Assembly",
      location: "Accra, Ghana",
      content:
        "JSO Waste, a leading waste management company, today announced a comprehensive partnership agreement with the Accra Metropolitan Assembly (AMA) to enhance waste collection and recycling services across the metropolitan area. The five-year partnership will introduce digital waste management solutions serving over 200,000 households. \n\nThe agreement includes the deployment of smart collection vehicles, mobile app-based scheduling, and expanded recycling facilities. This partnership represents a significant step forward in Ghana's sustainable development goals and circular economy initiatives.",
      contact: {
        name: "Sarah Mensah",
        title: "Communications Director",
        email: "press@jsowaste.com",
        phone: "+233 XX XXX XXXX",
      },
    },
    {
      id: 2,
      type: "Company Announcement",
      date: "October 15, 2025",
      title:
        "JSO Waste Achieves ISO 14001 Environmental Management Certification",
      location: "Accra, Ghana",
      content:
        "JSO Waste is pleased to announce the achievement of ISO 14001:2015 certification for environmental management systems. This internationally recognized certification validates our commitment to environmental responsibility and sustainable waste management practices. \n\nThe certification process involved comprehensive audits of our operations, environmental policies, and waste processing procedures. This milestone reinforces our dedication to maintaining the highest standards in environmental stewardship.",
      contact: {
        name: "Sarah Mensah",
        title: "Communications Director",
        email: "press@jsowaste.com",
        phone: "+233 XX XXX XXXX",
      },
    },
    {
      id: 3,
      type: "Press Release",
      date: "October 5, 2025",
      title: "New Recycling Facility Opens in Tema Industrial Area",
      location: "Tema, Ghana",
      content:
        "JSO Waste inaugurated a state-of-the-art recycling facility in the Tema Industrial Area, marking a significant expansion of our recycling capabilities. The facility, which represents a $2 million investment, is equipped with advanced sorting technology capable of processing 500 tons of recyclable materials monthly. \n\nThe facility will create 75 new jobs and is expected to increase the region's plastic recycling capacity by 40%. Operations commence November 1, 2025.",
      contact: {
        name: "Sarah Mensah",
        title: "Communications Director",
        email: "press@jsowaste.com",
        phone: "+233 XX XXX XXXX",
      },
    },
    {
      id: 4,
      type: "Corporate Statement",
      date: "September 28, 2025",
      title: "JSO Waste Response to National Waste Management Policy",
      location: "Accra, Ghana",
      content:
        "In response to the recently announced National Waste Management Policy, JSO Waste affirms its full support and commitment to the government's sustainability objectives. Our operations align with the policy's core principles of waste reduction, recycling promotion, and environmental protection. \n\nJSO Waste will continue to invest in technology and infrastructure that supports these national objectives. We welcome the opportunity to collaborate with government agencies and stakeholders to achieve these important goals.",
      contact: {
        name: "Sarah Mensah",
        title: "Communications Director",
        email: "press@jsowaste.com",
        phone: "+233 XX XXX XXXX",
      },
    },
    {
      id: 5,
      type: "Press Release",
      date: "September 20, 2025",
      title:
        "JSO Waste Launches Educational Initiative in Partnership with Ghana Education Service",
      location: "Accra, Ghana",
      content:
        "JSO Waste and the Ghana Education Service (GES) have launched a comprehensive waste management education program targeting 50 schools across Greater Accra. The initiative will reach approximately 10,000 students through classroom education, practical workshops, and school recycling programs. \n\nThe program includes teacher training, educational materials, and the installation of recycling stations in participating schools. This initiative reflects our commitment to environmental education and building a culture of sustainability among Ghana's youth.",
      contact: {
        name: "Sarah Mensah",
        title: "Communications Director",
        email: "press@jsowaste.com",
        phone: "+233 XX XXX XXXX",
      },
    },
    {
      id: 6,
      type: "Company Announcement",
      date: "September 10, 2025",
      title: "JSO Waste Quarterly Operations Report - Q3 2025",
      location: "Accra, Ghana",
      content:
        "JSO Waste reports strong operational performance for Q3 2025. Key highlights include: 7,500 tons of waste collected and processed, 2,200 tons of materials recycled, expansion to three new service areas, and 98% customer satisfaction rating. \n\nThe company continues to invest in fleet modernization and technology infrastructure to enhance service delivery and operational efficiency.",
      contact: {
        name: "Sarah Mensah",
        title: "Communications Director",
        email: "press@jsowaste.com",
        phone: "+233 XX XXX XXXX",
      },
    },
  ],
  mediaKit: {
    title: "Media Resources",
    description: "Download our press kit, logos, and company information",
    items: [
      {
        name: "Company Fact Sheet",
        type: "PDF",
        size: "2.4 MB",
      },
      {
        name: "Executive Bios",
        type: "PDF",
        size: "1.8 MB",
      },
      {
        name: "Logo Package",
        type: "ZIP",
        size: "5.2 MB",
      },
      {
        name: "Brand Guidelines",
        type: "PDF",
        size: "3.1 MB",
      },
    ],
  },
};

function InJsoWastePage() {
  return (
    <div className="bg-white pt-56">
      {/* Header */}
      <header className="border-b-2 border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-3">
            {inJsoWasteData.hero.title} <br />
            <p className="text-sm">these are placeholders</p>
          </h1>
          <p className="text-lg text-gray-600">
            {inJsoWasteData.hero.subtitle}
          </p>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Press Releases */}
        <section className="mb-16">
          <div className="space-y-12">
            {inJsoWasteData.pressReleases.map((release, index) => (
              <article
                key={release.id}
                className="border-b border-gray-200 pb-12 last:border-0"
              >
                {/* Meta Information */}
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 font-semibold rounded">
                    {release.type}
                  </span>
                  <span className="text-gray-500">{release.date}</span>
                  <span className="text-gray-500">•</span>
                  <span className="text-gray-500">{release.location}</span>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {release.title}
                </h2>

                {/* Content */}
                <div className="prose max-w-none mb-6">
                  {release.content.split("\n\n").map((paragraph, idx) => (
                    <p key={idx} className="text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Contact Information */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h3 className="text-sm font-semibold text-gray-900 mb-3">
                    Media Contact
                  </h3>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-medium text-gray-900">
                      {release.contact.name}
                    </p>
                    <p>{release.contact.title}</p>
                    <p>
                      <a
                        href={`mailto:${release.contact.email}`}
                        className="text-green-600 hover:text-green-700"
                      >
                        {release.contact.email}
                      </a>
                    </p>
                    <p>{release.contact.phone}</p>
                  </div>
                </div>

                {/* Share Options */}
                <div className="mt-6 flex items-center gap-4">
                  <span className="text-sm text-gray-500">Share:</span>
                  <button className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                    Email
                  </button>
                  <button className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                    LinkedIn
                  </button>
                  <button className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                    Twitter
                  </button>
                  <button className="text-sm text-gray-600 hover:text-green-600 transition-colors">
                    Download PDF
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Media Kit Section */}
        <section className="bg-gray-50 rounded-2xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            {inJsoWasteData.mediaKit.title}
          </h2>
          <p className="text-gray-600 mb-6">
            {inJsoWasteData.mediaKit.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {inJsoWasteData.mediaKit.items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-200 hover:border-green-600 hover:shadow-md transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-600 group-hover:bg-green-100 group-hover:text-green-600 transition-colors">
                    📄
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {item.type} • {item.size}
                    </div>
                  </div>
                </div>
                <span className="text-green-600 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* Press Inquiries */}
        <section className="border-t-2 border-gray-200 pt-12">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Press Inquiries
            </h2>
            <p className="text-gray-600 mb-6">
              For media inquiries, interview requests, or additional
              information, please contact our communications team.
            </p>
            <a
              href="mailto:press@jsowaste.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
            >
              Contact Press Office
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default InJsoWastePage;
