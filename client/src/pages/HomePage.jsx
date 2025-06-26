// import React, { useState } from "react";
// import { ChevronDown, Search, Phone, Menu, X } from "lucide-react";

// export default function HomePage() {
//   const [isProductsOpen, setIsProductsOpen] = useState(false);
//   const [isAboutOpen, setIsAboutOpen] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* SEO Meta Tags would be in document head */}
//       <title>
//         Zeco Air Management System & Solutions - Indian Made, Globally Certified
//       </title>

//       {/* Header */}
//       <header className="bg-white shadow-sm relative z-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-16 md:h-20">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <div className="flex items-center">
//                 <div className="text-2xl md:text-3xl font-bold text-blue-600">
//                   ZECO
//                 </div>
//                 <div className="ml-2 text-xs text-gray-600">
//                   Part of Munters
//                 </div>
//               </div>
//             </div>

//             {/* Desktop Navigation */}
//             <nav className="hidden md:flex space-x-8">
//               <a
//                 href="#home"
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//               >
//                 HOME
//               </a>

//               {/* Products Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setIsProductsOpen(!isProductsOpen)}
//                   className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                 >
//                   PRODUCTS
//                   <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 {isProductsOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
//                     <a
//                       href="#air-conditioning"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Air Conditioning
//                     </a>
//                     <a
//                       href="#air-distribution"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Air Distribution
//                     </a>
//                     <a
//                       href="#pre-insulated-pipes"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Pre-Insulated Pipes
//                     </a>
//                   </div>
//                 )}
//               </div>

//               {/* About Dropdown */}
//               <div className="relative">
//                 <button
//                   onClick={() => setIsAboutOpen(!isAboutOpen)}
//                   className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors"
//                 >
//                   ABOUT
//                   <ChevronDown className="ml-1 h-4 w-4" />
//                 </button>
//                 {isAboutOpen && (
//                   <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
//                     <a
//                       href="#our-story"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Our Story
//                     </a>
//                     <a
//                       href="#team"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Team
//                     </a>
//                     <a
//                       href="#certifications"
//                       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//                     >
//                       Certifications
//                     </a>
//                   </div>
//                 )}
//               </div>

//               <a
//                 href="#blogs"
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//               >
//                 BLOGS
//               </a>
//               <a
//                 href="#contact"
//                 className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
//               >
//                 CONTACT
//               </a>
//             </nav>

//             {/* Search and Phone */}
//             <div className="flex items-center space-x-4">
//               <button className="hidden md:block p-2 text-gray-500 hover:text-gray-700">
//                 <Search className="h-5 w-5" />
//               </button>

//               <a
//                 href="tel:1800-911-0070"
//                 className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center"
//               >
//                 <Phone className="h-4 w-4 mr-2" />
//                 <span className="hidden sm:inline">1800-911-0070</span>
//                 <span className="sm:hidden">Call</span>
//               </a>

//               {/* Mobile menu button */}
//               <button
//                 onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//                 className="md:hidden p-2 text-gray-500 hover:text-gray-700"
//               >
//                 {isMobileMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Navigation */}
//           {isMobileMenuOpen && (
//             <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
//               <div className="px-4 py-2 space-y-2">
//                 <a
//                   href="#home"
//                   className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
//                 >
//                   HOME
//                 </a>
//                 <div className="py-2">
//                   <button
//                     onClick={() => setIsProductsOpen(!isProductsOpen)}
//                     className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium"
//                   >
//                     PRODUCTS
//                     <ChevronDown className="ml-1 h-4 w-4" />
//                   </button>
//                   {isProductsOpen && (
//                     <div className="ml-4 mt-2 space-y-2">
//                       <a
//                         href="#air-conditioning"
//                         className="block py-1 text-sm text-gray-600"
//                       >
//                         Air Conditioning
//                       </a>
//                       <a
//                         href="#air-distribution"
//                         className="block py-1 text-sm text-gray-600"
//                       >
//                         Air Distribution
//                       </a>
//                       <a
//                         href="#pre-insulated-pipes"
//                         className="block py-1 text-sm text-gray-600"
//                       >
//                         Pre-Insulated Pipes
//                       </a>
//                     </div>
//                   )}
//                 </div>
//                 <div className="py-2">
//                   <button
//                     onClick={() => setIsAboutOpen(!isAboutOpen)}
//                     className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium"
//                   >
//                     ABOUT
//                     <ChevronDown className="ml-1 h-4 w-4" />
//                   </button>
//                   {isAboutOpen && (
//                     <div className="ml-4 mt-2 space-y-2">
//                       <a
//                         href="#our-story"
//                         className="block py-1 text-sm text-gray-600"
//                       >
//                         Our Story
//                       </a>
//                       <a
//                         href="#team"
//                         className="block py-1 text-sm text-gray-600"
//                       >
//                         Team
//                       </a>
//                       <a
//                         href="#certifications"
//                         className="block py-1 text-sm text-gray-600"
//                       >
//                         Certifications
//                       </a>
//                     </div>
//                   )}
//                 </div>
//                 <a
//                   href="#blogs"
//                   className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
//                 >
//                   BLOGS
//                 </a>
//                 <a
//                   href="#contact"
//                   className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
//                 >
//                   CONTACT
//                 </a>
//               </div>
//             </div>
//           )}
//         </div>
//       </header>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center">
//         {/* Background Image Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>

