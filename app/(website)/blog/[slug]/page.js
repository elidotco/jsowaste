import { client } from "@/sanity/lib/client";
import { options } from "../../page";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";
import { urlFor } from "@/libs";

const blogPostData = {
  relatedPosts: {
    title: "OTHER BLOGS & ARTICLES",
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
        image: "/images/delivery-workers.jpg",
        title: "Sustainable Packaging Solutions in Food Delivery",
        excerpt:
          "Exploring eco-friendly alternatives to traditional food packaging in the delivery industry...",
        link: "/blog/sustainable-packaging",
      },
      {
        id: 3,
        image: "/images/restaurant-interior.jpg",
        title: "The Future of Ghost Kitchens",
        excerpt:
          "How delivery-only restaurants are reshaping the food service landscape...",
        link: "/blog/ghost-kitchens-future",
      },
    ],
  },
  currentPost: {
    date: "07/06/2024",
    title: "Fast Food deliveries still booming despite restaurant return.",
    subtitle:
      "People are still ordering millions of fast foods despite restaurants reopening across the country.",
    featuredImage: "/images/food-delivery-workers.jpg",
    author: {
      name: "Sarah Johnson",
      avatar: "/images/author-avatar.jpg",
      bio: "Food Industry Analyst",
    },
    readTime: "5 min read",
    category: "Industry Trends",
    content: [
      {
        type: "paragraph",
        text: "How the world eats is changing dramatically. A little under two decades ago, restaurant-quality meal delivery was still largely limited to foods such as pizza and Chinese. Nowadays, food delivery has become a global market worth more than $150 billion, having more than tripled since 2017. In the United States, the market has more than doubled during the COVID-19 pandemic, following healthy historical growth of 8 percent.",
      },
      {
        type: "paragraph",
        text: "Even as the food-delivery ecosystem continues to expand, its economic structure is still evolving. Considerations such as brand, real estate, operating efficiency, breadth of offerings, and changing consumer habits will determine which stakeholders win or lose as the industry develops. Potential regulatory constraints, including possible changes to how drivers are compensated, will figure into the reshuffling. And while the industry has experienced explosive growth during the global pandemic, delivery platforms, with few exceptions, have remained unprofitable.",
      },
      {
        type: "heading",
        text: "Driver compensation and benefits constitute another persistent hot-button issue.",
      },
      {
        type: "paragraph",
        text: "Delivery platforms rely on the gig economy, with its system of on-demand drivers offering much-needed flexibility. This model, however, is still in flux, amid an ongoing national (and international) debate about whether gig workers, particularly drivers, should be considered employees. Shifts in how independent contractors are paid, as well as what benefits they receive, could significantly shake up the economics for all major stakeholders across the marketplace.",
      },
      {
        type: "quote",
        text: "The food delivery industry has fundamentally changed how consumers interact with restaurants and food services.",
        author: "Dr. Michael Chen, Food Industry Expert",
      },
      {
        type: "paragraph",
        text: "Looking ahead, the industry faces both opportunities and challenges. Sustainability concerns, labor regulations, and technological innovations will shape the next phase of food delivery evolution. Companies that can balance profitability with ethical practices and environmental responsibility are likely to emerge as long-term winners in this competitive space.",
      },
    ],
    tags: [
      "Food Delivery",
      "Restaurant Industry",
      "COVID-19 Impact",
      "Gig Economy",
    ],
  },
};

// query single blog post data
const POST_QUERY = `*[
  _type == "post" && slug == $slug
][0]{title, slug, publishedAt, mainImage, content, excerpt  }`;

async function BlogPostPage({ params }) {
  // get slug from url
  const { slug } = await params;
  console.log("Slug:", slug);
  // fetch blog post data based on slug

  const post = await client.fetch(POST_QUERY, { slug });
  console.log("Fetched Post:", post);
  if (!post) {
    notFound();
  }

  return (
    <div className=" pt-56">
      {/* Main Article */}
      <article className="bg-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Article Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-center">
              <div className="text-green-600 font-bold mb-4"></div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed">
                {post.subtitle}
              </p>
            </div>

            {/* Right Side - Featured Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={urlFor(post.mainImage).url()}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Article Meta */}
          {/* <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="font-semibold text-gray-900">
                  {post.author.name}
                </div>
                <div className="text-sm text-gray-500">Jso Waste</div>
              </div>
            </div>
            <span className="text-gray-300">•</span>
            <span className="text-gray-600"></span>
            <span className="text-gray-300">•</span>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-full">
              {post.category}
            </span>
          </div> */}

          {/* Article Content */}
          <div className="max-w-4xl">
            {<PortableText value={post.content} />}
          </div>

          {/* Tags */}
          {/* <div className="flex flex-wrap gap-3 mt-12 pt-8 border-t border-gray-200">
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-full hover:bg-gray-200 transition-colors cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div> */}

          {/* Share Section */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Share this article
            </h3>
            <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors">
                Facebook
              </button>
              <button className="px-6 py-3 bg-sky-500 hover:bg-sky-600 text-white font-medium rounded-lg transition-colors">
                Twitter
              </button>
              <button className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors">
                LinkedIn
              </button>
              <button className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium rounded-lg transition-colors">
                Copy Link
              </button>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            {blogPostData.relatedPosts.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPostData.relatedPosts.posts.map((post) => (
              <a key={post.id} href={post.link} className="group">
                <article className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
                  {/* Image */}
                  <div className="h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-green-600 font-semibold">
                      Learn more
                      <span>→</span>
                    </span>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogPostPage;
