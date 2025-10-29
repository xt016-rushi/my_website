import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata = {
  title: "My Next.js App",
  description: "A complete Next.js application with routing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased min-h-screen bg-gray-50`}>
        {/* Simple Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
              <nav className="flex space-x-6">
                <a href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2">Home</a>
                <a href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2">About</a>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2">Contact</a>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>

        {/* Simple Footer */}
        <footer className="bg-gray-800 text-white py-8 mt-auto">
          <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 My Next.js App. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}