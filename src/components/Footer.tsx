import Link from 'next/link';
import { FaInstagram, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#333] text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-[#FF8C00]">NaijaConnect</h3>
            <p className="text-sm mt-2">Connect with verified profiles in Nigeria</p>
          </div>
          
          <div className="flex space-x-6">
            <Link href="#" aria-label="Instagram">
              <FaInstagram className="text-2xl text-[#D4AF37] hover:text-[#FF8C00]" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <FaTwitter className="text-2xl text-[#D4AF37] hover:text-[#FF8C00]" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <FaFacebook className="text-2xl text-[#D4AF37] hover:text-[#FF8C00]" />
            </Link>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} NaijaConnect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;