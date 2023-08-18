import { useState, useEffect } from 'react';
import logo from '../assets/images/logo.svg';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav'

const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Initial state based on screen size

  useEffect(() => {
    // Add a resize event listener to update the layout when the screen size changes
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className="flex items-center p-4">
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
};

export default Header;
