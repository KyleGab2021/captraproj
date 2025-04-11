import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Home.css";
//Partners
import matterOfTrust from "../assets/partners_logo/matteroftrust_sponsorlogo.png";
import sanRoqueHpp from "../assets/partners_logo/sanroquehpp_sponsorlogo.png";
import socialImpactOracle from "../assets/partners_logo/socialimpactoraclesuite_sponsorlogo.png";
import wtGardens from "../assets/partners_logo/wtgardens_sponsorlogo.png";
//Incubators/Accelerators
import ideya from "../assets/partners_logo/ideya_sponsorlogo.png";
import bpi from "../assets/partners_logo/bpisinag-foundation-bayanacademy_sponsorlogo.png";
import nexus from "../assets/partners_logo/newenergynexus_sponsorlogo.jpg";
import qbo from "../assets/partners_logo/qboinnovation_sponsorlogo.jpg";
import villgro from "../assets/partners_logo/villgrophilippines_sponsorlogo.jpg";
import bridge from "../assets/partners_logo/thebridgeinternational_sponsorlogo.jpg";
import undp from "../assets/partners_logo/undp-philippines_sponsorlogo.png";
import ateneo from "../assets/partners_logo/ateneobluenest_sponsorlogo.png";
//Products
import hairMatImage from "../assets/capilliproducthairmat.jpg";
import hairRugImage from "../assets/capilliproducthairrug.jpg";
import hairRug1 from "../assets/capilliproducthairrug1.png";
import hairRug2 from "../assets/capilliproducthairrug2.png";
import hairMat1 from "../assets/capilliproducthairmat1.jpg";
import hairMat2 from "../assets/capilliproducthairmat2.jpg";
//Background Images
import servicesBackground from "../assets/capilli_bgimages/capilliservicesbg.jpg";
import newsBackground from "../assets/capilli_bgimages/capillinewsbg.jpg";
import heroBackground1 from "../assets/capilli_bgimages/capillihomepagebg1.jpg";
import heroBackground2 from "../assets/capilli_bgimages/capillihomepagebg2.jpg";
import heroBackground3 from "../assets/capilli_bgimages/capillihomepagebg3.jpg";
import heroBackground4 from "../assets/capilli_bgimages/capillihomepagebg4.jpg";
import heroBackground5 from "../assets/capilli_bgimages/capillihomepagebg5.jpg";
import aboutBackground from "../assets/capilli_bgimages/capilliaboutpagebg.jpg";
import advocacyBackground from "../assets/capilli_bgimages/capilliadvocacybg.jpg";
import advocacyImg1 from "../assets/capilli_bgimages/capilliadvocacyimg1.jpg";
import advocacyImg2 from "../assets/capilli_bgimages/capilliadvocacyimg2.jpg";
import advocacyImg3 from "../assets/capilli_bgimages/capilliadvocacyimg3.jpg";
import advocacyImg4 from "../assets/capilli_bgimages/capilliadvocacyimg4.jpg";
//Miscellaneous
import ContactModal from "../components/ContactModal";
import logoImage from "../assets/capillitradinglogotext.png";

