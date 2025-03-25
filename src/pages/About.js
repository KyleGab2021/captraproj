import React, { useEffect, useState } from 'react';
import haroldImage from '../assets/haroldlaborte.jpg';
import marianImage from '../assets/mariancelestellanes.jpg';
import zueinImage from '../assets/zuein_guantero.jpg';
import krisImage from '../assets/kris_vasallo.jpg';
import phoebeImage from '../assets/phoebe_pahunang.jpg';
import reinnaImage from '../assets/reinna_calo.jpg';
import roseImage from '../assets/rosejean_laborte.jpg';
import peterImage from '../assets/peterglenn_rapiz.jpg';
import aboutBackground from '../assets/capilliaboutpagebg.jpg';

function About() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const defaultImage = "https://placehold.co/400x600/10A54A/ffffff?text=Team+Member";

  const teamMembers = [
    {
      image: haroldImage,
      name: "Harold John Laborte",
      position: "Chairperson & Chief Executive Officer",
      description: "Harold is a social entrepreneur currently based in Iligan City, Philippines. He is the Founder and CEO of Capilli Trading, Inc and Matter of Trust – Philippines. Harold graduated in 2015 with a degree in Business Economics at Xavier University – Ateneo de Cagayan where he once served as President of their university student council. He is finishing his Master’s Degree in Urban and Regional Planning at UP Diliman. Before founding Capilli, Harold has built his career in Revenue Management in the Airline and Hospitality industry. He is also part of Rev&You – a revenue management consulting company that supports hoteliers and hotel consultants in Europe, Australia, and the Philippines. Moreover, Harold is also a part-time faculty for Business and Entrepreneurship at the Mapua Malayan Digital College.",
      delay: 0
    },
    {
      image: roseImage,
      name: "Rose Jean Laborte",
      position: "Corporate Treasurer",
      description: "Rose manages Capilli Trading's financial operations, ensuring sustainable growth and fiscal responsibility in all business ventures.",
      delay: 200
    },
    {
      image: marianImage,
      name: "Marian Celeste Llanes",
      position: "Corporate Secretary & Vice President for Marketing",
      description: "Marian oversees marketing strategies and corporate communications, driving brand awareness and engagement.",
      delay: 400
    },
    {
      image: zueinImage,
      name: "Zuein Guantero",
      position: "President, Director & Chief Operating Officer",
      description: "Zuein is the President and Chief Operating Officer of Capilli Trading, Inc. He holds a degree in Business Administration major in Marketing Management at Xavier University – Ateneo de Cagayan where he also got his MBA. In winter 2015, after college, he was chosen as one of the academic fellows for Social Entrepreneurship and Economic Development in Arizona State University in USA as part of the Young South East Asian Leaders Initiative (YSEALI). Zuein is one of the founders of Sketch bags, a social enterprise in partnership with women sewers at Xavier Ecoville, Brgy. Lumbia, Cagayan de Oro City, which manufactures eco-bags and event giveaways. Zuein used to be involved with Misamis Oriental Province’s Department of Trade and Industry as coordinator of the Negosyo Center from 2016 to 2019. He once served with the national government serving at the Office of the Vice President as Unit Head of Sustainable Livelihood & Training Program. At present, aside from Capilli, Zuein is managing their family logistics business, NMZ Corporation, and teaching part-time at Xavier University – Ateneo de Cagayan.",
      delay: 600
    },
    {
      image: krisImage,
      name: "Krysthal Vasallo",
      position: "Vice Chairperson",
      description: "Krysthal supports the Chairperson in governance and strategic decision-making, contributing to the company's long-term success.",
      delay: 800
    },
    {
      image: phoebeImage,
      name: "Phoebe Aileen Pahunang",
      position: "Director & Chief Financial Officer",
      description: "Phoebe manages the financial planning and analysis, ensuring the company's financial health and sustainability.",
      delay: 1000
    },
    {
      image: reinnaImage,
      name: "Reinna Kris Calo",
      position: "Chief Product Officer",
      description: "Reinna takes on the role of Chief Product Officer of Capilli Trading, Inc. She holds a degree in Fine Arts major in Product Design at the University of the Philippines. Her first stint after college in 2015 was with Design Studio Vito Selma where she worked as a Junior Designer focusing on Product Research, Design, and Development. In 2018, she left to work for the government under Lanao Del Norte’s Department of Trade and Industry until January of 2021 where she served as the In-house Designer and Negosyo Center’s Business Counselor. At present, she is affiliated with the Design Center of the Philippines as a Senior Industrial Design Specialist.",
      delay: 1200
    },
    {
      image: peterImage,
      name: "Peter Glenn Rapiz",
      position: "Chief Commercial Officer",
      description: "Peter carries the role of Chief Commercial Officer for Capilli Trading, Inc. He graduated with a double degree in Community Development and Management in 2013 at the University of the Philippines – Visayas. He also holds a Master’s Degree in Public Administration from the University of Iloilo. At present, he is studying Law at the University of San Agustin Iloilo. In 2010, Peter was one of the selected Youth Ambassadors for the 37th Ship for Southeast Asian Youth Program by the National Youth Commission. Awarded in 2013 by the Philippine Center for Gifted Education and the Republic’s Office of the President, he was one of the National Awardees for “Mga Bagong Rizal: Pag-Asa ng Bayan.” Peter was affiliated with RedDoorz, a Southeast Asian Hotel Management Company offering affordable accommodations to partner properties, as its Regional Corporate Sales Manager in the Philippines. At present, he is Head of Sales of Ace Hotels Group.",
      delay: 1400
    },
  ];

  const handleMemberClick = (member) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
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
            <path fill="rgb(249 250 251)" d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1320,42.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
          </svg>
        </div>
      </section>

      {/* Description Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="fade-up max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 hover:shadow-[0_20px_50px_rgba(8,45,15,0.1)] transition-shadow duration-500">
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            Capilli is a Mindanao-based social enterprise start-up that upcycles human waste hair for different industries. The company's mission is to transform human waste hair into sustainable solutions, positioning itself as a pioneer in waste treatment and pollution remediation. Capilli collects human waste hair from salons and barbershops, diverting it from landfills, and partners with a community cooperative of mostly unemployed women and mothers to produce by-products using the innovative hair felting technology. In 2022, Capilli partnered with Matter of Trust – a US-based organization whose operations span across 30+ global hubs that initiate environmental and planetfriendly programs for the communities. Capilli operates the global brand in the Philippines. At present, Capilli offers better, cheaper, and more sustainable spill kit alternatives for spilled oil and chemicals, and mats for horticulture and gardening support.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="fade-up text-4xl md:text-5xl font-bold text-green-900 text-center mb-16">
          Our Founders
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="fade-up group cursor-pointer"
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => handleMemberClick(member)}
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    onError={(e) => { e.target.src = defaultImage }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-green-600 to-green-900 bg-clip-text text-transparent">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {member.position}
                  </p>
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
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-2/5">
                <div className="sticky top-0">
                  <img
                    src={selectedMember?.image}
                    alt={selectedMember?.name}
                    className="w-full h-[400px] lg:h-[600px] object-cover rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none"
                    onError={(e) => { e.target.src = defaultImage }}
                  />
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
                <div className="prose prose-lg max-w-none">
                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {selectedMember?.description.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
