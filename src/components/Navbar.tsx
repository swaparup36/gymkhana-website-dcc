import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent py-4 px-6 md:px-14 relative">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <img src="/images/ITAC_LOGO.png" alt="NITA Logo" className="h-12" />
            <span className="text-white font-bold text-xl">ITAC 2025</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link to="/events" className="text-white hover:text-green-400 transition-colors text-lg font-semibold">EVENTS</Link>
          <Link to="/hackathon" className="text-white hover:text-green-400 transition-colors text-lg font-semibold">HACKATHON</Link>
          <Link to="/sponsors" className="text-white hover:text-green-400 transition-colors text-lg font-semibold">SPONSORS</Link>
          <Link to="/about" className="text-white hover:text-green-400 transition-colors text-lg font-semibold">ABOUT US</Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)}></div>
      )}

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? 0 : "100%" }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-gray-900 shadow-lg z-50 p-6 flex flex-col items-start space-y-6"
      >
        <button onClick={() => setIsOpen(false)} className="self-end text-white">
          <X size={28} />
        </button>
        <Link to="/" className="text-white text-lg font-semibold hover:text-green-400" onClick={() => setIsOpen(false)}>HOME</Link>
        <Link to="/events" className="text-white text-lg font-semibold hover:text-green-400" onClick={() => setIsOpen(false)}>EVENTS</Link>
        <Link to="/hackathon" className="text-white text-lg font-semibold hover:text-green-400" onClick={() => setIsOpen(false)}>HACKATHON</Link>
        <Link to="/sponsors" className="text-white text-lg font-semibold hover:text-green-400" onClick={() => setIsOpen(false)}>SPONSORS</Link>
        <Link to="/about" className="text-white text-lg font-semibold hover:text-green-400" onClick={() => setIsOpen(false)}>ABOUT US</Link>
      </motion.div>
    </nav>
  );
}

export default Navbar;
