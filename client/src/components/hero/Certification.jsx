import React, { useState, useEffect } from "react";

const CertificationsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const certifications = [
    {
      id: 1,
      name: "ETL Listed - Intertek",
      logo: "https://via.placeholder.com/120x80/000000/FFFFFF?text=ETL+Listed",
      alt: "ETL Listed certification by Intertek",
    },
    {
      id: 2,
      name: "ISO 9001:2015 Certified Company",
      logo: "https://via.placeholder.com/120x80/1E40AF/FFFFFF?text=ISO+9001",
      alt: "ISO 9001:2015 quality management certification",
    },
    {
      id: 3,
      name: "Innovative Bi-Analysis",
      logo: "https://via.placeholder.com/120x80/059669/FFFFFF?text=INNOVATIVE",
      alt: "Innovative Bi-Analysis certification",
    },
    {
      id: 4,
      name: "AHRI Certified",
      logo: "https://via.placeholder.com/120x80/0369A1/FFFFFF?text=AHRI",
      alt: "AHRI (Air-Conditioning, Heating, and Refrigeration Institute) certification",
    },
    {
      id: 5,
      name: "CBRI Certified",
      logo: "https://via.placeholder.com/120x80/1E40AF/FFFFFF?text=CBRI",
      alt: "CBRI (Central Building Research Institute) certification",
    },
  ];

  const totalSlides = Math.ceil(certifications.length / 3);

  useEffect(() => {
    if (!isAutoScrolling) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides, isAutoScrolling]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoScrolling(false);
    // Resume auto-scrolling after 10 seconds of inactivity
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setIsAutoScrolling(false);
    setTimeout(() => setIsAutoScrolling(true), 10000);
  };

  const getCurrentCertifications = () => {
    const startIndex = currentSlide * 3;
    return certifications.slice(startIndex, startIndex + 3);
  };

  return (
    <section
      className="w-full bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 py-12 px-4"
      aria-label="Company Certifications"
      role="region"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Title Section */}
          <div className="flex-shrink-0">
            <h2 className="text-white text-3xl lg:text-4xl font-bold mb-2">
              Certifications
            </h2>
            <div className="w-16 h-1 bg-white rounded-full"></div>
          </div>

          {/* Certifications Display */}
          <div className="flex-1 max-w-4xl">
            <div className="relative overflow-hidden">
              {/* Certifications Container */}
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                      {certifications
                        .slice(slideIndex * 3, slideIndex * 3 + 3)
                        .map((cert) => (
                          <div
                            key={cert.id}
                            className="flex flex-col items-center justify-center bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-6 hover:bg-opacity-20 transition-all duration-300 min-h-32"
                          >
                            <div className="w-24 h-16 bg-white rounded-lg flex items-center justify-center mb-3 shadow-lg">
                              <img
                                src={cert.logo}
                                alt={cert.alt}
                                className="max-w-20 max-h-12 object-contain"
                                loading="lazy"
                              />
                            </div>
                            <h3 className="text-white text-sm font-medium text-center leading-tight">
                              {cert.name}
                            </h3>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows - Hidden on mobile */}
              <div className="hidden md:block">
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                  aria-label="Previous certifications"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-200"
                  aria-label="Next certifications"
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-white scale-110"
                      : "bg-white bg-opacity-50 hover:bg-opacity-75"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* SEO Content */}
        <div className="sr-only">
          <h3>Our Certifications Include:</h3>
          <ul>
            {certifications.map((cert) => (
              <li key={cert.id}>{cert.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CertificationsCarousel;

// CertificationsCarousel.jsx
// import React from "react";
// import Slider from "react-slick";

// const certifications = [
//   {
//     src: "/certifications/etli.png",
//     alt: "ETL Listed Intertek Certification",
//   },
//   {
//     src: "/certifications/iso.png",
//     alt: "ISO 9001:2015 Certified Company",
//   },
//   {
//     src: "/certifications/bioanalysis.png",
//     alt: "Innovative Bioanalysis Certification",
//   },
//   {
//     src: "/certifications/ahri.png",
//     alt: "AHRI Certified",
//   },
//   {
//     src: "/certifications/cbril.png",
//     alt: "CBRI Central Building Research Institute",
//   },
// ];

// const CertificationsCarousel = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 1500,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="w-full bg-white py-8 px-4">
//       <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between max-w-7xl mx-auto">
//         {/* Left Side: Title */}
//         <div className="lg:w-1/4 w-full mb-6 lg:mb-0">
//           <h2 className="text-3xl font-bold text-white bg-blue-600 px-4 py-6 rounded-md shadow-lg">
//             Certifications
//           </h2>
//         </div>

//         {/* Right Side: Carousel */}
//         <div className="lg:w-3/4 w-full">
//           <Slider {...settings}>
//             {certifications.map((cert, index) => (
//               <div key={index} className="flex justify-center px-4">
//                 <img
//                   src={cert.src}
//                   alt={cert.alt}
//                   className="h-28 object-contain mx-auto"
//                   loading="lazy"
//                 />
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CertificationsCarousel;
