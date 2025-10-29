export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MyApp</h2>
            <p className="text-gray-400 mt-2">Building amazing web experiences</p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400">
              &copy; 2024 My Next.js App. All rights reserved.
            </p>
            <p className="text-gray-400 mt-1">
              Built with ❤️ using Next.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}