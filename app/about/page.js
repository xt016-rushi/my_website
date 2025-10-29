import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
        <p className="text-gray-700 mb-4">
          We are a passionate team dedicated to building amazing web applications 
          using modern technologies like Next.js, React, and Tailwind CSS.
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