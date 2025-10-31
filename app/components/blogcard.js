import Link from 'next/link'
import BlogCard from './blogcard';


export default function BlogCard({ post }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300">
      <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
        <span className="text-white font-semibold">Blog Image</span>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2.5 py-0.5 rounded">
            {post.category}
          </span>
          <span className="text-gray-500 text-sm">{post.readTime}</span>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">👤</span>
            </div>
            <span className="text-sm text-gray-600">{post.author}</span>
          </div>
          <span className="text-sm text-gray-500">{post.date}</span>
        </div>
        
        <Link 
          href={`/blog/${post.slug}`}
          className="mt-4 inline-block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 px-4 rounded-md transition duration-200"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}