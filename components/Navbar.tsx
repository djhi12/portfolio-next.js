// components/Navbar.tsx

import Link from 'next/link';
// import '../src/app/globals.css';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-white text-xl font-bold">
              My Portfolio
            </Link> 
          </div>
          <div className="flex items-center">
            <Link href="/projects" className="text-gray-300 hover:text-red px-3 py-2 rounded-md text-sm font-medium mx-8">
              Projects
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-4">
              About
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium mx-40">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
