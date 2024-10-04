import React from "react";
// Import images
import Imag1 from "../../assets/blog-1.jpg";
import Imag2 from "../../assets/blog-2.jpg";
import Imag3 from "../../assets/blog-3.jpg";

// Dummy blog data
const BlogData = [
  {
    title: "How to Choose the Perfect Smart Watch",
    subtitle: "Minime faces deserunt vero illo",
    description:
      "Smartwatches have become a staple in everyday tech. In this blog, we explore how to choose the perfect smartwatch that fits your lifestyle, with tips on features like battery life, display quality, and health tracking. Learn how to make an informed decision before your next tech purchase.",
    published: "Jan 20 2024 by Dilshad",
    imag: Imag1,
  },
  {
    title: "Top 5 Fitness Trackers for 2024",
    subtitle: "Labore atque velit alias recusandae",
    description:
      "Fitness trackers are evolving with better features like heart rate monitoring, GPS tracking, and sleep analysis. This blog reviews the top 5 fitness trackers of 2024, with detailed comparisons and buyer tips included.",
    published: "Feb 15 2024 by Alex",
    imag: Imag2,
  },
  {
    title: "The Future of Wearable Technology",
    subtitle: "Officiis ipsam nihil eveniet dolorum",
    description:
      "Wearable technology is transforming rapidly, with innovations in augmented reality, AI-driven health insights, and seamless integrations with smartphones. Explore potential breakthroughs and the impact on our daily lives.",
    published: "Mar 10 2024 by Sarah",
    imag: Imag3,
  },
];

// Heading Component
const Heading = ({ title, subtitle }) => {
  return (
    <div className="text-center max-w-[600px] mx-auto space-y-2 mb-10">
      <h1 className="text-3xl font-bold lg:text-4xl">{title}</h1>
      <p className="text-gray-400">{subtitle}</p>
    </div>
  );
};

// Blog component
const Blog = () => {
  return (
    <div>
      <div className="container mx-auto p-6">
        {/* Header section */}
        <Heading title="Recent News" subtitle="Explore our Blogs" />

        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Blog Cards */}
          {BlogData.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Image section */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={blog.imag}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Content section */}
              <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <h4 className="text-sm text-gray-500">{blog.subtitle}</h4>
                <p className="text-sm text-gray-700">{blog.description}</p>
                <small className="text-xs text-gray-400">
                  {blog.published}
                </small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
