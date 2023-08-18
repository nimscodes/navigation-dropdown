import logo from '../assets/images/logo.svg';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav'

const Header = ({ isMobile }) => {
  
  return (
    <div className={"flex items-center p-4"}>
      <div className="flex items-center justify-center">
        <img src={logo} alt="logo" />
      </div>
      {isMobile ? <MobileNav /> : <DesktopNav />}
    </div>
  );
};

export default Header;
