import React, { useEffect, useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import haroldImage from "../assets/members/haroldlaborte.jpg";
import marianImage from "../assets/members/mariancelestellanes.jpg";
import zueinImage from "../assets/members/zuein_guantero.jpg";
import krisImage from "../assets/members/kris_vasallo.jpg";
import phoebeImage from "../assets/members/phoebe_pahunang.jpg";
import reinnaImage from "../assets/members/reinna_calo.jpg";
import peterImage from "../assets/members/peterglenn_rapiz.jpg";
import aboutBackground from "../assets/capilli_bgimages/capilliaboutpagebg.jpg";
import foundersBg from "../assets/capilli_bgimages/capillifoundersbg.jpg";
import startupVideo from "../assets/capillistartupvideo.mp4";
import haroldCard from "../assets/business_cards/haroldjohn_laborte.png";
import marianCard from "../assets/business_cards/marianceleste_llanes.png";
import phoebeCard from "../assets/business_cards/phoebeaileen_pahunang.png";
import reinnaCard from "../assets/business_cards/reinnakris_calo.png";
import zueinCard from "../assets/business_cards/zuein_guantero.png";
import cardBack from "../assets/business_cards/businesscardback.png";
import brochurePDF from "../assets/dlc_files/capillitrifoldbrochure.pdf";
import startupAward2023 from "../assets/awards-recognitions_images/startupoftheyear2023_awardrecoimage.jpg";
import startupfounderAward2023 from "../assets/awards-recognitions_images/startupfounderoftheyear2023_awardrecoimage.jpg";
import oraclenetsuiteAward2023 from "../assets/awards-recognitions_images/oraclenetsuiteaward2023_awardrecoimage.jpg";
import bpinegosyokoAward2023 from "../assets/awards-recognitions_images/bpinegosyokoaward2023_awardrecoimage.jpg";
import excellenceAdvocacyAward2024 from "../assets/awards-recognitions_images/excellenceadvocacy_awardrecoimage.png";
import youngentrepreneuroutstanding2024 from "../assets/awards-recognitions_images/youngentrepreneuroutstanding2024_awardrecoimage.jpg";
import thesisImage from "../assets/idsthesis_image.png";
import companyLogo from "../assets/capillitradinglogoonly.png";
import ContactModal from "../components/ContactModal";

function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [selectedAward, setSelectedAward] = useState(null);
  const [isAwardModalOpen, setIsAwardModalOpen] = useState(false);
  const [isCardModalOpen, setIsCardModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeTab, setActiveTab] = useState("leadership");

  const defaultImage = "https://placehold.co/400x600/10A54A/ffffff?text=Team+Member";
  
  const leadershipTeam = [
    {
      image: haroldImage,
      businessCard: haroldCard,
      name: "Harold John Laborte",
      position: "Chief Executive Officer",
      description:
        "Harold is a social entrepreneur currently based in Iligan City, Philippines...",
    },
    {
      image: zueinImage,
      businessCard: zueinCard,
      name: "Zuein Guantero",
      position: "Chief Operating Officer",
      description:
        "Zuein is the President and Chief Operating Officer of Capilli Trading, Inc...",
    },
    {
      image: phoebeImage,
      businessCard: phoebeCard,
      name: "Phoebe Aileen Pahunang",
      position: "Chief Finance Officer",
      description: "Phoebe manages the financial planning and analysis...",
    },
    {
      image: marianImage,
      businessCard: marianCard,
      name: "Marian Celeste Llanes",
      position: "Vice President for Marketing Officer",
      description:
        "Marian oversees marketing strategies and corporate communications...",
    },
    {
      image: reinnaImage,
      businessCard: reinnaCard,
      name: "Reinna Kris Calo",
      position: "Chief Product Officer",
      description:
        "Reinna takes on the role of Chief Product Officer of Capilli Trading, Inc...",
    },
    {
      image: peterImage,
      name: "Peter Glenn Rapiz",
      position: "Chief Commercial Officer",
      description: "Peter carries the role of Chief Commercial Officer...",
    },
  ];

  const boardDirectors = [
    {
      image: haroldImage,
      businessCard: haroldCard,
      name: "Harold John Laborte",
      position: "Chairperson",
      description:
        "Harold John Laborte serves as the Chairperson of the Board of Directors.",
    },
    {
      image: zueinImage,
      businessCard: zueinCard,
      name: "Zuein Guantero",
      position: "President and Director",
      description:
        "Zuein Guantero serves as the President and Director of the Board.",
    },
    {
      image: phoebeImage,
      businessCard: phoebeCard,
      name: "Phoebe Aileen Pahunang",
      position: "Director",
      description: "Phoebe Aileen Pahunang serves as a Director of the Board.",
    },
    {
      image: marianImage,
      businessCard: marianCard,
      name: "Marian Celeste Llanes",
      position: "Corporate Secretary",
      description:
        "Marian Celeste Llanes serves as the Corporate Secretary of the Board.",
    },
    {
      image: krisImage,
      name: "Krysthal Vasallo",
      position: "Vice Chairperson",
      description:
        "Krysthal Vasallo serves as the Vice Chairperson of the Board of Directors.",
    },
    {
      image: null,
      useDefaultAvatar: true,
      name: "Rose Jean Laborte",
      position: "Corporate Treasurer",
      description:
        "Rose Jean Laborte serves as the Corporate Treasurer of the Board.",
    },
  ];

  const awards = [
    {
      image: "https://images.unsplash.com/photo-1507099985932-87a4520ed1d5?w=800&auto=format&fit=crop&q=60",
      title: "Good Design Awards Finalist",
      organization: "Design Center of the Philippines",
      description:
        "Recognized for excellence in sustainable product design and innovation.",
      date: "2024",
    },
    {
      image: youngentrepreneuroutstanding2024,
      title: "Young Entrepreneur Outstanding Awardee",
      organization: "Local City Government of Iligan, Philippines", 
      description:
        "Our Chairman and CEO, Mr. Harold John Laborte, was recently honored with the Young Entrepreneur Outstanding Award at the 2024 Pasigarbo sa Diyandi: Youth Leadership and Excellence Awards in Iligan City. This recognition highlights the vital role of young entrepreneurs in driving innovation and empowering communities. It also marks our third local recognition from the Iligan City Government—following the Most Inspiring Youth Enterprise award in 2022 and Start-up of the Year in 2023—reflecting our continued commitment to excellence, leadership, and community growth in Iligan and beyond.",
      date: "2024",
    },
    {
      image: excellenceAdvocacyAward2024,
      title: "Excellence in Advocacy Communications Award",
      organization: "Local City Government of Iligan, Philippines",
      description:
        "Capilli Trading Inc. is honored to receive the Excellence in Advocacy Communication Award at the Iligan Business Awards, presented by the City Government of Iligan. This recognition highlights our strong commitment to sustainability, environmental responsibility, and community empowerment. At Capilli, we go beyond offering eco-friendly products—we advocate for meaningful change by raising awareness on upcycling human hair waste and promoting sustainable practices.",
      date: "2024",
    },
    {
      image: startupAward2023,
      title: "Start-Up of the Year",
      organization: "Iligan Business Awards Night",
      description:
        "Capilli Trading Inc. is honored to receive the Excellence in Advocacy Communication Award at the Iligan Business Awards, presented by the City Government of Iligan. This recognition highlights our strong commitment to sustainability, environmental responsibility, and community empowerment. At Capilli, we go beyond offering eco-friendly products—we advocate for meaningful change by raising awareness on upcycling human hair waste and promoting sustainable practices.",
      date: "2023",
    },
    {
      image:  startupfounderAward2023,
      title: "Start-Up & Founder of the Year Awards",
      organization: "New Energy NEXUS Philippines",
      description:
        "Capilli proudly received the Startup of the Year award from NEXPH, a recognition that celebrates our innovation, impact, and growth as a rising player in the startup ecosystem. Adding to this milestone, our CEO, Harold John Laborte, was honored as Founder of the Year—a testament to his visionary leadership, dedication, and commitment to building a company that drives meaningful change. These awards reflect not only our team’s hard work and passion but also our mission to lead with purpose and create value for the communities we serve.",
      date: "2023",
    },
    {
      image: bpinegosyokoAward2023,
      title: "BPI Direct BanKo Negosyo Ko Award", 
      organization: "BPI Foundation, BPI Direct BanKo, and Bayan Academy",
      description:
        "Capilli is the recipient of the BPI Direct BanKo Negosyo Ko Award from the recently concluded 2023 BPI Sinag Synergy Social Entrepreneurship Challenge. This special award is given to a social enterprise who best exemplifies the combination of outstanding financial performance and meaningful social impact. We are thankful for BPI Direct BanKo, BPI Foundation, Inc., and Bayan Academy for your support in our mission to make a difference - one hair strand at a time.",
      date: "2023",
    },
    {
      image: oraclenetsuiteAward2023,
      title: "Netsuite Social Impact Recipient Award",
      organization: "Oracle NetSuite",
      description:
        "Capilli is excited to announce that we have joined the global network of NetSuite Social Impact customers that are using technology to ignite positive change. Thanks to NetSuite's customizable software, we'll be able to improve our operations and contribute to our mission of mitigating the environmental impacts of human waste hair and, at the same time, empowering communities. We are truly grateful for this opportunity and the recognition that we can truly make a positive impact - one hair strand at a time!",
      date: "2023",
    },
    {
      image: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=800&auto=format&fit=crop&q=60",
      title: "Pitch Champion",
      organization: "Bluepreneurs Asia Ventures",
      description:
        "Recognized for innovative business model and impactful sustainable solutions in the Asian entrepreneurship landscape.",
      date: "2022",
    },
    {
      image: "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?w=800&auto=format&fit=crop&q=60",
      title: "Most Inspiring Youth Entrepreneur",
      organization: "Local City Government of Iligan, Philippines",
      description:
        "Acknowledged for exemplary leadership and innovative contributions to sustainable entrepreneurship.",
      date: "2022",
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
    const currentIndex = leadershipTeam.findIndex(
      (member) => member.name === selectedMember.name
    );
    const prevIndex =
      currentIndex === 0 ? leadershipTeam.length - 1 : currentIndex - 1;
    setSelectedMember(leadershipTeam[prevIndex]);
  };

  const handleNextMember = () => {
    const currentIndex = leadershipTeam.findIndex(
      (member) => member.name === selectedMember.name
    );
    const nextIndex =
      currentIndex === leadershipTeam.length - 1 ? 0 : currentIndex + 1;
    setSelectedMember(leadershipTeam[nextIndex]);
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

      {/* Thesis Section */}
      <section className="container mx-auto px-6 py-20 relative">
        {/* Company Logo - Positioned as separate element, centered horizontally */}
        <div className="absolute -top-16 left-1/2 -translate-x-1/2 z-20">
          <div className="w-48 h-48 rounded-full bg-white p-4 shadow-xl border-8 border-green-50 transition-all duration-300 hover:scale-110 hover:rotate-12">
            <img
              src={companyLogo}
              alt="Capilli Trading Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Thesis Description */}
            <div className="md:w-1/2 p-6 md:p-8 pt-20 flex flex-col justify-center">
              <h2 className="text-2xl font-bold text-green-800 mb-4">
                Our Thesis
              </h2>
              <div className="prose prose-lg">
                <p className="text-gray-700 mb-4">
                  The foundation of Capilli Trading emerged from comprehensive
                  research at MSU-IIT's Industrial Design Studies program,
                  focusing on sustainable hair waste management solutions.
                </p>
                <p className="text-gray-700 mb-4">
                  CEO Harold John Laborte hatched up his research thesis on his
                  senior high school days, which was later on developed into a
                  startup company that aims to revolutionize the hair waste
                  management industry.
                </p>
              </div>
            </div>

            {/* Right Column - Thesis Image */}
            <div className="md:w-1/2 bg-gray-100">
              <div className="h-[300px] relative">
                <img
                  src={thesisImage}
                  alt="Thesis Research Documentation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0">
                  <div className="bg-gradient-to-t from-black/60 to-transparent absolute inset-0"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm text-center relative z-10">
                      Original thesis research documentation at MSU-IIT
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
          <div className="text-center mb-16">
            <h2 className="fade-up text-4xl md:text-5xl font-bold text-white mb-8">
              Our Team
            </h2>

            {/* Tab Buttons */}
            <div className="inline-flex rounded-lg bg-white/10 p-1 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("leadership")}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === "leadership"
                    ? "bg-white text-green-800 shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Leadership Officers
              </button>
              <button
                onClick={() => setActiveTab("board")}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === "board"
                    ? "bg-white text-green-800 shadow-lg"
                    : "text-white hover:bg-white/10"
                }`}
              >
                Board of Directors
              </button>
            </div>
          </div>

          {/* Leadership Team Tab Content */}
          <div className={`${activeTab === "leadership" ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {leadershipTeam.map((member, index) => (
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
                              member.name === "Zuein Guantero"
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

          {/* Board of Directors Tab Content */}
          <div className={`${activeTab === "board" ? "block" : "hidden"}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {boardDirectors.map((member, index) => (
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
                              member.name === "Zuein Guantero"
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

      {/* Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

export default About;
