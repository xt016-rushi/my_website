import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
          </div>
          <Navbar />
        </div>
      </div>
    </header>
  );
}