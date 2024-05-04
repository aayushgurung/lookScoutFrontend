import { useState } from "react";
import lookScoutLogo from "../assets/Lookscoutlogo.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div
        className={`
        z-10 border-b-[1px] border-b-[#EAEBF0]
        bg-[#F8F9FB] xl:h-[86px] xl:py-[20px]
        xl:px-[160px] xl:fixed xl:w-full h-[64px] p-[16px] w-full`}
      >
        <div className="justify-between flex flex-row  relative">
          <div className="flex flex-row xl:gap-[64px] items-center">
            <div>
              <img src={lookScoutLogo} alt="" />
            </div>
            <div className="xl:flex flex-row gap-[32px] hidden">
              <div className="font-semibold text-[15px]">Home</div>
              <div className="font-semibold text-[15px]">Our Products</div>
              <div className="font-semibold text-[15px]">Resources</div>
              <div className="font-semibold text-[15px]">Contacts</div>{" "}
            </div>
          </div>
          <div className="hidden flex-row gap-[24px] xl:flex">
            <div className="font-semibold text-[15px]">
              <Button variant="">Sign Up</Button>
            </div>
            <div className="font-semibold text-[15px]">
              <Button variant="blue">Log In</Button>
            </div>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
        {showMenu && (
          <div className="flex flex-col gap-4 w-full items-center  bg-[#F8F9FB] lg:hidden absolute ">
            <Link to="/" className="font-semibold text-sm z-[1000]">
              Home
            </Link>
            <Link to="/products" className="font-semibold text-sm z-[1000]">
              Our Products
            </Link>
            <Link to="/resources" className="font-semibold text-sm z-[1000]">
              Resources
            </Link>
            <Link to="/contacts" className="font-semibold text-sm z-[1000]">
              Contacts
            </Link>
            <div className="font-semibold text-[15px]">
              <Button variant="">Sign Up</Button>
            </div>
            <div className="font-semibold text-[15px]">
              <Button variant="blue">Log In</Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
