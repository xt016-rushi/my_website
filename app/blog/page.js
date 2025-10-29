import Link from 'next/link';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Next.js ma Routing Kem Work Kare",
      excerpt: "Next.js App Router na fundamentals ane kem tame routing implement karo.",
      category: "Next.js",
      date: "2024-01-15"
    },
    {
      id: 2,
      title: "Tailwind CSS thi Professional Design",
      excerpt: "Tailwind CSS use kari ne responsive ane beautiful designs kem banaviye.",
      category: "CSS",
      date: "2024-01-12"
    },
    {
      id: 3,
      title: "React Hooks Complete Guide",
      excerpt: "React Hooks na sare concepts ane practical examples.",
      category: "React",
      date: "2024-01-10"
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