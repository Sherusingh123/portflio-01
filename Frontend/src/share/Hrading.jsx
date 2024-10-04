import React from "react";
// import images
import Imag1 from "../../assets/blog-1.jpg";
import Imag2 from "../../assets/blog-2.jpg";
import Imag3 from "../../assets/blog-3.jpg";

// Dummy blog data
const BlogData = [
  {
    Title: "How to Close the Perfect Smart Watch",
    subtitle: "Minime faces deserunt vero illo",
    description:
      "Smartwatches have become a staple in everyday tech. In this blog, we explore how to choose the perfect smartwatch that fits your lifestyle, with tips on features like battery life, display quality, and health tracking. Learn how to make an informed decision before your next tech purchase.",
    published: "Jan 20 2024 by Dilshad",
    Imag: Imag1,
  },
  {
    Title: "Top 5 Fitness Trackers for 2024",
    subtitle: "Labore atque velit alias recusandae",
    description:
      "Fitness trackers are evolving with better features like heart rate monitoring, GPS tracking, and sleep analysis. This blog reviews the top 5 fitness trackers of 2024, with detailed comparisons and buyer tips included.",
    published: "Feb 15 2024 by Alex",
    Imag: Imag2,
  },
  {
    Title: "The Future of Wearable Technology",
    subtitle: "Officiis ipsam nihil eveniet dolorum",
    description:
      "Wearable technology is transforming rapidly, with innovations in augmented reality, AI-driven health insights, and seamless integrations with smartphones. Explore potential breakthroughs and the impact on our daily lives.",
    published: "Mar 10 2024 by Sarah",
    Imag: Imag3,
  },
];

// Blog component
const Blog = () => {
  return (
    <div>
      <div className="container">
        {/* Header section */}
        <Heading title="Recent news" subtitle={"Explore our Blogs"} />
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7">
          {/* Blog Cards */}
          {BlogData.map((data, index) => (
            <div key={index}>
              {/* Image section */}
              <div>
                <img src={data.Imag} alt={data.Title} />
              </div>
              {/* Content section */}
              <div>
                <h3>{data.Title}</h3>
                <h4>{data.subtitle}</h4>
                <p>{data.description}</p>
                <small>{data.published}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