// Product Image Carousel Component
const ProductImageCarousel = ({ selectedProduct }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % selectedProduct.images.length
    );
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="relative w-full h-full">
        {selectedProduct.images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`${selectedProduct.title} - View ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Left Arrow */}
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 z-20"
          aria-label="Previous image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-200 z-20"
          aria-label="Next image"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Image Indicator Dots */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 z-20">
          {selectedProduct.images.map((_, index) => (
            <button
              key={index}
              onClick={(e) => {
                e.stopPropagation();
                setCurrentImageIndex(index);
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentImageIndex
                  ? "bg-white w-4 shadow-md"
                  : "bg-white/50 hover:bg-white/80"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
        <h3 className="text-2xl font-bold">{selectedProduct.title}</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedProduct.features.slice(0, 3).map((feature, idx) => (
            <span
              key={idx}
              className="px-2 py-1 bg-green-600 bg-opacity-80 rounded-full text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

function Home() {
  const [isIntersecting, setIsIntersecting] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);
  const [activePartnerTab, setActivePartnerTab] = useState("partners");
  const [currentBgSlide, setCurrentBgSlide] = useState(0);
  const carouselRef = useRef(null);

  const heroBackgrounds = [
    heroBackground1,
    heroBackground2,
    heroBackground3,
    heroBackground4,
    heroBackground5,
  ];

  const handlePartnerClick = (partner) => {
    setSelectedPartner(partner);
    setIsPartnerModalOpen(true);
  };

  const advocacyImages = [
    advocacyImg1,
    advocacyImg2,
    advocacyImg3,
    advocacyImg4,
  ];

  const incubatorLogos = [
    {
      src: ideya,
      alt: "",
      description:
        "iDEYA is a driven set of startup enablers aiming to change the world through ideas and innovation. ",
      website: "https://ideya.msuiit.edu.ph",
      category: "Innovation Partner",
    },
    {
      src: bpi,
      alt: "",
      description:
        "BPI Sinag Foundation x Bayan Academy empowers social enterprises through capacity building and financial support to create sustainable impact.",
      website: "https://www.bpi.com.ph/foundation",
      category: "Financial Support Partner",
    },
    {
      src: qbo,
      alt: "",
      description:
        "QBO Innovation Hub is the Philippines' first public-private partnership platform for Filipino startups.",
      website: "https://www.qbo.com.ph/",
      category: "Innovation Hub",
    },
    {
      src: bridge,
      alt: "",
      description:
        "The Bridge International accelerates the growth of startups through mentorship and market access.",
      website: "https://thebridgeinternational.com/",
      category: "International Accelerator",
    },
    {
      src: undp,
      alt: "",
      description:
        "UNDP Philippines works to achieve sustainable development through innovation and partnerships.",
      website: "https://www.ph.undp.org/",
      category: "Development Partner",
    },
    {
      src: villgro,
      alt: "",
      description:
        "Villgro Philippines supports and invests in early-stage social enterprises that are building innovative solutions.",
      website: "https://villgrophilippines.org/",
      category: "Social Enterprise Incubator",
    },
    {
      src: ateneo,
      alt: "",
      description:
        "Ateneo Blue Nest nurtures student entrepreneurs and startup founders through mentorship and resources.",
      website: "https://www.ateneo.edu/",
      category: "Academic Incubator",
    },
    {
      src: nexus,
      alt: "",
      description:
        "New Energy Nexus supports clean energy entrepreneurs with funding and acceleration programs.",
      website: "https://www.newenergynexus.com/",
      category: "Energy Innovation Partner",
    },
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % advocacyImages.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(slideInterval);
  }, [advocacyImages.length]); // Added advocacyImages.length as dependency

  useEffect(() => {
    const bgInterval = setInterval(() => {
      setCurrentBgSlide((prev) => (prev + 1) % heroBackgrounds.length);
    }, 7000); // slide animation time interval

    return () => clearInterval(bgInterval);
  }, [heroBackgrounds.length]);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      setIsIntersecting((prev) => ({
        ...prev,
        [entry.target.dataset.section]: entry.isIntersecting,
      }));
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [handleIntersection]);

  const sponsorLogos = [
    {
      src: matterOfTrust,
      alt: "",
      description:
        "Global nonprofit organization dedicated to linking surplus resources with unmet needs, specializing in ecological solutions and waste management.",
      website: "https://matteroftrust.org",
      category: "Environmental Partner",
    },
    {
      src: sanRoqueHpp,
      alt: "",
      description:
        "Handmade products meticulously designed in hopes of bringing families closer together.",
      website: "https://www.facebook.com/SanRoqueHandmade/",
      category: "Energy Partner",
    },
    {
      src: socialImpactOracle,
      alt: "",
      description:
        "Technology solutions provider specializing in software for social enterprises and environmental initiatives.",
      website: "https://www.oracle.com/ph/social-impact",
      category: "Technology Partner",
    },
    {
      src: wtGardens,
      alt: "",
      description:
        "WTG Development Corporation offers general contracting, and specializes in landscaping and construction management, as well as design-build services for projects of all sizes. They provide services for residential estates, for commercial and large-scale projects including shopping centers, subdivisions, hotels, industrial parks, and schools.",
      website: "https://landscape.ph",
      category: "Horticulture Partner",
    },
    {
      src: ideya,
      alt: "",
      description:
        "iDEYA is a driven set of startup enablers aiming to change the world through ideas and innovation. ",
      website: "https://ideya.msuiit.edu.ph",
      category: "Innovation Partner",
    },
  ];

  const newsItems = [
    {
      date: "March 15, 2024",
      category: "Milestone",
      title: "Capilli Trading Expands to Visayas Region",
      excerpt:
        "Capilli Trading announces expansion of operations to key cities in the Visayas region, marking a significant milestone in our growth.",
      imageUrl: aboutBackground, // Replace with actual news image
    },
    {
      date: "March 1, 2024",
      category: "Partnership",
      title: "New Partnership with Local Salons",
      excerpt:
        "We're excited to announce our partnership with 50+ local salons to implement sustainable hair waste management practices.",
      imageUrl: aboutBackground, // Replace with actual news image
    },
    {
      date: "February 15, 2024",
      category: "Achievement",
      title: "Environmental Impact Award 2024",
      excerpt:
        "Capilli Trading receives recognition for outstanding contribution to environmental sustainability.",
      imageUrl: aboutBackground, // Replace with actual news image
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          {heroBackgrounds.map((bg, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentBgSlide === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={bg}
                alt={`Background ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-black/80"></div>
            </div>
          ))}

          {/* Modified Slide indicators - now vertical and on the left */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 flex flex-col space-y-3 z-20">
            {heroBackgrounds.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBgSlide(index)}
                className={`h-8 transition-all duration-300 
                  ${currentBgSlide === index 
                    ? "w-2.5 bg-white" 
                    : "w-2 bg-white/50 hover:bg-white/80"
                  } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <img
            src={logoImage}
            alt="Capilli Trading Logo"
            className="max-h-72 md:max-h-80 lg:max-h-96 mx-auto mb-8 float-animation"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Walang sayang sa <span className="text-[#047857]">buhok</span> mo.
          </h1>
          <p className="text-xl md:text-2xl lg:text-2xl text-gray-200 mb-10">
            Hair as a product. Hair as an innovation. Hair as a solution.
          </p>
        </div>
      </section>

      {/* Modernized Advocacy Section */}
      <section
        data-section="advocacy"
        className={`py-24 relative overflow-hidden transition-all duration-1000 ${
          isIntersecting["advocacy"] ? "opacity-100" : "opacity-70"
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 83, 45, 0.95), rgba(20, 83, 45, 0.85)), url(${advocacyBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Advocacy
            </h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-gray-200 mt-8 max-w-2xl mx-auto text-lg">
              Transforming waste into sustainable solutions while empowering
              communities and protecting our environment.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* Left column - Advocacy vision and principles */}
            <div
              className={`lg:w-1/2 transition-all duration-700 flex flex-col gap-8 ${
                isIntersecting["advocacy"]
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              {/* Mission Card */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="bg-green-600 py-4 px-6">
                  <div className="flex items-center">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <svg
                        className="w-6 h-6 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path
                          fillRule="evenodd"
                          d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Our Vision</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We envision becoming the leading research, trading, and
                    by-product manufacturing company for waste human hair in the
                    Philippines. Our foundation is built on:
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        <strong>Community Impact</strong> - Creating positive
                        socio-economic outcomes
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        <strong>Innovation</strong> - Developing breakthrough
                        sustainable solutions
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-5 h-5 text-green-500 mt-1 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        <strong>Sustainability</strong> - Reducing waste through
                        innovative recycling
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                  <div className="flex items-center">
                    <div className="flex-grow flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-green-600"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                    </div>
                    <button
                      onClick={() => {
                        /* Add your action here */
                      }}
                      className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center"
                    >
                      Learn more
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Advocacy image and values */}
            <div
              className={`lg:w-1/2 transition-all duration-700 ${
                isIntersecting["advocacy"]
                  ? "translate-x-0 opacity-100"
                  : "translate-x-10 opacity-0"
              }`}
            >
              <div className="relative h-full">
                {/* Main image with overlay */}
                <div className="rounded-xl overflow-hidden shadow-2xl h-full">
                  <div className="relative h-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-green-900 via-green-800/50 to-transparent opacity-75"></div>
                    <div className="relative h-full overflow-hidden">
                      {advocacyImages.map((img, index) => (
                        <div
                          key={index}
                          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                            currentSlide === index ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          <img
                            src={img}
                            alt={`Advocacy ${index + 1}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
                      <h4 className="text-xl font-bold mb-2">
                        Sustainability in Action
                      </h4>
                      <p className="text-gray-100">
                        Our innovative approach converts waste hair into
                        valuable resources, reducing environmental impact while
                        creating sustainable products.
                      </p>
                    </div>

                    {/* Slide indicators */}
                    <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                      {advocacyImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentSlide(index)}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            currentSlide === index
                              ? "bg-white w-4"
                              : "bg-white/50"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section
        data-section="products"
        className={`py-20 bg-green-50 transition-all duration-1000 relative ${
          isIntersecting["products"] ? "opacity-100" : "opacity-70"
        }`}
      >
        {/* Hair-themed background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="productHairPattern"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
              patternTransform="scale(1.5) rotate(45)"
            >
              {/* Wavy hair strands */}
              <path
                fill="none"
                stroke="#10A54A"
                strokeWidth="1.2"
                d="M10,30 C20,10 30,50 40,30 C50,10 60,50 70,30"
              />
              <path
                fill="none"
                stroke="#10A54A"
                strokeWidth="1.2"
                d="M0,60 C10,40 20,80 30,60 C40,40 50,80 60,60"
              />
              {/* Curly hair elements */}
              <path
                fill="none"
                stroke="#A2CB70"
                strokeWidth="1"
                d="M15,85 C25,65 5,65 15,45 C25,25 5,25 15,5"
              />
              <path
                fill="none"
                stroke="#A2CB70"
                strokeWidth="1"
                d="M75,95 C85,75 65,75 75,55 C85,35 65,35 75,15"
              />
            </pattern>
            <rect
              x="0"
              y="0"
              width="100%"
              height="100%"
              fill="url(#productHairPattern)"
            />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Products
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Creating a positive impact — one hair strand at a time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                image: hairRugImage,
                title: "Hair Rugs",
                description:
                  "Eco-friendly rugs made from recycled human hair, offering durability and unique aesthetic appeal.",
                longDescription:
                  "Our Hair Rugs are crafted from 100% recycled human hair, providing exceptional durability and a unique aesthetic appeal. These rugs are not only environmentally friendly but also possess natural oil-absorbing properties, making them perfect for areas prone to spills. Each rug undergoes a thorough cleaning and sanitizing process before being carefully woven into beautiful, functional pieces for your home or business.",
                features: [
                  "Eco-friendly",
                  "Oil-absorbing",
                  "Durable",
                  "Non-slip",
                  "Unique texture",
                ],
                sizes: ["Small (8cm)", "Medium (15cm)", "Large (23cm)"],
                careInstructions:
                  "Clean with mild soap and water. Avoid harsh chemicals. Allow to air dry completely.",
                shopeeLink: "https://shopee.ph/placeholder-hairrugs",
                images: [hairRugImage, hairRug1, hairRug2],
                subcategories: [
                  {
                    image: hairRug1,
                    name: "Round Rugs",
                  },
                  {
                    image: hairRug2,
                    name: "Rectangular Rugs",
                  },
                ],
              },
              {
                image: hairMatImage,
                title: "Grow Mats",
                description:
                  "Made from 100% sanitized waste human hair that are cut into circular pieces and used to help retain moisture content in soil, and it also releases nutrients that are food for the plants.",
                longDescription:
                  "Our Grow Mats are made from 100% sanitized waste human hair, carefully processed into circular pieces that help retain moisture in soil. These innovative mats slowly release essential nutrients like nitrogen, making them an excellent natural fertilizer for plants. Perfect for both indoor and outdoor gardens, our Grow Mats support sustainable agriculture while reducing waste.",
                features: [
                  "Nitrogen-Rich",
                  "Natural Fertilizer",
                  "Retains Moisture",
                  "Supports Plant Growth",
                  "Sustainable Organic Waste",
                ],
                sizes: ["Small (8cm)", "Medium (15cm)", "Large (23cm)"],
                careInstructions:
                  "Place around plants and cover lightly with soil. Water as normal. Replace every 6-8 months for optimal results.",
                shopeeLink:
                  "https://shopee.ph/2-pcs-15cm-Mulching-Mats-for-Plants-Medium-i.1111051754.22385938432",
                images: [hairMatImage, hairMat1, hairMat2],
                subcategories: [
                  {
                    image: hairMat1,
                    name: "Standard Mats",
                  },
                  {
                    image: hairMat2,
                    name: "Custom Mats",
                  },
                ],
              },
            ].map((product, index) => (
              <div
                key={index}
                onClick={() => {
                  setSelectedProduct(product);
                  setIsProductModalOpen(true);
                }}
                className={`bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 card-hover flex flex-col ${
                  isIntersecting["products"]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                } cursor-pointer hover:shadow-xl`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="img-hover-zoom">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-80 object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 mb-3">
                      {product.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>

                    {/* Subcategories Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {product.subcategories.map((sub, idx) => (
                        <div
                          key={idx}
                          className="group relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                        >
                          <img
                            src={sub.image}
                            alt={sub.name}
                            className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <p className="text-white font-medium p-4 w-full text-center">
                              {sub.name}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Detail Modal */}
        {isProductModalOpen && selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto relative animate-fadeIn">
              <button
                onClick={() => setIsProductModalOpen(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-md"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Product Image Carousel */}
                <div className="md:w-2/5 relative overflow-hidden rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-bl-2xl h-[300px] md:h-auto">
                  <ProductImageCarousel selectedProduct={selectedProduct} />
                </div>

                {/* Product Details */}
                <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold text-gray-800 md:hidden mb-4">
                      {selectedProduct.title}
                    </h3>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        Description
                      </h4>
                      <p className="text-gray-600">
                        {selectedProduct.longDescription}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        Features
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {selectedProduct.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <svg
                              className="w-5 h-5 text-green-500 mr-2 mt-0.5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        Available Sizes
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProduct.sizes.map((size, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gray-100 rounded-lg text-gray-700 text-sm"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-700 mb-2">
                        Care Instructions
                      </h4>
                      <p className="text-gray-600">
                        {selectedProduct.careInstructions}
                      </p>
                    </div>
                  </div>

                  <div className="mt-auto pt-4 border-t border-gray-200 flex flex-col sm:flex-row gap-4">
                    <a
                      href={selectedProduct.shopeeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-6 py-3 bg-orange-500 text-white font-medium rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9v-4H7V9h2V8h2v1h2v1h-3v1h3v5h-2v-1zm5-5h-1v4h-2V8h4v1h-1v2z" />
                      </svg>
                      Buy on Shopee
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Services Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 83, 45, 0.95), rgba(20, 83, 45, 0.85)), url(${servicesBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h2>
            <div className="w-24 h-1 bg-green-300 mx-auto mb-8"></div>
            <p className="text-gray-100 max-w-2xl mx-auto">
              Turn your waste hair into valuable resources with our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Modal 1 - What We Want */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center group hover:scale-105 hover:bg-green-600 hover:shadow-xl">
              <div className="bg-green-100 p-4 rounded-full mb-6 transition-colors group-hover:bg-white">
                <svg
                  className="w-8 h-8 text-green-600 transition-colors group-hover:text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors group-hover:text-white">
                WHAT DO WE WANT?
              </h3>
              <h4 className="text-lg font-semibold text-green-600 mb-4 transition-colors group-hover:text-white">
                Requirements
              </h4>
              <div className="flex-grow flex items-center">
                <p className="text-gray-600 transition-colors group-hover:text-white">
                  The hair should measure at least 1-24 inches in length to meet the
                  requirements for upcycling and reuse.
                </p>
              </div>
            </div>

            {/* Modal 2 - What You Get */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center group hover:scale-105 hover:bg-green-600 hover:shadow-xl">
              <div className="bg-green-100 p-4 rounded-full mb-6 transition-colors group-hover:bg-white">
                <svg
                  className="w-8 h-8 text-green-600 transition-colors group-hover:text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors group-hover:text-white">
                WHAT DO YOU GET?
              </h3>
              <h4 className="text-lg font-semibold text-green-600 mb-4 transition-colors group-hover:text-white">
                Incentives
              </h4>
              <div className="flex-grow flex items-center">
                <p className="text-gray-600 transition-colors group-hover:text-white">
                  If you have a business that involves human hair supply, then
                  donate exclusively to Capilli and receive an incentive ranging from
                  ₱8.00 to ₱6,500.00 per kilo, depending on hair quality and
                  length.
                </p>
              </div>
            </div>

            {/* Modal 3 - How to Send */}
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg transition-all duration-300 p-8 flex flex-col items-center text-center group hover:scale-105 hover:bg-green-600 hover:shadow-xl">
              <div className="bg-green-100 p-4 rounded-full mb-6 transition-colors group-hover:bg-white">
                <svg
                  className="w-8 h-8 text-green-600 transition-colors group-hover:text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2 transition-colors group-hover:text-white">
                HOW DO YOU SEND IT?
              </h3>
              <h4 className="text-lg font-semibold text-green-600 mb-4 transition-colors group-hover:text-white">
                Contacts
              </h4>
              <div className="flex-grow flex items-center">
                <p className="text-gray-600 transition-colors group-hover:text-white">
                  If you're located in Iligan City or nearby areas, feel free to reach out to our Business Development Executive, Jayralee, at 0997-993-9451.
                  For those outside Iligan City, please contact our Business Development Manager, Shareiz, at 0935-935-1383.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Incubators Section */}
      <section
        data-section="partners"
        className={`py-20 bg-gray-100 transition-all duration-1000 ${
          isIntersecting["partners"] ? "opacity-100" : "opacity-70"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
              Our Partners & Incubators
            </h2>

            {/* Tab Buttons */}
            <div className="inline-flex rounded-lg bg-white/10 p-1 backdrop-blur-sm shadow-lg mb-8">
              <button
                onClick={() => setActivePartnerTab("partners")}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activePartnerTab === "partners"
                    ? "bg-green-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Partners
              </button>
              <button
                onClick={() => setActivePartnerTab("incubators")}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activePartnerTab === "incubators"
                    ? "bg-green-600 text-white shadow-lg"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                Incubators
              </button>
            </div>

            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              {activePartnerTab === "partners"
                ? "Working together with these amazing organizations to create positive change"
                : "Supported by leading organizations that help us grow and innovate"}
            </p>
          </div>

          {/* Partners Tab Content */}
          <div
            className={`${
              activePartnerTab === "partners" ? "block" : "hidden"
            }`}
          >
            <div className="carousel-container relative">
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

              <div
                ref={carouselRef}
                className="carousel-slide auto-scrolling"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{
                  animationPlayState: isHovering ? "paused" : "running",
                }}
              >
                {/* First set of partner logos */}
                <div className="logo-group">
                  {sponsorLogos.map((logo, index) => (
                    <div
                      key={`partner-1-${index}`}
                      className="sponsor-logo cursor-pointer"
                      onClick={() => handlePartnerClick(logo)}
                    >
                      <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24">
                        <img
                          src={logo.src}
                          alt={logo.alt || `Partner ${index + 1}`}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duplicate set of partner logos */}
                <div className="logo-group">
                  {sponsorLogos.map((logo, index) => (
                    <div
                      key={`partner-2-${index}`}
                      className="sponsor-logo cursor-pointer"
                      onClick={() => handlePartnerClick(logo)}
                    >
                      <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24">
                        <img
                          src={logo.src}
                          alt={logo.alt || `Partner ${index + 1}`}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Incubators Tab Content */}
          <div
            className={`${
              activePartnerTab === "incubators" ? "block" : "hidden"
            }`}
          >
            <div className="carousel-container relative">
              <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
              <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

              <div
                className="carousel-slide auto-scrolling"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                style={{
                  animationPlayState: isHovering ? "paused" : "running",
                }}
              >
                {/* First set of incubator logos */}
                <div className="logo-group">
                  {incubatorLogos.map((logo, index) => (
                    <div
                      key={`incubator-1-${index}`}
                      className="sponsor-logo cursor-pointer"
                      onClick={() => handlePartnerClick(logo)}
                    >
                      <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24">
                        <img
                          src={logo.src}
                          alt={logo.alt || `Incubator ${index + 1}`}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Duplicate set of incubator logos */}
                <div className="logo-group">
                  {incubatorLogos.map((logo, index) => (
                    <div
                      key={`incubator-2-${index}`}
                      className="sponsor-logo cursor-pointer"
                      onClick={() => handlePartnerClick(logo)}
                    >
                      <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center h-24">
                        <img
                          src={logo.src}
                          alt={logo.alt || `Incubator ${index + 1}`}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section
        data-section="news"
        className={`py-20 bg-[#047857] relative transition-all duration-1000 ${
          isIntersecting["news"] ? "opacity-100" : "opacity-70"
        }`}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 83, 45, 0.95), rgba(20, 83, 45, 0.85)), url(${newsBackground})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Latest News
            </h2>
            <div className="w-24 h-1 bg-green-300 mx-auto"></div>
            <p className="text-gray-100 mt-6 max-w-2xl mx-auto">
              Stay updated with Capilli's latest business ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isIntersecting["news"]
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="relative h-48">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-600 text-white text-sm font-medium rounded-full">
                      {news.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <button
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                    onClick={() => {
                      /* Add your read more action here */
                    }}
                  >
                    Read More
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section*/}
      <section
        id="contact"
        data-section="contact"
        className={`py-20 relative overflow-hidden transition-all duration-1000 ${
          isIntersecting["contact"] ? "opacity-100" : "opacity-70"
        }`}
      >
        {/* Simple white background */}
        <div className="absolute inset-0 bg-white"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
              Have questions about our sustainable hair products or want to
              collaborate? Reach out to us today.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Impact & Mission Side - Replacing redundant contact info */}
              <div
                className={`w-full md:w-2/5 bg-gradient-to-br from-green-700 to-green-900 p-8 md:p-12 text-white transition-all duration-700 relative overflow-hidden ${
                  isIntersecting["contact"]
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-10 opacity-0"
                }`}
              >
                <div className="relative z-10 h-full">
                  <div className="flex flex-col h-full justify-between">
                    <h4 className="text-lg font-semibold mb-8">
                      Sustainable Hair Solutions
                    </h4>

                    {/* Impact Statistics */}
                    <div className="flex flex-col space-y-6">
                      <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                        <span className="block text-4xl font-bold mb-2">
                          1.2M+
                        </span>
                        <span className="text-sm text-gray-200">
                          Pounds of Hair Recycled
                        </span>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                        <span className="block text-4xl font-bold mb-2">
                          85%
                        </span>
                        <span className="text-sm text-gray-200">
                          Waste Reduction
                        </span>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                        <span className="block text-4xl font-bold mb-2">5</span>
                        <span className="text-sm text-gray-200">Partners</span>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-6 text-center">
                        <span className="block text-4xl font-bold mb-2">
                          24
                        </span>
                        <span className="text-sm text-gray-200">
                          Communities Supported
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form Side */}
              <div
                className={`w-full md:w-3/5 p-8 md:p-12 transition-all duration-700 ${
                  isIntersecting["contact"]
                    ? "translate-x-0 opacity-100"
                    : "translate-x-10 opacity-0"
                }`}
              >
                <form className="flex flex-col h-full">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">
                    Send A Message
                  </h3>

                  {/* Name field with floating label */}
                  <div className="form-group">
                    <input
                      type="text"
                      id="name"
                      className="form-control peer"
                      placeholder=" "
                    />
                    <label htmlFor="name" className="floating-label">
                      Name
                    </label>
                  </div>

                  {/* Email field with floating label */}
                  <div className="form-group">
                    <input
                      type="email"
                      id="email"
                      className="form-control peer"
                      placeholder=" "
                    />
                    <label htmlFor="email" className="floating-label">
                      Email Address
                    </label>
                  </div>

                  {/* Topic selection with floating label */}
                  <div className="form-group">
                    <select
                      id="topic"
                      className="form-control peer"
                      defaultValue=""
                    >
                      <option value="" disabled></option>
                      <option value="products">Hair Products</option>
                      <option value="partnership">Business Partnership</option>
                      <option value="sustainability">
                        Sustainability Programs
                      </option>
                      <option value="other">Other Inquiry</option>
                    </select>
                    <label htmlFor="topic" className="floating-label">
                      Select Topic
                    </label>
                  </div>

                  {/* Message field with floating label */}
                  <div className="form-group">
                    <textarea
                      id="message"
                      rows="5"
                      className="form-control peer"
                      placeholder=" "
                    ></textarea>
                    <label htmlFor="message" className="floating-label">
                      Message
                    </label>
                  </div>

                  {/* Submit button container - Modified classes */}
                  <div className="mt-auto self-end">
                    <button
                      type="submit"
                      className="flex items-center justify-center px-8 py-4 bg-green-600 text-white text-lg font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg"
                    >
                      <svg
                        className="w-8 h-8 mr-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        ></path>
                      </svg>
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Message Icon */}
      <button
        onClick={() => setIsContactModalOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
        aria-label="Contact Us"
      >
        <svg
          className="w-6 h-6 group-hover:scale-110 transform transition-transform duration-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
          />
        </svg>
      </button>

      {/* Add Partner Modal */}
      {isPartnerModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-2xl w-full max-w-lg relative animate-scale-in mx-4">
            <button
              onClick={() => setIsPartnerModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 shadow-md hover:scale-110 transition-all duration-200"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-xl flex items-center justify-center w-24 h-24 shrink-0">
                  <img
                    src={selectedPartner?.src}
                    alt={selectedPartner?.alt || "Partner logo"}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <span className="text-green-600 text-sm font-medium block mb-2">
                    {selectedPartner?.category || "Partner Organization"}
                  </span>
                  <div className="border-t border-gray-200 pt-4 mt-2">
                    <p className="text-gray-600">
                      {selectedPartner?.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center sm:justify-start">
                <a
                  href={selectedPartner?.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
                >
                  Visit Website/Facebook Link
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M10 6H6a2 2 0 00-2 2v7m16-7v7a2 2 0 01-2 2h-7m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default Home;
