import { useState } from 'react';
import menu from '../assets/images/icon-menu.svg';
import menuClose from '../assets/images/icon-close-menu.svg';
import Features from './Features';
import Company from './Company';

const MobileNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className={`relative ${isMenuOpen && ''}`}>
      {/* Mobile Menu Button */}

      <button
        className="fixed z-50 top-4 right-4 focus:outline-none"
        onClick={toggleMenu}
      >
        <img src={isMenuOpen ? menuClose : menu} alt="Menu" />
      </button>

      {/* Navigation Menu */}
      <div
        className={
          isMenuOpen
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70'
            : ''
        }
      >
        <div
          className={`fixed z-40 top-0 right-0 h-full w-4/5 p-4 bg-almost-white text-medium-gray transform transition-transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-8 sm:w-3/4 mx-auto mt-12">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="#">
                  <Features />
                </a>
              </li>
              <li>
                <a href="#">
                  <Company />
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-almost-black">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className=" hover:text-almost-black">
                  About
                </a>
              </li>
            </ul>
            <div className="flex flex-col justify-center space-y-4">
              <button className="cursor-pointer">Login</button>
              <button className="w-full border-2 border-medium-gray rounded-xl py-2 cursor-pointer">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
