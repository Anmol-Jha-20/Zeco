import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-white shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-4">
            <img
              src="https://zecoaircon.com/wp-content/uploads/2022/10/logo-new.png"
              alt="ZECO Logo"
              className="h-10"
            />
            <nav className="hidden md:flex gap-6 text-sm font-medium">
              <a href="#" className="hover:text-blue-600">
                HOME
              </a>
              <div
                className="relative group"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="hover:text-blue-600 flex items-center gap-1">
                  PRODUCTS <span className="text-xs">▾</span>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 bg-white border mt-2 shadow-md rounded-md p-2 w-48 z-50">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Air Conditioning
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Air Distribution
                    </a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                      Pre-Insulated Pipes
                    </a>
                  </div>
                )}
              </div>
              <a href="#" className="hover:text-blue-600">
                ABOUT
              </a>
              <a href="#" className="hover:text-blue-600">
                BLOGS
              </a>
              <a href="#" className="hover:text-blue-600">
                CONTACT
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-red-500 font-bold border px-4 py-1 rounded-full bg-red-100 hover:bg-red-200 transition">
              1800-911-0070
            </button>
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <nav className="md:hidden bg-white shadow p-4 space-y-2">
            <a href="#" className="block hover:text-blue-600">
              HOME
            </a>
            <div className="">
              <button className="w-full text-left hover:text-blue-600">
                PRODUCTS ▾
              </button>
              <div className="ml-4 space-y-1 mt-1">
                <a href="#" className="block hover:text-blue-600">
                  Air Conditioning
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Air Distribution
                </a>
                <a href="#" className="block hover:text-blue-600">
                  Pre-Insulated Pipes
                </a>
              </div>
            </div>
            <a href="#" className="block hover:text-blue-600">
              ABOUT
            </a>
            <a href="#" className="block hover:text-blue-600">
              BLOGS
            </a>
            <a href="#" className="block hover:text-blue-600">
              CONTACT
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
