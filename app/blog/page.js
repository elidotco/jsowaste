"use client";
import { useState } from "react";

const blogData = [
  {
    id: 1,
    image: "/path-to-burger-image.jpg",
    title:
      "The Impact of Fast Food Culture Worldwide: Challenges and Solutions",
    excerpt:
      "In recent decades, the rise of fast food culture has taken the world by storm, influencing dietary habits...",
    date: "07/06/2024",
  },
  {
    id: 2,
    image: "/path-to-delivery-image.jpg",
    title: "Fast Food deliveries still booming despite restaurant return.",
    excerpt:
      "People are still ordering millions of fast foods despite restaurants reopening across the country.",
    date: "07/06/2024",
  },
];

function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    // Add your search logic here
  };

  const filteredBlogs = blogData.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-gray-100 py-16 pt-56 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-5xl font-bold text-gray-900 mb-8">
          Our Blog & Articles
        </h2>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="mb-12">
          <div className="relative max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search blog"
              className="w-full px-6 py-4 pr-12 rounded-full border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-green-400 transition-colors"
            />
            <button
              type="submit"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </form>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* Blog Image */}
              <div className="h-64 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 hover:text-green-600 transition-colors">
                  {blog.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {blog.excerpt}
                </p>

                <time className="text-green-500 font-semibold text-sm">
                  {blog.date}
                </time>
              </div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No blog posts found matching your search.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Home;
