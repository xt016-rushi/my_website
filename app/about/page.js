import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
<h1 className="text-4xl font-bold mb-6 text-gray-600">About us</h1>      
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4 text-gray-500">Our Story</h2>
        <p className="text-gray-700 mb-4">
          Welcome to We build fast, scalable, and modern websites using Next.js. Our focus is on creating seamless, SEO-friendly, and high-performance web experiences.
          We aim to empower developers and businesses with cutting-edge solutions that are both reliable and user-friendly.
        </p>
      </div>

      <Link 
        href="/" 
        className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}