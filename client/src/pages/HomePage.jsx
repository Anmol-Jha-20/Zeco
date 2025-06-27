import React, { useState } from "react";
import { ChevronDown, Search, Phone, Menu, X } from "lucide-react";
import AboutSection from "../components/about/AboutSection.jsx";
import Footer from "../components/footer/Footer.jsx";
import ProductRange from "../components/productRange/ProductRange.jsx";
import ManufacturingShowcase from "../components/manufacturing/ManufacturingShowcase.jsx";
import TestimonialsSection from "../components/testimonials/TestimonialsSection.jsx";
import CertificationsCarousel from "../components/hero/Certification.jsx";
import AffiliatesBanner from "../components/hero/AffilatesBanner.jsx";
import SnowEffect from "../components/snow/SnowEffect.jsx";

export default function HomePage() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <title>
          Spire AirTech Management System & Solutions - Indian Made, Globally
          Certified
        </title>

        {/* Header */}
        <header className="bg-white shadow-sm relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    Spire AirTech
                  </div>
                  {/* <div className="ml-2 text-xs text-gray-600">
                  Part of Munters
                </div> */}
                </div>
              </div>

              <nav className="hidden md:flex space-x-8">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-red-500 font-medium transition-colors"
                >
                  HOME
                </a>

                {/* About Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown("about")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className="flex items-center text-gray-700 hover:text-red-500 font-medium transition-colors">
                    ABOUT
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {hoveredDropdown === "about" && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      <a
                        href="#our-story"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Our Story
                      </a>
                      <a
                        href="#team"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Team
                      </a>
                      <a
                        href="#certifications"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Certifications
                      </a>
                    </div>
                  )}
                </div>

                {/* Products Dropdown */}

                <div
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown("projects")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className="flex items-center text-gray-700 hover:text-red-500 font-medium transition-colors">
                    PROJECTS
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>

                  {/* Dropdown menu */}
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

                <a
                  href="#manufacturing"
                  className="text-gray-700 hover:text-red-500 font-medium transition-colors"
                >
                  MANUFACTURING
                </a>
                <a
                  href="#services"
                  className="text-gray-700 hover:text-red-500 font-medium transition-colors"
                >
                  SERVICES
                </a>
                <a
                  href="#blogs"
                  className="text-gray-700 hover:text-red-500 font-medium transition-colors"
                >
                  BLOGS
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-red-500 font-medium transition-colors"
                >
                  CONTACT
                </a>
              </nav>

              <div className="flex items-center space-x-4">
                <button className="hidden md:block p-2 text-gray-500 hover:text-gray-700">
                  <Search className="h-5 w-5" />
                </button>

                <a
                  href="tel:1800-911-0070"
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

                  <a
                    href="#manufacturing"
                    className="block py-2 text-gray-700 hover:text-red-500 font-medium"
                  >
                    MANUFACTURING
                  </a>
                  <a
                    href="#services"
                    className="block py-2 text-gray-700 hover:text-red-500 font-medium"
                  >
                    SERVICES
                  </a>
                  <a
                    href="#blogs"
                    className="block py-2 text-gray-700 hover:text-red-500 font-medium"
                  >
                    BLOGS
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

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
          <SnowEffect />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1703260809882-5b0b8d6abc76?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`,
            }}
          ></div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-white text-2xl md:text-3xl font-extrabold mb-4 leading-tight tracking-wide">
              Air conditioning is our main line of business and specialization
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Spire AirTech Management System & Solutions
            </p>
            <button className="bg-red-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all cursor-pointer duration-300 transform hover:scale-105 shadow-lg">
              Get Free Consultation
            </button>
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-white" />
          </div>
        </section>
      </div>
      <AboutSection />
      <CertificationsCarousel />
      <ProductRange />
      <ManufacturingShowcase />
      <AffiliatesBanner />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
