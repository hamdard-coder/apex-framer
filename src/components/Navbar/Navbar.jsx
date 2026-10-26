import React, { useState } from "react";
import Container from "../../Container";

const Navbar = () => {
  const [meneOpen, setMenuOpen] = useState(false);
  return (
    <header className="py-8 bg-transparent relative z-50">
      <Container>
        <nav className="flex items-center justify-between">
          <div>
            <a href="" className="text-2xl font-semibold font-sans text-white">
              APEX
            </a>
          </div>

          {/* Mobile hamburger*/}
          <button className="flex flex-col items-end gap-1.5 lg:hidden">
            <span className=" block h-0.5 w-7 bg-white"></span>
            <span className="block h-0.5 w-5 bg-white"></span>
          </button>

          {/* desktop menu */}
          <div className="hidden lg:block">
            <ul className="flex space-x-8 text-gray">
              <li>
                <a href="" className="text-gray-400 hover:text-white">
                  PRICING
                </a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white">
                  INSIGHTS
                </a>
              </li>
              <li>
                <a href="" className="text-gray-400 hover:text-white">
                  START TRAINING
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
