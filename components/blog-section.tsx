import Image from "next/image"
import Link from "next/link"
import "../styles/all.css"
import CallToAction from "../components/call-to-action";

export default function BlogSection() {
  const blogPosts = [
    {
      image: "/img/blog/1.jpg",
      date: "08 jun",
      title: 'Researchers Build Framework To Avoid Machine Learning\'s "Undesirable Outcomes"',
      excerpt:
        "Researchers at Stanford and the University of Massachusetts Amherst have introduced a framework for designing machine learning (ML) algorithms that make it easier for potential users to specify safety and fairness constraints. Details of the framework were recently published in Science (DOI: 10.1126/science.aag3311).",
      author: "By Benjamin Ross, Senior Editor, AI Trends",
      link: "https://www.aitrends.com/ai-research/researchers-build-framework-to-avoid-machine-learnings-undesirable-outcomes/",
    },
    {
      image: "/img/blog/3.png",
      date: "09 aug",
      title: "Top 10 Factors to Consider Before Developing a Business Mobile App",
      excerpt:
        "Mobile Applications have become a need of the hour for every small- and large-scale business to increase their productivity and brand awareness throughout the world. Mobile applications play an important role in helping different business sectors to reach the heights of success and achieve their goals.",
      author: "Krunal Vyas",
      link: "https://www.indiaappdeveloper.com/blog/top-10-factors-to-consider-before-developing-a-business-mobile-app/",
    },
    {
      image: "/img/blog/2.png",
      date: "12 jul",
      title: "Mobile Website vs. Mobile Application – Which is Best?",
      excerpt:
        'It has been observed that about half of the web traffic worldwide comes from the mobile devices. Many organizations are transforming themselves towards being digital to accelerate the growth of their business. But the question that arises almost in everyone\'s mind is "What is better? mobile app or website", to serve the people across the globe with highly effective solutions.',
      author: "Krunal Vyas",
      link: "https://www.indiaappdeveloper.com/blog/mobile-website-vs-mobile-application-which-is-best/",
    },
  ]

  return (
    <section>
      <div className="home-blog-area">
        <div className="container">
          <div className="row">
            {/* blog heading text */}
            <div className="col-xl-12">
              <div className="section-heading-3">
                <h4>Our Blogs</h4>
                <h3>Latest Blogs</h3>
              </div>
            </div>
          </div>
          <div className="row">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className={`col-xl-4 col-lg-4 col-md-4 col-sm-6 ${index > 0 ? "margin-top-sb-30" : ""} ${index === 2 ? "margin-top-lb-30" : ""}`}
              >
                <div className="home-single-blog">
                  <div className="s-blog-image">
                    <Image src={post.image || "/placeholder.svg"} alt="" width={400} height={250} />
                    <div className="blog-post-date">
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <div className="s-blog-content">
                    <h4>{post.title}</h4>
                    <p>{post.excerpt}</p>
                    <Link href={post.link} target="_blank">
                      {post.author}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    </section>

  )
}
