import { FaFacebook, FaInstagram} from "react-icons/fa";
import { FaSquareThreads, FaSquareXTwitter  } from "react-icons/fa6";
import "../app/global.css";

export default function Footer() {
  return (
    <footer className="w-full z-9 bg-white text-[#982B2B] py-15 shadow-[0px_-17px_22.899999618530273px_0px_rgba(0,0,0,0.07)]">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-6 px-4">
    

        {/* Social Icons */}
        <div className="flex gap-5 text-4xl">
            <a href="#" className="hover:text-[#FFB25B] transition duration-700 ease-in-out"><FaInstagram /></a>
            <a href="#" className="hover:text-[#FFB25B] transition duration-700 ease-in-out"><FaFacebook /></a>
            <a href="#" className="hover:text-[#FFB25B] transition duration-700 ease-in-out"><FaSquareXTwitter /></a>
            <a href="#" className="hover:text-[#FFB25B] transition duration-700 ease-in-out"><FaSquareThreads /></a>
        </div>

        {/* Copyright */}
        <div className="text-xl font-medium font-cormorant">
          Made with ❤️ by Dream Atelier 2025
        </div>
      </div>
    </footer>
  );
}
