import { urlFor } from "@/libs";

const homepageData = {
  blogSection: {
    title: "OUR BLOGS & ARTICLES",
    description:
      "Insightful perspectives and thought-provoking content on sustainable practices, industry trends, and innovative solutions for a better tomorrow.",
    readMoreLink: "/blog",
    posts: [
      {
        id: 1,
        image: "/images/fast-food-burger.jpg",
        title:
          "The Impact of Fast Food Culture Worldwide: Challenges and Solutions",
        excerpt:
          "In recent decades, the rise of fast food culture has taken the world by storm, influencing dietary habits...",
        link: "/blog/fast-food-culture-impact",
      },
      {
        id: 2,
        image: "/images/food-delivery-workers.jpg",
        title: "Fast Food deliveries still booming despite restaurant return.",
        excerpt:
          "People are still ordering millions of fast foods despite restaurants reopening across the country.",
        link: "/blog/fast-food-deliveries-booming",
      },
    ],
  },
  ctaSection: {
    title:
      "Unlock Sustainable Growth, Empower Communities, Build a Better Tomorrow.",
    description:
      "Discover how JSO Waste and Renewables is pioneering sustainable solutions and driving positive change.",
    buttonText: "Contact Us",
    buttonLink: "/contact",
  },
};

function BlogSection({ data }) {
  return (
    <div className="bg-gray-50">
      {/* Blog Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
            <div className="mb-6 md:mb-0 md:max-w-2xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {homepageData.blogSection.title}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {homepageData.blogSection.description}
              </p>
            </div>

            <a
              href={homepageData.blogSection.readMoreLink}
              className="inline-flex items-center gap-2 px-6 py-3 border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white font-semibold rounded-full transition-all whitespace-nowrap"
            >
              Read More
              <span>→</span>
            </a>
          </div>

          {/* Blog Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((post) => (
              <article
                key={post._id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                {/* Blog Image */}
                <div className="h-64 overflow-hidden">
                  <img
                    src={urlFor(post.mainImage).url()}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Blog Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 mb-4">{post.excerpt}</p>

                  <a
                    href={post.link}
                    className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                  >
                    Learn more
                    <span>→</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="bg-green-400 rounded-3xl p-12 md:p-16">
            <div className="max-w-4xl">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {homepageData.ctaSection.title}
              </h2>

              <p className="text-xl text-gray-800 mb-8">
                {homepageData.ctaSection.description}
              </p>

              <a
                href={homepageData.ctaSection.buttonLink}
                className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-full transition-colors"
              >
                {homepageData.ctaSection.buttonText}
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogSection;
