import Link from 'next/link';
import { FaUser, FaCoins } from 'react-icons/fa';

const Navbar = () => {
  // This would be replaced with actual auth state
  const isLoggedIn = false;

  return (
    <nav className="bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-[#2a2a2a]">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-3 md:py-4 flex justify-between items-center">
        <Link href="/" className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#FF8C00] to-[#D4AF37] bg-clip-text text-transparent hover:scale-105 transition-transform">
          NaijaConnect
        </Link>
        
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          {isLoggedIn ? (
            <>
              <Link href="/wallet" className="flex items-center gap-1 sm:gap-2 text-[#D4AF37] hover:text-[#FF8C00] transition-colors font-medium text-sm sm:text-base">
                <FaCoins className="text-base sm:text-lg" />
                <span className="hidden sm:inline">Wallet</span>
              </Link>
              <Link href="/profile" className="btn-primary flex items-center gap-1 sm:gap-2 text-sm sm:text-base px-3 sm:px-4">
                <FaUser className="text-sm sm:text-base" />
                <span className="hidden sm:inline">Profile</span>
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-300 hover:text-[#FF8C00] transition-colors font-medium px-2 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-white/5 text-sm sm:text-base">
                Login
              </Link>
              <Link href="/register" className="btn-primary text-sm sm:text-base px-3 sm:px-4">
                Get Started
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;