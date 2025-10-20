import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Luminate',
  description: 'Stay updated with the latest news, insights, and updates from Luminate Institution.',
};

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, date, readTime, category, image, slug }: BlogCardProps) => (
  <div className="bg-white dark:bg-card rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-48 w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover"
      />
      <div className="absolute bottom-4 left-4 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
        {category}
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center text-sm text-foreground/60 mb-3">
        <span>{date}</span>
        <span className="mx-2">•</span>
        <span>{readTime} read</span>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-2">
        {title}
      </h3>
      <p className="text-foreground/80 mb-4 line-clamp-3">{excerpt}</p>
      <Link 
        href={`/blog/${slug}`}
        className="text-primary font-medium hover:underline inline-flex items-center"
      >
        Read More
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

const blogPosts = [
  {
    title: "Digital Marketing Trends to Watch in 2024",
    excerpt: "Discover the latest trends in digital marketing that are reshaping how businesses connect with their audiences.",
    date: "Oct 15, 2024",
    readTime: "6 min",
    category: "Marketing",
    image: "/assets/course/d&a.jpg",
    slug: "digital-marketing-trends-2024"
  },
  {
    title: "Essential Accounting Software for Small Businesses",
    excerpt: "A comprehensive guide to the best accounting tools that can streamline your financial management.",
    date: "Oct 5, 2024",
    readTime: "5 min",
    category: "Accounting",
    image: "/assets/course/account.jpg",
    slug: "accounting-software-guide"
  },
  {
    title: "Fashion Design: From Concept to Collection",
    excerpt: "Explore the creative process behind successful fashion design and how to develop your own unique style.",
    date: "Sep 28, 2024",
    readTime: "8 min",
    category: "Fashion",
    image: "/assets/course/fashion.jpeg",
    slug: "fashion-design-process"
  },
  {
    title: "Innovations in Garment Technology",
    excerpt: "How modern technology is revolutionizing the way we design and manufacture clothing.",
    date: "Sep 20, 2024",
    readTime: "6 min",
    category: "Garment Tech",
    image: "/assets/course/fas.jpg",
    slug: "garment-technology-innovations"
  },
  {
    title: "SEO Strategies for Digital Marketers",
    excerpt: "Proven SEO techniques to improve your website's visibility and drive organic traffic.",
    date: "Sep 15, 2024",
    readTime: "7 min",
    category: "Marketing",
    image: "/assets/course/graphic.webp",
    slug: "seo-strategies"
  },
  {
    title: "Mastering Social Media Advertising",
    excerpt: "Learn how to create effective social media ad campaigns that drive engagement and conversions.",
    date: "Oct 10, 2024",
    readTime: "7 min",
    category: "Advertising",
    image: "/assets/course/d&a.jpg",
    slug: "social-media-advertising"
  },
];

export default function BlogPage() {
  return (
    <div className="font-sans">
      {/* Page Title */}
      <div className="py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container-px mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-center text-foreground">
            Our <span className="text-primary">Blog</span>
          </h1>
          <p className="text-lg text-center text-foreground/90 max-w-2xl mx-auto mt-3 leading-relaxed">
            Explore the latest in <span className="font-medium text-foreground">Digital Marketing</span>, <span className="font-medium text-foreground">Fashion Design</span>, and <span className="font-medium text-foreground">Business</span>
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-primary to-blue-400 mx-auto mt-6 mb-2 rounded-full"></div>
        </div>
      </div>

      {/* Blog Posts */}
      <div className="py-12 md:py-16 bg-white dark:bg-background">
        <div className="container-px mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
