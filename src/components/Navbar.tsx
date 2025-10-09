import Link from 'next/link';
import { FaUser, FaCoins } from 'react-icons/fa';

const Navbar = () => {
  // This would be replaced with actual auth state
  const isLoggedIn = false;

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#FF8C00]">
          NaijaConnect
        </Link>
        
        <div className="flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <Link href="/wallet" className="flex items-center text-[#D4AF37]">
                <FaCoins className="mr-1" />
                <span>Wallet</span>
              </Link>
              <Link href="/profile" className="btn-primary">
                <FaUser className="mr-1 inline" />
                Profile
              </Link>
            </>
          ) : (
            <>
              <Link href="/login" className="text-[#8B4513] hover:text-[#FF8C00]">
                Login
              </Link>
              <Link href="/register" className="btn-primary">
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;