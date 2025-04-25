import { Facebook, Twitter, Linkedin, Youtube } from "lucide-react";
import logo from "../../assets/logo.png";
const Footer = () => {
  return (
    <footer className="bg-white shadow pt-8 mt-4 pb-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center items-center gap-2 mb-6">
          <img src={logo} alt="" />
          <h1 className="text-xl font-bold text-gray-900">Phudu</h1>
        </div>
        <ul className="flex justify-center gap-6 text-gray-700 font-medium mb-6">
          <li>
            <a href="#" className="hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              My-Bookings
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Blogs
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-blue-500">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="flex justify-center gap-4">
          <a
            href="https://fb.com/dev.abdullahalnirob/"
            target="_blank"
            className="text-blue-600 hover:scale-110 transition"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="https://x.com/AbdullahN66467"
            target="_blank"
            className="bg-black text-white rounded-full p-1 hover:scale-110 transition"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-al-nirob-096994295"
            target="_blank"
            className="text-sky-600 hover:scale-110 transition"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://www.youtube.com/@abdullahalnirob12"
            target="_blank"
            className="text-red-600 hover:scale-110 transition"
          >
            <Youtube className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
