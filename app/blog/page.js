import Link from 'next/link';

export default function BlogPage() {                          
  const blogPosts = [
    {
    id: 1,
    title: "How Routing Works in Next.js",
    excerpt: "Fundamentals of the Next.js App Router and how to implement routing.",
    content: "Next.js App Router provides a file-based routing system...",
    author: "John Doe",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Next.js",
    image: "/api/placeholder/400/250",
    slug: "nextjs-routing-guide"
  },
  {
    id: 2,
    title: "Professional Design with Tailwind CSS",
    excerpt: "How to create responsive and beautiful designs using Tailwind CSS.",
    content: "Tailwind CSS is a utility-first framework that helps in rapid UI development...",
    author: "Jane Smith",
    date: "2024-01-12",
    readTime: "7 min read",
    category: "CSS",
    image: "/api/placeholder/400/250",
    slug: "tailwind-css-design"
  },
  {
    id: 3,
    title: "Complete Guide to React Hooks",
    excerpt: "All key concepts of React Hooks with practical examples.",
    content: "React Hooks allow functional components to use state and lifecycle features...",
    author: "Mike Johnson",
    date: "2024-01-10",
    readTime: "10 min read",
    category: "React",
    image: "/api/placeholder/400/250",
    slug: "react-hooks-guide"
  }
];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest articles and tutorials about web development and technology
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-semibold">{post.category}</span>
              </div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded mb-3 inline-block">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{post.date}</span>
                  <Link 
                    href={`/blog/${post.id}`}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm transition duration-200"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}