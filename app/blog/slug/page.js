import { blogPosts } from '../../../data/blogData'; 
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default function BlogPost({ params }) {
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Link 
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Blog Post */}
        <article className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Header Image */}
          <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
            <span className="text-white text-2xl font-bold">Blog Header Image</span>
          </div>

          <div className="p-8">
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-500 text-sm">{post.readTime}</span>
              </div>
              <span className="text-gray-500 text-sm">{post.date}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              {post.title}
            </h1>

            {/* Author */}
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <span className="text-lg font-medium">👤</span>
              </div>
              <div>
                <p className="font-semibold text-gray-800">{post.author}</p>
                <p className="text-gray-600 text-sm">Web Developer</p>
              </div>
            </div>

            {/* Content */}
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                {post.content}
              </p>
              
              <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Key Features</h2>
              
              <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
                <li>Easy to implement and use</li>
                <li>Responsive design</li>
                <li>Fast performance</li>
                <li>SEO friendly</li>
              </ul>
              
              <p className="text-gray-700">
                In conclusion, this technology provides excellent benefits for modern web development and should be considered for your next project.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  #{post.category.toLowerCase()}
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  #webdev
                </span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  #tutorial
                </span>
              </div>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        <section className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <div key={relatedPost.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition duration-300">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {relatedPost.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${relatedPost.slug}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read more →
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </div>
    </div>
  );
}