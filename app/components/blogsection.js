import { blogPosts } from '@/data/blogData';

import Link from 'next/link';

export default function BlogSection({ limit = 3 }) {
  const featuredPosts = blogPosts.slice(0, limit);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Latest articles and tutorials about web development, Next.js, React, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {featuredPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {limit === 3 && (
          <div className="text-center">
            <Link 
              href="/blog"
              className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition duration-200 inline-flex items-center"
            >
              View All Posts
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}