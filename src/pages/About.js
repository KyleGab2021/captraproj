import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import haroldImage from "../assets/members/haroldlaborte.jpg";
import marianImage from "../assets/members/mariancelestellanes.jpg";
import zueinImage from "../assets/members/zuein_guantero.jpg";
import krisImage from "../assets/members/kris_vasallo.jpg";
import phoebeImage from "../assets/members/phoebe_pahunang.jpg";
import reinnaImage from "../assets/members/reinna_calo.jpg";
import peterImage from "../assets/members/peterglenn_rapiz.jpg";
import aidamaeImage from "../assets/members/aidamae_delcastillo.jpg";
import joyImage from "../assets/members/joy_astorga.jpg";
import kristylImage from "../assets/members/kristyl_ponferrada.jpg";
import rodyardImage from "../assets/members/rodyard_camarin.jpg";
import aboutBackground from "../assets/capilli_bgimages/capilliaboutpagebg.jpg";
import foundersBg from "../assets/capilli_bgimages/capiilifoundersbg.jpg";
import startupVideo from "../assets/capillistartupvideo.mp4";
import haroldCard from "../assets/business_cards/haroldjohn_laborte.png";
import joyCard from "../assets/business_cards/joyfranceska_astorga.png";
import marianCard from "../assets/business_cards/marianceleste_llanes.png";
import phoebeCard from "../assets/business_cards/phoebeaileen_pahunang.png";
import reinnaCard from "../assets/business_cards/reinnakris_calo.png";
import rodyardCard from "../assets/business_cards/rodyard_camarin.png";
import zueinCard from "../assets/business_cards/zuein_guantero.png";
import cardBack from "../assets/business_cards/businesscardback.png";
import brochurePDF from "../assets/dlc_files/capillitrifoldbrochure.pdf";

