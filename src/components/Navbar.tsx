import Link from 'next/link';
import { FaUser, FaCoins } from 'react-icons/fa';

const Navbar = () => {
  // This would be replaced with actual auth state
  const isLoggedIn = false;

  return (
    <nav className="bg-black/50 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-[#2a2a2a]">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-[#FF8C00] to-[#D4AF37] bg-clip-text text-transparent hover:scale-105 transition-transform">
          NaijaConnect
        </Link>
        
        <div className="flex items-center gap-6">
          {isLoggedIn ? (
            <>
              <Link href="/wallet" className="flex items-center gap-2 text-[#D4AF37] hover:text-[#FF8C00] transition-colors font-medium">
                <FaCoins className="text-lg" />
                <span>Wallet</span>
              </Link>
              <Link href="/profile" className="btn-primary flex items-center gap-2">
                <FaUser />
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-gray-300 hover:text-[#FF8C00] transition-colors font-medium px-4 py-2 rounded-lg hover:bg-white/5">
                Login
              </Link>
              <Link href="/register" className="btn-primary">
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