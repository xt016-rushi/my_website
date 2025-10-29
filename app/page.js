import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Welcome to My Next.js App</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Build amazing web applications with Next.js, React, and Tailwind CSS
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/about" 
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition duration-200"
            >
              Learn More
            </Link>
            <Link 
              href="/blog" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition duration-200"
            >
              Read Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best solutions for modern web development
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Fast Performance</h3>
              <p className="text-gray-600">Lightning fast applications with Next.js server-side rendering</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
              <p className="text-gray-600">Perfect experience on all devices and screen sizes</p>
            </div>
            
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Modern Tech</h3>
              <p className="text-gray-600">Built with latest technologies and best practices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Blog Section (Without Component) */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Latest Blog Posts</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Check out our latest articles and tutorials
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white font-semibold">Next.js</span>
              </div>
              <div className="p-6">
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded mb-3 inline-block">
                  Next.js
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Next.js Routing Guide</h3>
                <p className="text-gray-600 mb-4">Learn how routing works in Next.js App Router</p>
                <Link 
                  href="/blog"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md transition duration-200 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
                <span className="text-white font-semibold">Tailwind</span>
              </div>
              <div className="p-6">
                <span className="bg-green-100 text-green-600 text-xs font-medium px-2.5 py-0.5 rounded mb-3 inline-block">
                  CSS
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Tailwind CSS Tips</h3>
                <p className="text-gray-600 mb-4">Professional designs with Tailwind CSS</p>
                <Link 
                  href="/blog"
                  className="w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-md transition duration-200 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>

            {/* Blog Post 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
                <span className="text-white font-semibold">React</span>
              </div>
              <div className="p-6">
                <span className="bg-purple-100 text-purple-600 text-xs font-medium px-2.5 py-0.5 rounded mb-3 inline-block">
                  React
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-3">React Hooks Guide</h3>
                <p className="text-gray-600 mb-4">Master React Hooks with examples</p>
                <Link 
                  href="/blog"
                  className="w-full bg-purple-500 hover:bg-purple-600 text-white text-center py-2 px-4 rounded-md transition duration-200 inline-block"
                >
                  Read More
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of developers building amazing applications with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold text-lg transition duration-200"
            >
              Contact Us
            </Link>
            <Link 
              href="/blog" 
              className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-800 px-8 py-3 rounded-lg font-semibold text-lg transition duration-200"
            >
              Read Our Blog
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}