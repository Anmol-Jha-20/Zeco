import React, { useState } from "react";
import { ChevronDown, Search, Phone, Menu, X, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState(null);
  const [mobileOpenMenus, setMobileOpenMenus] = useState({});
  const navigate = useNavigate();

  const manufacturingData = {
    "Air Conditioning": [
      {
        name: "AHU",
        items: [
          "Smart AHU",
          "Pharma AHU",
          "Cleanroom AHU",
          "Floor Mounted AHU",
          "Ceiling Suspended AHU",
          "TFA (With Energy Recovery Unit)",
        ],
      },
      {
        name: "AWU (Air Washer Unit)",
        items: [
          "Single Stage Air Washer",
          "Spire Indirect Direct Evaporative Cooling Unit",
        ],
      },
      {
        name: "Fan Coil Units (FCUs)",
        items: [],
      },
      {
        name: "Spire Outdoor Air System",
        items: [],
      },
      {
        name: "Spire Environmental Unit (SEN)",
        items: [],
      },
    ],
    Ventillation: [
      {
        name: "Fresh Air Unit",
        items: [],
      },
      {
        name: "Exhaust Air Unit",
        items: [],
      },
      {
        name: "Dry Scrubber",
        items: [],
      },
      {
        name: "Wet Scrubber",
        items: [],
      },
    ],
    "Heat Exchanger Coils": [],
    "Air Distribution Ducts": [],
    "Pre-Insulated Pipes": [],
  };

  const ManufacturingDropdown = ({ data }) => {
    const hasSubcategories =
      hoveredCategory &&
      data[hoveredCategory] &&
      data[hoveredCategory].length > 0;
    const currentSubcategory =
      hoveredCategory &&
      hoveredSubcategory &&
      data[hoveredCategory].find((item) => item.name === hoveredSubcategory);
    const hasItems =
      currentSubcategory &&
      currentSubcategory.items &&
      currentSubcategory.items.length > 0;
    return (
      <div
        className={`absolute top-full left-0 ${
          hasSubcategories
            ? hasItems
              ? "w-[700px]"
              : "w-[600px]"
            : "w-[300px]"
        } shadow-xl mt-2 z-50`}
      >
        <div className="flex">
          {/* Left Column - Categories */}
          <div
            style={{ width: hasSubcategories ? "33.333%" : "100%" }}
            className="w-1/3 bg-gray-50 p-4 space-y-1"
          >
            {Object.entries(data).map(([category, items]) => {
              const hasChildren = items.length > 0;
              return (
                <div
                  key={category}
                  className={`p-3 rounded cursor-pointer flex items-center justify-between ${
                    hoveredCategory === category
                      ? "bg-red-50 text-blue-600"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  onMouseEnter={() => setHoveredCategory(category)}
                  onClick={() => {
                    if (!hasChildren) {
                      navigate(
                        `/${category.toLowerCase().replace(/\s+/g, "-")}`
                      );
                    }
                  }}
                >
                  <span className="text-sm font-medium">{category}</span>
                  {/* <Plus className="w-4 h-4" /> */}
                  {items.length > 0 && <Plus className="w-4 h-4" />}
                </div>
              );
            })}
          </div>

          {/* Middle Column - Subcategories */}
          {hasSubcategories && (
            <div className="w-1/3 bg-white p-4 space-y-1">
              {hoveredCategory && data[hoveredCategory] && (
                <>
                  {data[hoveredCategory].map((item, index) => {
                    const hasItems = item.items && item.items.length > 0;
                    return (
                      <div
                        key={index}
                        className={`p-3 rounded cursor-pointer flex items-center justify-between ${
                          hoveredSubcategory === item.name
                            ? "bg-red-50 text-blue-600"
                            : "text-gray-700 hover:bg-gray-200"
                        }`}
                        onMouseEnter={() => setHoveredSubcategory(item.name)}
                        onClick={() => {
                          if (!hasItems) {
                            navigate(
                              `/${item.name.toLowerCase().replace(/\s+/g, "-")}`
                            );
                          }
                        }}
                      >
                        <span className="text-sm">{item.name}</span>
                        {item.items && item.items.length > 0 && (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          )}

          {/* Right Column - Items */}
          {hasItems && (
            <div className="w-1/3 bg-white p-4 space-y-1">
              {hoveredCategory && hoveredSubcategory && (
                <>
                  {data[hoveredCategory]
                    .find((item) => item.name === hoveredSubcategory)
                    ?.items?.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        onClick={() =>
                          navigate(
                            `/${subItem.toLowerCase().replace(/\s+/g, "-")}`
                          )
                        }
                        className="p-3 text-gray-700 hover:text-blue-600 cursor-pointer rounded hover:bg-red-50"
                      >
                        <span className="text-sm">{subItem}</span>
                      </div>
                    ))}
                </>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  const toggleMobileMenu = (menuName) => {
    setMobileOpenMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const MobileDropdown = ({ title, items }) => (
    <div>
      <button
        onClick={() => toggleMobileMenu(title)}
        className="w-full flex items-center justify-between px-3 py-2 text-gray-700 hover:bg-gray-50"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            mobileOpenMenus[title] ? "rotate-180" : ""
          }`}
        />
      </button>
      {mobileOpenMenus[title] && (
        <div className="ml-4 space-y-1">
          {items.map((item, index) => (
            <a
              key={index}
              href="#"
              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );

  const MobileProductsDropdown = ({ title, data }) => (
    <div>
      <button
        onClick={() => toggleMobileMenu(title)}
        className="w-full flex items-center justify-between py-2 font-medium text-gray-700 hover:bg-gray-50"
      >
        <span>{title}</span>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            mobileOpenMenus[title] ? "rotate-180" : ""
          }`}
        />
      </button>
      {mobileOpenMenus[title] && (
        <div className="ml-4 space-y-1">
          {Object.entries(data).map(([category, items]) => {
            const hasSub = items.length > 0;
            return (
              <div key={category}>
                <button
                  onClick={() => {
                    if (hasSub) {
                      toggleMobileMenu(category);
                    } else {
                      navigate(
                        `/${category.toLowerCase().replace(/\s+/g, "-")}`
                      );
                    }
                  }}
                  className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-700 hover:bg-gray-50"
                >
                  <span>{category}</span>
                  {hasSub && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        mobileOpenMenus[category] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {mobileOpenMenus[category] && (
                  <div className="ml-4 space-y-1">
                    {items.map((item, index) => {
                      const hasItems = item.items && item.items.length > 0;
                      return (
                        <div key={index}>
                          <button
                            onClick={() => {
                              if (hasItems) {
                                toggleMobileMenu(`${category}-${item.name}`);
                              } else {
                                navigate(
                                  `/${item.name
                                    .toLowerCase()
                                    .replace(/\s+/g, "-")}`
                                );
                              }
                            }}
                            className="w-full flex items-center justify-between px-3 py-2 text-sm text-gray-600 hover:bg-gray-50"
                          >
                            <span>{item.name}</span>
                            {item.items && item.items.length > 0 && (
                              <ChevronDown
                                className={`w-4 h-4 transition-transform ${
                                  mobileOpenMenus[`${category}-${item.name}`]
                                    ? "rotate-180"
                                    : ""
                                }`}
                              />
                            )}
                          </button>
                          {mobileOpenMenus[`${category}-${item.name}`] &&
                            item.items &&
                            item.items.length > 0 && (
                              <div className="ml-4 space-y-1">
                                {item.items.map((subItem, subIndex) => (
                                  <a
                                    key={subIndex}
                                    href={`/${subItem
                                      .toLowerCase()
                                      .replace(/\s+/g, "-")}`}
                                    className="block px-3 py-2 text-xs text-gray-500 hover:bg-gray-50"
                                  >
                                    {subItem}
                                  </a>
                                ))}
                              </div>
                            )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );

  return (
    <header className="bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex-shrink-0">
            <div className="flex items-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600">
                Spire AirTech
              </div>
            </div>
          </div>

          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-red-500 font-medium transition-colors"
            >
              HOME
            </button>

            {/* About Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDropdown("about")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button
                onClick={() => navigate("/about-us")}
                className="flex items-center text-gray-700 hover:text-red-500 font-medium transition-colors"
              >
                ABOUT
              </button>
            </div>

            {/* Projects Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDropdown("projects")}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button
                onClick={() => navigate("/projects")}
                className="flex items-center text-gray-700 hover:text-red-500 font-medium transition-colors"
              >
                PROJECTS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {hoveredDropdown === "projects" && (
                <div
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={() => setHoveredDropdown("projects")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <a
                    href="#air-conditioning"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    CHILLERS
                  </a>
                  <a
                    href="#air-distribution"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    VRV AIRCONDITIONING SYSTEMS
                  </a>
                  <a
                    href="#pre-insulated-pipes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    FDV and FAN
                  </a>
                  <a
                    href="#pre-insulated-pipes"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    DUCTED SPLIT AIRCONDITIONERS
                  </a>
                </div>
              )}
            </div>

            {/* Manufacturing Dropdown - New Enhanced Version */}
            <div
              className="relative"
              onMouseEnter={() => setHoveredDropdown("manufacturing")}
              onMouseLeave={() => {
                setHoveredDropdown(null);
                setHoveredCategory(null);
                setHoveredSubcategory(null);
              }}
            >
              <button
                onClick={() => navigate("/manufacturing")}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                MANUFACTURING
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>

              {hoveredDropdown === "manufacturing" && (
                <ManufacturingDropdown data={manufacturingData} />
              )}
            </div>

            <button
              onClick={() => navigate("/services")}
              className="text-gray-700 hover:text-red-500 font-medium transition-colors"
            >
              SERVICES
            </button>

            <button
              onClick={() => navigate("/contact-us")}
              className="text-gray-700 hover:text-red-500 font-medium transition-colors"
            >
              CONTACT
            </button>
          </nav>

          <div className="flex items-center space-x-4">
            <button className="hidden md:block p-2 text-gray-500 hover:text-gray-700">
              <Search className="h-5 w-5" />
            </button>

            <a
              href="tel:+919311778119"
              className="bg-red-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center"
            >
              <Phone className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">+91 9311778119</span>
              <span className="sm:hidden">Call</span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-500 hover:text-gray-700"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
            <div className="px-4 py-2 space-y-2">
              <a
                href="#home"
                className="block py-2 text-gray-700 hover:text-red-500 font-medium"
              >
                HOME
              </a>
              <div className="py-2">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className="flex items-center w-full text-left text-gray-700 hover:text-red-500 font-medium"
                >
                  ABOUT
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isAboutOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="#our-story"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Our Story
                    </a>
                    <a
                      href="#team"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Team
                    </a>
                    <a
                      href="#certifications"
                      className="block py-1 text-sm text-gray-600"
                    >
                      Certifications
                    </a>
                  </div>
                )}
              </div>
              <div className="py-2">
                <button
                  onClick={() => setIsProductsOpen(!isProductsOpen)}
                  className="flex items-center w-full text-left text-gray-700 hover:text-red-500 font-medium"
                >
                  PROJECTS
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isProductsOpen && (
                  <div className="ml-4 mt-2 space-y-2">
                    <a
                      href="#air-conditioning"
                      className="block py-1 text-sm text-gray-600"
                    >
                      CHILLERS
                    </a>
                    <a
                      href="#air-distribution"
                      className="block py-1 text-sm text-gray-600"
                    >
                      VRV AIRCONDITIONING SYSTEMS
                    </a>
                    <a
                      href="#pre-insulated-pipes"
                      className="block py-1 text-sm text-gray-600"
                    >
                      FDV and FAN
                    </a>
                    <a
                      href="#pre-insulated-pipes"
                      className="block py-1 text-sm text-gray-600"
                    >
                      DUCTED SPLIT AIRCONDITIONERS
                    </a>
                  </div>
                )}
              </div>

              {/* <a
                href="#manufacturing"
                className="block py-2 text-gray-700 hover:text-red-500 font-medium"
              >
                MANUFACTURING <ChevronDown className="w-4 h-4 ml-1" />
              </a> */}
              <MobileProductsDropdown
                title="MANUFACTURING"
                data={manufacturingData}
              />

              <a
                href="#services"
                className="block py-2 text-gray-700 hover:text-red-500 font-medium"
              >
                SERVICES
              </a>
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-red-500 font-medium"
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
