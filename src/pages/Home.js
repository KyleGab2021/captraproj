import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Home.css';
// Keep all your existing imports
import hairMatImage from '../assets/capilliproducthairmat.jpg';
import hairRugImage from '../assets/capilliproducthairrug.jpg';
import logoImage from '../assets/capillitradinglogotext.png';
import advocacyImage from '../assets/capilliadvocacyimg1.jpg';
import ateneoBluenest from '../assets/ateneobluenest_sponsorlogo.png';
import automobilico from '../assets/automobilico_sponsorlogo.png';
import eccp from '../assets/eccp_sponsorlogo.png';
import fibers from '../assets/fibers_sponsorlogo.png';
import ideya from '../assets/ideya_sponsorlogo.png';
import matterOfTrust from '../assets/matteroftrust_sponsorlogo.png';
import motolite from '../assets/motolite_sponsorlogo.png';
import plantbox from '../assets/plantbox_sponsorlogo.png';
import proyektoPilipinas from '../assets/proyektopilipinas_sponsorlogo.png';
import rayzorBarbershop from '../assets/rayzorbarbershop_sponsorlogo.png';
import sanRoqueHpp from '../assets/sanroquehpp_sponsorlogo.png';
import socialImpactOracle from '../assets/socialimpactoraclesuite_sponsorlogo.png';
import spiPower from '../assets/spipower_sponsorlogo.png';
import steagstate from '../assets/steagstate_sponsorlogo.png';
import wtGardens from '../assets/wtgardens_sponsorlogo.png';
import heroBackground from '../assets/capillihomepagebg.jpg';
import aboutBackground from '../assets/capillihomepagebg.jpg';