function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultImage =
    "https://placehold.co/400x600/10A54A/ffffff?text=Team+Member";
  const [selectedAward, setSelectedAward] = useState(null);
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);

  const teamMembers = [
    {
      image: haroldImage,
      businessCard: haroldCard,
      name: "Harold John Laborte",
      position: "Chairperson | Chief Executive Officer",
      description:
        "Harold is a social entrepreneur currently based in Iligan City, Philippines. He is the Founder and CEO of Capilli Trading, Inc and Matter of Trust – Philippines. Harold graduated in 2015 with a degree in Business Economics at Xavier University – Ateneo de Cagayan where he once served as President of their university student council. He is finishing his Master’s Degree in Urban and Regional Planning at UP Diliman. Before founding Capilli, Harold has built his career in Revenue Management in the Airline and Hospitality industry. He is also part of Rev&You – a revenue management consulting company that supports hoteliers and hotel consultants in Europe, Australia, and the Philippines. Moreover, Harold is also a part-time faculty for Business and Entrepreneurship at the Mapua Malayan Digital College.",
      delay: 0,
    },
    {
      image: null,
      useDefaultAvatar: true,
      name: "Rose Jean Laborte",
      position: "Corporate Treasurer",
      description:
        "Rose manages Capilli Trading's financial operations, ensuring sustainable growth and fiscal responsibility in all business ventures.",
      delay: 200,
    },
    {
      image: marianImage,
      businessCard: marianCard,
      name: "Marian Celeste Llanes",
      position: "Corporate Secretary | Vice President for Marketing",
      description:
        "Marian oversees marketing strategies and corporate communications, driving brand awareness and engagement.",
      delay: 400,
    },
    {
      image: zueinImage,
      businessCard: zueinCard,
      name: "Zuein A. Guantero",
      position: "President | Director | Chief Operations Officer",
      description:
        "Zuein is the President and Chief Operating Officer of Capilli Trading, Inc. He holds a degree in Business Administration major in Marketing Management at Xavier University – Ateneo de Cagayan where he also got his MBA. In winter 2015, after college, he was chosen as one of the academic fellows for Social Entrepreneurship and Economic Development in Arizona State University in USA as part of the Young South East Asian Leaders Initiative (YSEALI). Zuein is one of the founders of Sketch bags, a social enterprise in partnership with women sewers at Xavier Ecoville, Brgy. Lumbia, Cagayan de Oro City, which manufactures eco-bags and event giveaways. Zuein used to be involved with Misamis Oriental Province’s Department of Trade and Industry as coordinator of the Negosyo Center from 2016 to 2019.",
      delay: 600,
    },
    {
      image: krisImage,
      name: "Krysthal Vasallo",
      position: "Vice Chairperson",
      description:
        "Lead and executed research projects related to waste hair utilization and waste hair management for Capilli. Collaborated with cross-functional teams to integrate research insights into Capilli's strategic plans and business operations.",
      delay: 800,
    },
    {
      image: phoebeImage,
      businessCard: phoebeCard,
      name: "Phoebe Aileen Pahunang",
      position: "Director | Chief Financial Officer",
      description:
        "Phoebe manages the financial planning and analysis, ensuring the company's financial health and sustainability.",
      delay: 1000,
    },
    {
      image: reinnaImage,
      businessCard: reinnaCard,
      name: "Reinna Kris Calo",
      position: "Chief Product Officer",
      description:
        "Reinna takes on the role of Chief Product Officer of Capilli Trading, Inc. She holds a degree in Fine Arts major in Product Design at the University of the Philippines. Her first stint after college in 2015 was with Design Studio Vito Selma where she worked as a Junior Designer focusing on Product Research, Design, and Development. In 2018, she left to work for the government under Lanao Del Norte’s Department of Trade and Industry until January of 2021 where she served as the In-house Designer and Negosyo Center’s Business Counselor. At present, she is affiliated with the Design Center of the Philippines as a Senior Industrial Design Specialist.",
      delay: 1200,
    },
    {
      image: peterImage,
      name: "Peter Glenn Rapiz",
      position: "Chief Commercial Officer",
      description:
        "Peter carries the role of Chief Commercial Officer for Capilli Trading, Inc. He graduated with a double degree in Community Development and Management in 2013 at the University of the Philippines – Visayas. He also holds a Master’s Degree in Public Administration from the University of Iloilo. At present, he is studying Law at the University of San Agustin Iloilo. In 2010, Peter was one of the selected Youth Ambassadors for the 37th Ship for Southeast Asian Youth Program by the National Youth Commission. Awarded in 2013 by the Philippine Center for Gifted Education and the Republic’s Office of the President, he was one of the National Awardees for “Mga Bagong Rizal: Pag-Asa ng Bayan.” Peter was affiliated with RedDoorz, a Southeast Asian Hotel Management Company offering affordable accommodations to partner properties, as its Regional Corporate Sales Manager in the Philippines. At present, he is Head of Sales of Ace Hotels Group.",
      delay: 1400,
    },
    {
      image: aidamaeImage,
      name: "Aida Mae del Castillo",
      position: "Executive Leadership",
      description: "Aida is...",
      delay: 1600,
    },
    {
      image: joyImage,
      businessCard: joyCard,
      name: "Joy Franceska Astorga",
      position: "Vice President for Corporate Resources",
      description: "Joy is...",
      delay: 1800,
    },
    {
      image: kristylImage,
      name: "Kristyl Bern Ponferrada",
      position: "Founder",
      description: "Kristyl is...",
      delay: 2000,
    },
    {
      image: rodyardImage,
      businessCard: rodyardCard,
      name: "Rodyard Camarin",
      position: "Chief Commercial Officer",
      description: "Rodyard is...",
      delay: 2200,
    },
  ];

  const awards = [
    {
      image:
        "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop&q=60",
      title: "2022 Champion",
      organization: "Bluepreneurs Asia Ventures Pitch Competition",
      description:
        "Recognized for innovative business model and impactful sustainable solutions in the Asian entrepreneurship landscape.",
      date: "2022",
    },
    {
      image:
        "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&auto=format&fit=crop&q=60",
      title: "2022 Most Inspiring Youth Entrepreneur",
      organization: "Local City Government of Iligan, Philippines",
      description:
        "Acknowledged for exemplary leadership and innovative contributions to sustainable entrepreneurship.",
      date: "2022",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=800&auto=format&fit=crop&q=60",
      title: "2023 Start-Up of the Year and Founder of the Year Awards",
      organization: "New Energy NEXUS Philippines",
      description:
        "Recognized for outstanding achievements in sustainable business innovation and leadership.",
      date: "2023",
    },
    {
      image:
        "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=800&auto=format&fit=crop&q=60",
      title: "2023 BPI Direct BanKo Negosyo Ko Award",
      organization: "BPI Foundation, BPI Direct BanKo, and Bayan Academy",
      description:
        "Honored for excellence in business development and sustainable entrepreneurship.",
      date: "2023",
    },
    {
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
      title: "2023 Start-Up of the Year",
      organization: "Local City Government of Iligan, Philippines",
      description:
        "Recognized for significant contributions to local economic development and innovation.",
      date: "2023",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=60",
      title:
        "2023 Recipient of the Oracle Netsuite Social Impact Award Donation",
      organization: "Oracle NetSuite",
      description:
        "Selected for outstanding social impact and sustainable business practices.",
      date: "2023",
    },
    {
      image:
        "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=800&auto=format&fit=crop&q=60",
      title: "2024 Good Design Awards (Finalist)",
      organization: "Design Center of the Philippines",
      description:
        "Recognized for excellence in sustainable product design and innovation.",
      date: "2024",
    },
    {
      image:
        "https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&auto=format&fit=crop&q=60",
      title: "2024 Young Entrepreneur Outstanding Awardee",
      organization: "Local City Government of Iligan, Philippines",
      description:
        "Awarded for exceptional entrepreneurial achievement and community impact.",
      date: "2024",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
      title: "2024 Excellence in Advocacy Communications Award",
      organization: "Local City Government of Iligan, Philippines",
      description:
        "Recognized for effective communication and promotion of sustainable initiatives.",
      date: "2024",
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  const handleAwardClick = (award) => {
    setSelectedAward(award);
    setIsAwardModalOpen(true);
  };

  const handlePrevMember = () => {
    const currentIndex = teamMembers.findIndex(
      (member) => member.name === selectedMember.name
    );
    const prevIndex =
      currentIndex === 0 ? teamMembers.length - 1 : currentIndex - 1;
    setSelectedMember(teamMembers[prevIndex]);
  };

  const handleNextMember = () => {
    const currentIndex = teamMembers.findIndex(
      (member) => member.name === selectedMember.name
    );
    const nextIndex =
      currentIndex === teamMembers.length - 1 ? 0 : currentIndex + 1;
    setSelectedMember(teamMembers[nextIndex]);
  };

  const handleCardClick = (businessCard, e) => {
    e.stopPropagation();
    setSelectedCard(businessCard);
    setIsCardModalOpen(true);
    setIsFlipped(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-inter">
      {/* Hero Section */}
      <section className="relative h-[50vh] overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          <img
            src={aboutBackground}
            alt="About Us Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-green-600/70 to-green-900/70"></div>
          <div className="absolute inset-0 grid-pattern opacity-10"></div>
        </div>

        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="fade-up text-5xl md:text-7xl font-bold text-white mb-6">
            About Us
          </h1>
          <div className="fade-up w-32 h-1 bg-green-300 delay-300"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg className="relative w-full h-24" viewBox="0 0 1440 74">
            <path
              fill="rgb(249 250 251)"
              d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="fade-up max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-[0_20px_50px_rgba(8,45,15,0.1)] transition-shadow duration-500">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
              Capilli is a Mindanao-based social enterprise start-up that
              upcycles human waste hair for various industries. Its mission is
              to create sustainable solutions from human hair waste, making it a
              pioneer in waste treatment and pollution remediation. Capilli
              collects human waste hair from salons and barbershops, preventing
              it from ending up in landfills, and works with a community
              cooperative of unemployed women and mothers to produce by-products
              using innovative hair felting technology.
            </p>
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              Currently, Capilli offers better, cheaper, and more sustainable
              spill kit alternatives for oil and chemical spills, as well as
              mats for horticulture and gardening support.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        className="relative py-20 bg-gradient-to-b from-green-600 to-transparent"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(20, 83, 45, 0.85), rgba(255, 255, 255, 0.95)), url(${foundersBg})`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="fade-up text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Our Founders
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="fade-up group cursor-pointer aspect-square"
                style={{ transitionDelay: `${index * 100}ms` }}
                onClick={() => handleMemberClick(member)}
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="relative h-3/4 overflow-hidden">
                    {member.useDefaultAvatar ? (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <FaUserCircle className="w-3/4 h-3/4 text-gray-300" />
                      </div>
                    ) : (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        onError={(e) => {
                          e.target.src = defaultImage;
                        }}
                        style={{
                          objectFit: "cover",
                          objectPosition:
                            member.name === "Zuein A. Guantero"
                              ? "center 30%"
                              : member.name === "Harold John Laborte"
                              ? "center 15%"
                              : "50% 20%",
                        }}
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="h-1/4 p-4 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent truncate">
                      {member.name}
                    </h3>
                    <p className="mt-1 text-gray-600 text-sm truncate">
                      {member.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 to-white relative overflow-hidden">
        {/* Add Hair Pattern Background */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern
              id="hairPattern"
              patternUnits="userSpaceOnUse"
              width="100"
              height="100"
              patternTransform="scale(2) rotate(45)"
            >
              {/* Wavy Hair Strands */}
              <path
                d="M10,30 C20,10 30,50 40,30 C50,10 60,50 70,30"
                fill="none"
                stroke="#047857"
                strokeWidth="1"
              />
              <path
                d="M0,60 C10,40 20,80 30,60 C40,40 50,80 60,60"
                fill="none"
                stroke="#047857"
                strokeWidth="1"
              />
              {/* Curly Hair Elements */}
              <path
                d="M15,85 C25,65 5,65 15,45 C25,25 5,25 15,5"
                fill="none"
                stroke="#047857"
                strokeWidth="0.5"
              />
              <path
                d="M85,85 C95,65 75,65 85,45 C95,25 75,25 85,5"
                fill="none"
                stroke="#047857"
                strokeWidth="0.5"
              />
              {/* Hair Follicle Dots */}
              <circle cx="10" cy="10" r="1" fill="#047857" opacity="0.5" />
              <circle cx="90" cy="90" r="1" fill="#047857" opacity="0.5" />
              <circle cx="50" cy="50" r="1" fill="#047857" opacity="0.5" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#hairPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="fade-up text-4xl md:text-5xl font-bold text-green-900 mb-6">
              Our Startup
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Revolutionizing hair waste management through innovative solutions
              and sustainable practices
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Section */}
            <div className="relative fade-up rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="aspect-w-16 aspect-h-9">
                <video
                  className="w-full h-full object-cover rounded-2xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source src={startupVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Content Section */}
            <div
              className="space-y-8 fade-up"
              style={{ transitionDelay: "200ms" }}
            >
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  Innovation at Heart
                </h3>
                <p className="text-gray-600">
                  We're pioneering sustainable solutions in hair waste
                  management, transforming discarded hair into valuable
                  resources through cutting-edge technology and innovative
                  processes.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Partner Salons</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Sustainable Process</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-600 to-green-800 rounded-xl p-6 text-white shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <h4 className="text-xl font-semibold mb-3">Our Impact</h4>
                <p className="text-gray-100">
                  Through our innovative approach, we've successfully diverted
                  tons of hair waste from landfills while creating sustainable
                  products that benefit both the environment and local
                  communities.
                </p>
              </div>

              {/* Download Brochure Button - Now with modern icon */}
              <div className="flex justify-center pt-8">
                <a
                  href={brochurePDF}
                  download="capillitrifoldbrochure.pdf"
                  className="group flex items-center gap-3 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <svg
                    className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span className="text-lg font-medium">
                    Download Trifold Brochure
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>
      </section>

      {/* Awards and Recognitions Section */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <h2 className="fade-up text-4xl md:text-5xl font-bold text-green-900 text-center mb-16">
          Awards & Recognitions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="fade-up cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleAwardClick(award)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-lg font-bold">{award.title}</h3>
                    <p className="text-sm opacity-90">{award.organization}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-2">{award.date}</p>
                  <p className="text-gray-700 line-clamp-2">
                    {award.description}
                  </p>
                  <button className="mt-4 text-green-600 hover:text-green-700 font-medium text-sm flex items-center">
                    Learn More
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
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
          ))}
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-4xl my-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2"
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

            <button
              onClick={handlePrevMember}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="Previous member"
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

            <button
              onClick={handleNextMember}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
              aria-label="Next member"
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

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5">
                <div className="sticky top-0">
                  <div className="relative h-[400px] lg:h-[600px] overflow-hidden">
                    {selectedMember?.image ? (
                      <img
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                        onError={(e) => {
                          e.target.src = defaultImage;
                        }}
                        style={{
                          objectFit: "cover",
                          objectPosition:
                            selectedMember.name === "Zuein A. Guantero"
                              ? "center 30%"
                              : selectedMember.name === "Harold John Laborte"
                              ? "center 15%"
                              : "50% 20%",
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none">
                        <FaUserCircle className="w-3/4 h-3/4 text-gray-300" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="lg:w-3/5 p-8">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent">
                    {selectedMember?.name}
                  </h3>
                  <p className="text-gray-600 mt-2 font-medium text-xl">
                    {selectedMember?.position}
                  </p>
                </div>
                <div className="prose prose-lg max-w-none mb-8">
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {selectedMember?.description
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>
                </div>
                {selectedMember?.businessCard && (
                  <button
                    onClick={(e) =>
                      handleCardClick(selectedMember.businessCard, e)
                    }
                    className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                      />
                    </svg>
                    View Business Card
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Award Modal */}
      {isAwardModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl relative">
            <button
              onClick={() => setIsAwardModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
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

            <div className="relative">
              <img
                src={selectedAward?.image}
                alt={selectedAward?.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-2xl"></div>
            </div>

            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">
                {selectedAward?.title}
              </h3>
              <p className="text-green-600 font-medium mb-4">
                {selectedAward?.organization}
              </p>
              <p className="text-gray-600 mb-4">{selectedAward?.date}</p>
              <p className="text-gray-700 leading-relaxed">
                {selectedAward?.description}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Business Card Modal */}
      {isCardModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4">
          <div className="relative perspective-1000">
            <button
              onClick={() => setIsCardModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 z-10"
            >
              <svg
                className="w-8 h-8"
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

            <div
              className="relative transition-transform duration-700 transform-style-3d cursor-pointer"
              style={{
                transformStyle: "preserve-3d",
                transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
              }}
            >
              {/* Front of card */}
              <div
                className="relative"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                }}
              >
                <img
                  src={selectedCard}
                  alt="Business Card Front"
                  className="rounded-xl shadow-2xl max-w-[600px] w-full"
                />
              </div>

              {/* Back of card */}
              <div
                className="absolute inset-0"
                style={{
                  backfaceVisibility: "hidden",
                  WebkitBackfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                }}
              >
                <img
                  src={cardBack}
                  alt="Business Card Back"
                  className="rounded-xl shadow-2xl max-w-[600px] w-full"
                />
              </div>

              {/* Flip button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(!isFlipped);
                }}
                className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg hover:scale-110 transition-all duration-200"
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
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Sticky Message Icon */}
      <button
        onClick={() => {
          window.location.href = "/#contact";
          setTimeout(() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              const yOffset = -80;
              const y =
                contactSection.getBoundingClientRect().top +
                window.pageYOffset +
                yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }, 100);
        }}
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
    </div>
  );
}

export default About;
