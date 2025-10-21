import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  slug: string;
  content: string;
}

// This would typically come from an API or database in a real app
const blogPosts: BlogPost[] = [
  {
    title: "Digital Marketing Trends to Watch in 2024",
    excerpt: "Discover the latest trends in digital marketing that are reshaping how businesses connect with their audiences.",
    content: `In 2024, digital marketing continues to evolve at a rapid pace. Here are the key trends you should be aware of:

## AI-Powered Personalization
Artificial Intelligence is enabling hyper-personalized experiences for users, from dynamic content to predictive analytics. Marketers are leveraging AI to analyze customer behavior and deliver tailored content that resonates with individual preferences.

## Voice Search Optimization
With the rise of smart speakers, optimizing for voice search has become crucial for businesses. As more consumers use voice assistants like Siri and Alexa, companies need to adapt their SEO strategies to include conversational, long-tail keywords and question-based queries.

## Video Marketing Dominance
Short-form video content continues to dominate social media platforms, especially on TikTok and Instagram Reels. Brands are investing in creative, engaging video content to capture audience attention in the first few seconds.

## Sustainability in Marketing
Consumers are increasingly favoring brands that demonstrate environmental responsibility in their marketing campaigns. Companies are highlighting their sustainability efforts and eco-friendly products to appeal to environmentally conscious consumers.`,
    date: "Oct 15, 2024",
    readTime: "6 min",
    category: "Marketing",
    image: "/assets/course/d&a.jpg",
    slug: "digital-marketing-trends-2024"
  },
  {
    title: "Essential Accounting Software for Small Businesses",
    excerpt: "A comprehensive guide to the best accounting tools that can streamline your financial management.",
    content: `Choosing the right accounting software is crucial for small businesses to maintain financial health and compliance. Here's a look at the top solutions available in 2024:

## QuickBooks Online
QuickBooks remains the industry leader with its comprehensive features including invoicing, expense tracking, and financial reporting. Its user-friendly interface makes it accessible for business owners without accounting backgrounds.

## Xero
Known for its beautiful interface and robust features, Xero offers excellent bank reconciliation tools and a wide range of integrations. It's particularly popular among growing businesses that need scalable solutions.

## FreshBooks
Ideal for service-based businesses, FreshBooks excels in time tracking and project management features. Its client portal makes it easy to share documents and collaborate with clients.

## Wave
A great free option for very small businesses, Wave offers essential accounting features without the monthly subscription. It's perfect for solopreneurs and micro-businesses on a tight budget.`,
    date: "Oct 5, 2024",
    readTime: "5 min",
    category: "Accounting",
    image: "/assets/course/account.jpg",
    slug: "accounting-software-guide"
  },
  {
    title: "Fashion Design: From Concept to Collection",
    excerpt: "Explore the creative process behind successful fashion design and how to develop your own unique style.",
    content: `The journey from a simple sketch to a complete fashion collection is both challenging and rewarding. Here's a breakdown of the key stages in the fashion design process:

## Research and Inspiration
Every great collection starts with thorough research. Designers draw inspiration from various sources including art, history, travel, and current trends. Mood boards are created to visualize the collection's theme and color palette.

## Sketching and Design Development
Initial sketches are transformed into technical drawings with detailed specifications. Designers consider fabric choices, patterns, and construction techniques during this phase.

## Pattern Making and Prototyping
Patterns are created based on the technical drawings. The first prototypes are made using inexpensive fabrics to test the design's fit and functionality.

## Collection Development
Individual pieces are refined and developed into a cohesive collection. Designers ensure that all pieces work together harmoniously while maintaining the collection's unique identity.

## Production and Presentation
Once the collection is finalized, it's produced in the desired fabrics and presented to buyers, press, and the public through fashion shows or lookbooks.`,
    date: "Sep 28, 2024",
    readTime: "8 min",
    category: "Fashion",
    image: "/assets/course/fashion.jpeg",
    slug: "fashion-design-process"
  },
  {
    title: "Innovations in Garment Technology",
    excerpt: "How modern technology is revolutionizing the way we design and manufacture clothing.",
    content: `The fashion industry is undergoing a technological revolution that's transforming how clothing is designed, produced, and worn. Here are the most exciting developments:

## 3D Printing in Fashion
3D printing is enabling designers to create intricate, customizable designs that were previously impossible. From haute couture to functional sportswear, this technology is opening new creative possibilities.

## Smart Fabrics and Wearables
Innovative textiles now incorporate technology that can monitor health metrics, adjust to temperature changes, or even change color. These smart fabrics are finding applications in both fashion and functional clothing.

## Sustainable Production Methods
New technologies are making sustainable fashion more accessible. Waterless dyeing techniques, digital pattern making, and zero-waste cutting methods are reducing the industry's environmental impact.

## Virtual and Augmented Reality
AR and VR are changing how consumers shop for clothes, allowing them to try on garments virtually. These technologies are also being used in the design process to visualize collections before production.`,
    date: "Sep 20, 2024",
    readTime: "6 min",
    category: "Garment Tech",
    image: "/assets/course/fas.jpg",
    slug: "garment-technology-innovations"
  },
  {
    title: "SEO Strategies for Digital Marketers",
    excerpt: "Proven SEO techniques to improve your website's visibility and drive organic traffic.",
    content: `In today's competitive digital landscape, effective SEO is more important than ever. Here are the key strategies that are working in 2024:

## Content Quality and E-E-A-T
Google's emphasis on Experience, Expertise, Authoritativeness, and Trustworthiness (E-E-A-T) means high-quality, authoritative content is essential. Focus on creating comprehensive, well-researched content that truly serves your audience's needs.

## Core Web Vitals and Page Experience
Site speed and user experience are now major ranking factors. Ensure your website loads quickly, is mobile-friendly, and provides a smooth browsing experience.

## Voice Search Optimization
With the growing popularity of voice assistants, optimizing for conversational queries is crucial. Focus on natural language and question-based content that matches how people speak.

## Video SEO
Video content continues to dominate search results. Optimize your videos with detailed descriptions, transcripts, and relevant keywords to improve visibility in both traditional and video search results.

## Local SEO
For businesses with physical locations, local SEO is essential. Ensure your Google Business Profile is complete and optimized, and build local citations to improve your visibility in local search results.`,
    date: "Sep 15, 2024",
    readTime: "7 min",
    category: "Marketing",
    image: "/assets/course/graphic.webp",
    slug: "seo-strategies"
  },
  {
    title: "Mastering Social Media Advertising",
    excerpt: "Learn how to create effective social media ad campaigns that drive engagement and conversions.",
    content: `Social media advertising has become an essential component of digital marketing strategies. Here's how to master it in 2024:

## Understanding Platform Algorithms
Each social media platform has its own algorithm that determines what content gets seen. Learn how to optimize your content for each platform's unique algorithm to maximize reach and engagement.

## Creating Compelling Ad Creatives
Your ad creative is the first thing users see. Learn the art of creating eye-catching visuals and copy that stops the scroll and encourages engagement. We'll cover best practices for different platforms and ad formats.

## Targeting the Right Audience
Precise targeting is key to successful social media advertising. Discover how to use advanced targeting options to reach your ideal customers based on demographics, interests, behaviors, and more.

## A/B Testing and Optimization
Continuous testing and optimization are crucial for improving ad performance. Learn how to set up effective A/B tests, analyze results, and make data-driven decisions to improve your campaigns.

## Measuring ROI and Performance
Understand the key metrics that matter and how to track them. We'll cover how to set up proper tracking, analyze campaign performance, and calculate your return on ad spend (ROAS).

## Emerging Trends in Social Advertising
Stay ahead of the curve with the latest trends in social media advertising, including influencer partnerships, interactive content, and the rise of social commerce.`,
    date: "Oct 10, 2024",
    readTime: "9 min",
    category: "Marketing",
    image: "/assets/course/d&a.jpg",
    slug: "social-media-advertising-mastery"
  }
];

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find(post => post.slug === params.slug);
  
  if (!post) {
    return {
      title: 'Post Not Found | Luminate Blog',
    };
  }

  return {
    title: `${post.title} | Luminate Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(post => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Link 
        href="/blog" 
        className="inline-flex items-center text-primary hover:underline mb-8"
      >
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>
      
      <article className="bg-white dark:bg-card rounded-xl shadow-md overflow-hidden">
        <div className="relative h-64 md:h-96 w-full">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-4 left-4 bg-primary text-white text-sm font-medium px-4 py-1 rounded-full">
            {post.category}
          </div>
        </div>
        
        <div className="p-6 md:p-8">
          <div className="flex items-center text-sm text-foreground/60 mb-4">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime} read</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {post.title}
          </h1>
          
          <div className="prose dark:prose-invert max-w-none">
            {post.content.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-3 text-foreground/90 text-sm leading-snug">
                {paragraph.startsWith('## ') ? (
                  <h2 className="text-xl font-bold mt-6 mb-3">{paragraph.substring(3)}</h2>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
          
          <div className="mt-12 pt-6 border-t border-border">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-primary hover:underline"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}

export async function generateStaticParams() {
  return [
    { slug: 'digital-marketing-trends-2024' },
    { slug: 'accounting-software-guide' },
    { slug: 'fashion-design-process' },
    { slug: 'garment-technology-innovations' },
    { slug: 'seo-strategies' },
    { slug: 'social-media-advertising-mastery' }
  ];
}
