import { FC } from "react";
import { NavLink } from "react-router-dom";
import * as FaIcons from "react-icons/fa";

const FooterNav: FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white text-black flex justify-around items-center py-2 md:hidden border-t border-gray-300">
      
      <NavLink 
        to="/" 
        end
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? "text-green-600 font-semibold" : "text-black hover:text-green-500"}`
        }
      >
        <FaIcons.FaHome className="text-lg mb-1" />
        <span>Home</span>
      </NavLink>

      <NavLink 
        to="/services" 
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? "text-green-600 font-semibold" : "text-black hover:text-green-500"}`
        }
      >
        <FaIcons.FaSeedling className="text-lg mb-1" />
        <span>Services</span>
      </NavLink>

      <NavLink 
        to="/products" 
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? "text-green-600 font-semibold" : "text-black hover:text-green-500"}`
        }
      >
        <FaIcons.FaShoppingBag className="text-lg mb-1" />
        <span>Products</span>
      </NavLink>

      <NavLink 
        to="/contact" 
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? "text-green-600 font-semibold" : "text-black hover:text-green-500"}`
        }
      >
        <FaIcons.FaPhone className="text-lg mb-1" />
        <span>Contact</span>
      </NavLink>

      <NavLink 
        to="/about" 
        className={({ isActive }) =>
          `flex flex-col items-center text-xs ${isActive ? "text-green-600 font-semibold" : "text-black hover:text-green-500"}`
        }
      >
        <FaIcons.FaInfoCircle className="text-lg mb-1" />
        <span>About</span>
      </NavLink>
    </div>
  );
};

export default FooterNav;
