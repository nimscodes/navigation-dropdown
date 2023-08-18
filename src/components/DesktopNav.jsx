import Features from "./Features";
import Company from "./Company";

const DesktopNav = () => {
  return (
    <nav className="bg-almost-white px-4 text-medium-gray flex-1 text-sm">
      <div className="flex items-center justify-between">
        <ul className="flex space-x-6">
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
        <div className="flex space-x-6">
          <button className="cursor-pointer hover:text-almost-black">Login</button>
          <button className="border border-medium-gray hover:text-almost-black hover:border-almost-black rounded-xl py-1.5 px-4 cursor-pointer">
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
