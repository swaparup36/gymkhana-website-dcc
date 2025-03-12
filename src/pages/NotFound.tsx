import { Link } from 'react-router-dom';
import { HomeIcon } from 'lucide-react';
import NavbarWhite from '../components/NavbarWhite';

function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <NavbarWhite />

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Error Code */}
          <h1 className="text-[150px] font-bold text-green-600 leading-none">
            404
          </h1>

          {/* Error Message */}
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Page Not Found
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-600 mb-12">
            The page you are looking for might have been removed, had its name changed,
            or is temporarily unavailable.
          </p>

          {/* Action Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#1B3129] text-white px-8 py-4 rounded-lg 
                     text-lg font-semibold hover:bg-[#264439] transition-colors"
          >
            <HomeIcon size={24} />
            Back to Home
          </Link>
        </div>

        {/* Decorative Elements */}
        <div className="mt-20 max-w-2xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="h-2 bg-green-600 rounded animate-pulse"></div>
            <div className="h-2 bg-green-400 rounded animate-pulse delay-100"></div>
            <div className="h-2 bg-green-200 rounded animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