function Home() {
  const [isIntersecting, setIsIntersecting] = useState({});
  const [isHovering, setIsHovering] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const carouselRef = useRef(null);

  const handleIntersection = useCallback((entries) => {
    entries.forEach((entry) => {
      setIsIntersecting(prev => ({
        ...prev,
        [entry.target.dataset.section]: entry.isIntersecting
      }));
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, { threshold: 0.2 });
    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [handleIntersection]);

  // All your existing code remains the same
  const sponsorLogos = [
    { src: ateneoBluenest, alt: 'Ateneo Blue Nest' },
    { src: automobilico, alt: 'Automobilico' },
    { src: eccp, alt: 'ECCP' },
    { src: fibers, alt: 'Fibers' },
    { src: ideya, alt: 'Ideya' },
    { src: matterOfTrust, alt: 'Matter of Trust' },
    { src: motolite, alt: 'Motolite' },
    { src: plantbox, alt: 'Plantbox' },
    { src: proyektoPilipinas, alt: 'Proyekto Pilipinas' },
    { src: rayzorBarbershop, alt: 'Rayzor Barbershop' },
    { src: sanRoqueHpp, alt: 'San Roque HPP' },
    { src: socialImpactOracle, alt: 'Social Impact Oracle Suite' },
    { src: steagstate, alt: 'Steag State Power Inc.' },
    { src: spiPower, alt: 'SPI Power' },
    { src: wtGardens, alt: 'WT Gardens' }
  ];

  // Product subcategories
  const productSubcategories = {
    'Hair Rugs': ['Round Rug', 'Rectangular Rug', 'Custom Size Rug'],
    'Hair Plant Mats': ['Small Mat', 'Medium Mat', 'Large Mat', 'Custom Size Mat']
  };

  const handleProductClick = (productTitle) => {
    setSelectedProduct(productTitle);
    setShowModal(true);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setShowModal(false);
  };

  // Product Inquiry Modal Component
  const ProductModal = () => {
    if (!showModal) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <h3 className="text-2xl font-bold text-gray-800 mb-4">
            {selectedProduct} Inquiry
          </h3>

          <form onSubmit={handleSubmitForm} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Product Variant
              </label>
              <select
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                required
              >
                <option value="">Select a variant</option>
                {productSubcategories[selectedProduct]?.map((subcategory) => (
                  <option key={subcategory} value={subcategory}>
                    {subcategory}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Quantity
              </label>
              <input
                type="number"
                min="1"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Additional Notes
              </label>
              <textarea
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    );
  };

  // Modify the News Section to integrate Facebook API for posting, updating, and deleting news articles from Facebook page to the web application. 
  // Here is the Link: https://developers.facebook.com/docs/pages-api/overview 
  const newsItems = [
    {
      date: "March 15, 2024",
      category: "Milestone",
      title: "Capilli Trading Expands to Visayas Region",
      excerpt: "Capilli Trading announces expansion of operations to key cities in the Visayas region, marking a significant milestone in our growth.",
      imageUrl: aboutBackground // Replace with actual news image
    },
    {
      date: "March 1, 2024",
      category: "Partnership",
      title: "New Partnership with Local Salons",
      excerpt: "We're excited to announce our partnership with 50+ local salons to implement sustainable hair waste management practices.",
      imageUrl: aboutBackground // Replace with actual news image
    },
    {
      date: "February 15, 2024",
      category: "Achievement",
      title: "Environmental Impact Award 2024",
      excerpt: "Capilli Trading receives recognition for outstanding contribution to environmental sustainability.",
      imageUrl: aboutBackground // Replace with actual news image
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center px-4">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroBackground} 
            alt="Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <img 
            src={logoImage} 
            alt="Capilli Trading Logo" 
            className="max-h-48 md:max-h-56 lg:max-h-64 mx-auto mb-8 float-animation"
          />
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Walang sayang ang <span className="text-[#047857]">buhok</span> mo.
          </h1>
          <p className="text-xl md:text-2xl lg:text-2xl text-gray-200 mb-10">
            Hair as a product. Hair as an innovation. Hair as a solution.
          </p>
        </div>
      </section>

      {/* Modernized Advocacy Section */}
      <section 
        data-section="advocacy"
        className={`py-24 relative overflow-hidden transition-all duration-1000 ${isIntersecting['advocacy'] ? 'opacity-100' : 'opacity-70'}`}
      >
        {/* Gradient background with subtle pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-800 to-green-900">
          <div className="absolute inset-0 opacity-5">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="sustainPattern" patternUnits="userSpaceOnUse" width="80" height="80" patternTransform="scale(2) rotate(0)">
                <path fill="none" stroke="white" strokeWidth="1" d="M20,10 Q30,5 40,10 T60,10 M20,30 Q30,25 40,30 T60,30 M20,50 Q30,45 40,50 T60,50 M20,70 Q30,65 40,70 T60,70" />
                <circle cx="10" cy="10" r="2" fill="white" opacity="0.5" />
                <circle cx="70" cy="10" r="2" fill="white" opacity="0.5" />
                <circle cx="10" cy="70" r="2" fill="white" opacity="0.5" />
                <circle cx="70" cy="70" r="2" fill="white" opacity="0.5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#sustainPattern)" />
            </svg>
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Advocacy</h2>
            <div className="w-24 h-1 bg-white mx-auto"></div>
            <p className="text-gray-200 mt-8 max-w-2xl mx-auto text-lg">
              Transforming waste into sustainable solutions while empowering communities and protecting our environment.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-stretch gap-12">
            {/* Left column - Advocacy vision and principles */}
            <div className={`lg:w-1/2 transition-all duration-700 flex flex-col gap-8 ${isIntersecting['advocacy'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              {/* Mission Card */}
              <div className="bg-white rounded-xl shadow-xl overflow-hidden flex flex-col h-full transform transition-all hover:-translate-y-1 hover:shadow-2xl">
                <div className="bg-green-600 py-4 px-6">
                  <div className="flex items-center">
                    <div className="bg-white rounded-full p-2 mr-3">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white">Our Vision</h3>
                  </div>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    We envision becoming the leading research, trading, and by-product manufacturing company
                    for waste human hair in the Philippines. Our foundation is built on:
                  </p>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span><strong>Environmental Sustainability</strong> - Reducing waste through innovative recycling</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span><strong>Community Impact</strong> - Creating positive socio-economic outcomes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-green-500 mt-1 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span><strong>Innovation</strong> - Developing breakthrough sustainable solutions</span>
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
                    <a href="#" className="text-green-600 font-semibold hover:text-green-700 transition-colors flex items-center">
                      Learn more
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column - Advocacy image and values */}
            <div className={`lg:w-1/2 transition-all duration-700 ${isIntersecting['advocacy'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
              <div className="relative h-full">
                {/* Main image with overlay */}
              <div className="rounded-xl overflow-hidden shadow-2xl h-full">
                <div className="relative h-full">
                <div className="absolute inset-0 bg-gradient-to-t from-green-900 to-transparent opacity-60"></div>
                <img 
                  src={advocacyImage} 
                  alt="Advocacy" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h4 className="text-xl font-bold mb-2">Sustainability in Action</h4>
                  <p className="text-gray-100">
                  Our innovative approach converts waste hair into valuable resources, 
                  reducing environmental impact while creating sustainable products.
                  </p>
                  <button className="mt-4 px-6 py-2 bg-white text-green-700 font-medium rounded-lg hover:bg-green-700 hover:text-white transition-colors inline-flex items-center">
                  Join Our Movement
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                  </button>
                </div>
                </div>
              </div>
              </div>
            </div>
          </div>
            
          {/* Sustainability Badges */}
          <div className={`mt-16 transition-all duration-1000 delay-300 ${isIntersecting['advocacy'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-sm rounded-xl p-6">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h5 className="text-white font-medium mt-2">Eco-Friendly</h5>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h5 className="text-white font-medium mt-2">Community-Driven</h5>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
                    </svg>
                  </div>
                  <h5 className="text-white font-medium mt-2">Innovative</h5>
                </div>
                <div className="text-center">
                  <div className="bg-white bg-opacity-20 rounded-full p-4 w-16 h-16 flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <h5 className="text-white font-medium mt-2">Sustainable</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative wave effect at bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="absolute bottom-0 w-full h-12 text-gray-50" fill="currentColor">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,143.53,125.07,221.36,119.14,289.09,113.93,287.36,84.43,321.39,56.44Z"></path>
          </svg>
        </div>
      </section>

      {/* Products Section */}
      <section 
        data-section="products"
        className={`py-20 bg-green-50 transition-all duration-1000 relative ${isIntersecting['products'] ? 'opacity-100' : 'opacity-70'}`}
      >
        {/* Hair-themed background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="productHairPattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(1.5) rotate(45)">
              {/* Wavy hair strands */}
              <path fill="none" stroke="#10A54A" strokeWidth="1.2" d="M10,30 C20,10 30,50 40,30 C50,10 60,50 70,30" />
              <path fill="none" stroke="#10A54A" strokeWidth="1.2" d="M0,60 C10,40 20,80 30,60 C40,40 50,80 60,60" />
              {/* Curly hair elements */}
                      <path fill="none" stroke="#A2CB70" strokeWidth="1" d="M15,85 C25,65 5,65 15,45 C25,25 5,25 15,5" />
                      <path fill="none" stroke="#A2CB70" strokeWidth="1" d="M75,95 C85,75 65,75 75,55 C85,35 65,35 75,15" />
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#productHairPattern)" />
                    </svg>
                  </div>

                  <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-16 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Products</h2>
                    <div className="w-24 h-1 bg-green-500 mx-auto"></div>
                    <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Sustainable solutions made from recycled human hair</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {[
                      { image: hairRugImage, title: "Hair Rugs", description: "Eco-friendly rugs made from recycled human hair, offering durability and unique aesthetic appeal." },
                      { image: hairMatImage, title: "Hair Plant Mats", description: "Organic plant mats that provide essential nutrients to plants while reducing waste." }
                    ].map((product, index) => (
                      <div 
                      key={index}
                      className={`bg-white bg-opacity-90 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden shadow-lg transform transition-all duration-700 card-hover flex flex-col ${isIntersecting['products'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                      style={{ transitionDelay: `${index * 200}ms` }}
                      >
                      <div className="img-hover-zoom">
                        <img src={product.image} alt={product.title} className="w-full h-80 object-cover" />
                      </div>
                      <div className="p-8 flex flex-col flex-grow">
                        <div className="flex-grow">
                        <h3 className="text-2xl font-bold text-gray-800 mb-3">{product.title}</h3>
                        <p className="text-gray-600">{product.description}</p>
                        </div>
                        <button 
                        onClick={() => handleProductClick(product.title)}
                        className="mt-6 px-6 py-2 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors self-center"
                        >
                        Learn More
                        </button>
                      </div>
                      </div>
                    ))}
                    </div>
                  </div>
                  </section>

      {/* Partners Section */}
      <section 
        data-section="sponsors"
        className={`py-20 bg-gray-100 transition-all duration-1000 ${isIntersecting['sponsors'] ? 'opacity-100' : 'opacity-70'}`}>
        <div className="container mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Partners</h2>
            <div className="w-24 h-1 bg-green-500 mx-auto"></div>
            <p className="text-gray-600 mt-6 max-w-2xl mx-auto">Working together with these amazing organizations to create positive change</p>
          </div>
          
          <div className="carousel-container relative">
            {/* Left and right fade overlays */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-100 to-transparent z-10"></div>
            
            {/* Carousel content */}
            <div 
              ref={carouselRef}
              className="carousel-slide auto-scrolling"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
              style={{ animationPlayState: isHovering ? 'paused' : 'running' }}
            >
              {/* First set of logos */}
              <div className="logo-group">
                {sponsorLogos.map((logo, index) => (
                  <div 
                    key={`logo-1-${index}`}
                    className="sponsor-logo"
                  >
                    <div className="bg-white p-4 rounded-lg shadow-sm w-full h-full flex items-center justify-center">
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="max-h-16 md:max-h-20 w-auto object-contain" 
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Duplicate set of logos for seamless scrolling */}
              <div className="logo-group">
                {sponsorLogos.map((logo, index) => (
                  <div 
                    key={`logo-2-${index}`}
                    className="sponsor-logo"
                  >
                    <div className="bg-white p-4 rounded-lg shadow-sm w-full h-full flex items-center justify-center">
                      <img 
                        src={logo.src} 
                        alt={logo.alt} 
                        className="max-h-16 md:max-h-20 w-auto object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Modify the News Section to integrate Facebook API for posting, updating, and deleting news articles from Facebook page to the web application. Here is the Link: https://developers.facebook.com/docs/pages-api/overview */}
      {/* News Section */}
      <section 
        data-section="news"
        className={`py-20 bg-[#047857] relative transition-all duration-1000 ${isIntersecting['news'] ? 'opacity-100' : 'opacity-70'}`}
      >
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Latest News</h2>
            <div className="w-24 h-1 bg-green-300 mx-auto"></div>
            <p className="text-gray-100 mt-6 max-w-2xl mx-auto">Stay updated with our latest developments and initiatives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((news, index) => (
              <div 
                key={index}
                className={`bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-700 transform hover:-translate-y-2 hover:shadow-2xl ${
                  isIntersecting['news'] ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
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
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section*/}
      <section 
        data-section="contact"
        className={`py-20 relative overflow-hidden transition-all duration-1000 ${isIntersecting['contact'] ? 'opacity-100' : 'opacity-70'}`}
      >
        {/* Hair-inspired background pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-800 to-green-900">
          <div className="absolute inset-0 opacity-10">
            <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="hairPattern" patternUnits="userSpaceOnUse" width="100" height="100" patternTransform="scale(2) rotate(5)">
                {/* Wavy hair strand 1 */}
                <path fill="none" stroke="white" strokeWidth="2" d="M10,30 C20,10 30,50 40,30 C50,10 60,50 70,30" />
                {/* Wavy hair strand 2 */}
                <path fill="none" stroke="white" strokeWidth="2" d="M0,60 C10,40 20,80 30,60 C40,40 50,80 60,60" />
                {/* Curly hair strand */}
                <path fill="none" stroke="white" strokeWidth="1.5" d="M15,85 C25,65 5,65 15,45 C25,25 5,25 15,5" />
                <path fill="none" stroke="white" strokeWidth="1.5" d="M55,95 C65,75 45,75 55,55 C65,35 45,35 55,15" />
                <path fill="none" stroke="white" strokeWidth="1.5" d="M85,85 C95,65 75,65 85,45 C95,25 75,25 85,5" />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#hairPattern)" />
            </svg>
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Contact Us</h2>
            <div className="w-24 h-1 bg-green-400 mx-auto"></div>
            <p className="text-gray-200 mt-6 max-w-2xl mx-auto">Have questions about our sustainable hair products or want to collaborate? Reach out to us today.</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden">
            <div className="flex flex-col md:flex-row">
              {/* Impact & Mission Side - Replacing redundant contact info */}
              <div className={`w-full md:w-2/5 bg-gradient-to-br from-green-700 to-green-900 p-8 md:p-12 text-white transition-all duration-700 relative overflow-hidden ${isIntersecting['contact'] ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="bg-white bg-opacity-20 p-3 rounded-full mr-4">
                      <img src={logoImage} alt="Capilli Trading Logo" className="h-10 w-10 object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold">Our Impact</h3>
                  </div>
                  
                  <div className="border-t border-white border-opacity-20 my-6"></div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold mb-6">Sustainable Hair Solutions</h4>
                    
                    {/* Impact Statistics */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                        <span className="block text-3xl font-bold mb-1">1.2M+</span>
                        <span className="text-sm text-gray-200">Pounds of Hair Recycled</span>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                        <span className="block text-3xl font-bold mb-1">85%</span>
                        <span className="text-sm text-gray-200">Waste Reduction</span>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                        <span className="block text-3xl font-bold mb-1">50+</span>
                        <span className="text-sm text-gray-200">Partner Organizations</span>
                      </div>
                      <div className="bg-white bg-opacity-10 rounded-lg p-4 text-center">
                        <span className="block text-3xl font-bold mb-1">24</span>
                        <span className="text-sm text-gray-200">Communities Supported</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-200 mb-6">
                      At Capilli Trading, we transform waste hair into sustainable products while supporting local communities and reducing environmental impact.
                    </p>
                    
                    {/* Sustainability Promise */}
                    <div className="bg-white bg-opacity-10 p-4 rounded-lg mb-6">
                      <h5 className="font-semibold flex items-center mb-2">
                        <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                        Our Sustainability Promise
                      </h5>
                      <p className="text-sm text-gray-200">
                        Every product we create helps reduce environmental waste while providing innovative, eco-friendly solutions for everyday use.
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Decorative hair strand elements */}
                <div className="absolute bottom-0 left-0 w-full overflow-hidden opacity-20">
                  <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-full w-full">
                    <path d="M0,100 C30,120 70,80 100,100 C130,120 170,80 200,100 C230,120 270,80 300,100 C330,120 370,80 400,100 C430,120 470,80 500,100 L500,150 L0,150 Z" fill="white"></path>
                  </svg>
                </div>
              </div>
              
              {/* Contact Form Side */}
              <div className={`w-full md:w-3/5 p-8 md:p-12 transition-all duration-700 ${isIntersecting['contact'] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <form className="flex flex-col">
                  <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
                  
                  {/* Name field with hair-related icon */}
                  <div className="mb-6">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      </div>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>
                  
                  {/* Email field with icon */}
                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="example@email.com"
                      />
                    </div>
                  </div>
                  
                  {/* Topic selection - relevant to hair products */}
                  <div className="mb-6">
                    <label htmlFor="topic" className="block text-sm font-medium text-gray-700 mb-2">Topic</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path>
                        </svg>
                      </div>
                      <select 
                        id="topic" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select a topic</option>
                        <option value="products">Hair Products</option>
                        <option value="partnership">Business Partnership</option>
                        <option value="sustainability">Sustainability Programs</option>
                        <option value="other">Other Inquiry</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message field with icon */}
                  <div className="mb-8">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <div className="relative">
                      <div className="absolute left-0 top-0 pt-3 pl-3 pointer-events-none">
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path>
                        </svg>
                      </div>
                      <textarea 
                        id="message" 
                        rows="5"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                  </div>
                  
                  {/* Submit button with icon */}
                  <button 
                    type="submit"
                    className="flex items-center justify-center px-6 py-4 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Send Message
                  </button>
                  
                  {/* Decorative hair-inspired corner element */}
                  <div className="absolute bottom-0 right-0 opacity-5">
                    <svg width="180" height="180" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10,40 C40,0 80,80 120,40 C160,0 200,80 180,120" stroke="#047857" strokeWidth="8" fill="none" />
                      <path d="M20,80 C60,40 100,120 140,80 C180,40 220,120 200,160" stroke="#047857" strokeWidth="6" fill="none" />
                      <path d="M30,120 C70,80 110,160 150,120 C190,80 230,160 210,200" stroke="#047857" strokeWidth="4" fill="none" />
                    </svg>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <ProductModal />
    </div>
  );
}

export default Home;