//         {/* Background Image */}
//         <div
//           className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//           style={{
//             backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800"><rect width="1200" height="800" fill="%23654321"/><circle cx="600" cy="400" r="150" fill="%234a5568" opacity="0.6"/><rect x="100" y="200" width="80" height="120" fill="%232d3748" opacity="0.8"/><rect x="200" y="180" width="60" height="140" fill="%232d3748" opacity="0.7"/><rect x="280" y="220" width="70" height="100" fill="%232d3748" opacity="0.6"/></svg>')`,
//           }}
//         ></div>

//         {/* Content */}
//         <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
//           <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
//             Indian Made, Globally Certified,{" "}
//             <span className="text-yellow-400">Universally Installed!</span>
//           </h1>

//           <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
//             Zeco Air Management System & Solutions
//           </p>

//           <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
//             Get Free Consultation
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//           <ChevronDown className="h-8 w-8 text-white" />
//         </div>
//       </section>

//       {/* SEO-friendly content structure */}
//       <main>
//         {/* This section would contain additional content */}
//         <section className="py-16 bg-white" id="about">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">
//                 Leading Air Management Solutions
//               </h2>
//               <p className="text-lg text-gray-600 max-w-3xl mx-auto">
//                 Zeco, part of Munters, delivers world-class air conditioning,
//                 air distribution, and pre-insulated pipe solutions. Our Indian
//                 manufacturing meets global standards for universal installation
//                 across industries.
//               </p>
//             </div>
//           </div>
//         </section>
//       </main>

//       {/* Footer would go here */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <p>&copy; 2025 Zeco Air Management Systems. Part of Munters Group.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

import React, { useState } from "react";
import { ChevronDown, Search, Phone, Menu, X } from "lucide-react";
import AboutSection from "../components/about/AboutSection.jsx";
import Footer from "../components/footer/Footer.jsx";
import ProductRange from "../components/productRange/ProductRange.jsx";
import ManufacturingShowcase from "../components/manufacturing/ManufacturingShowcase.jsx";
import TestimonialsSection from "../components/testimonials/TestimonialsSection.jsx";
import CertificationsCarousel from "../components/hero/Certification.jsx";
import AffiliatesBanner from "../components/hero/AffilatesBanner.jsx";

export default function HomePage() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        <title>
          Zeco Air Management System & Solutions - Indian Made, Globally
          Certified
        </title>

        {/* Header */}
        <header className="bg-white shadow-sm relative z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16 md:h-20">
              <div className="flex-shrink-0">
                <div className="flex items-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600">
                    ZECO
                  </div>
                  {/* <div className="ml-2 text-xs text-gray-600">
                  Part of Munters
                </div> */}
                </div>
              </div>

              <nav className="hidden md:flex space-x-8">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  HOME
                </a>

                {/* Products Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown("products")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
                    PRODUCTS
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  {hoveredDropdown === "products" && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      <a
                        href="#air-conditioning"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Air Conditioning
                      </a>
                      <a
                        href="#air-distribution"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Air Distribution
                      </a>
                      <a
                        href="#pre-insulated-pipes"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Pre-Insulated Pipes
                      </a>
                    </div>
                  )}
                </div>

                {/* About Dropdown */}
                <div
                  className="relative"
                  onMouseEnter={() => setHoveredDropdown("about")}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  <button className="flex items-center text-gray-700 hover:text-blue-600 font-medium transition-colors">
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

                <a
                  href="#blogs"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                >
                  BLOGS
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
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
                  <span className="hidden sm:inline">1800-911-0070</span>
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
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  >
                    HOME
                  </a>
                  <div className="py-2">
                    <button
                      onClick={() => setIsProductsOpen(!isProductsOpen)}
                      className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium"
                    >
                      PRODUCTS
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {isProductsOpen && (
                      <div className="ml-4 mt-2 space-y-2">
                        <a
                          href="#air-conditioning"
                          className="block py-1 text-sm text-gray-600"
                        >
                          Air Conditioning
                        </a>
                        <a
                          href="#air-distribution"
                          className="block py-1 text-sm text-gray-600"
                        >
                          Air Distribution
                        </a>
                        <a
                          href="#pre-insulated-pipes"
                          className="block py-1 text-sm text-gray-600"
                        >
                          Pre-Insulated Pipes
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="py-2">
                    <button
                      onClick={() => setIsAboutOpen(!isAboutOpen)}
                      className="flex items-center w-full text-left text-gray-700 hover:text-blue-600 font-medium"
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
                  <a
                    href="#blogs"
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                  >
                    BLOGS
                  </a>
                  <a
                    href="#contact"
                    className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
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
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('/your-factory-image.jpg')` }}
          ></div>

          <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-white text-2xl md:text-3xl font-extrabold mb-4 leading-tight tracking-wide">
              Indian Made, Globally Certified, Universally Installed!
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              Zeco Air Management System & Solutions
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
