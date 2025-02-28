import React, { useEffect } from 'react';
import haroldImage from '../assets/haroldlaborte.jpg';
import marianImage from '../assets/mariancelestellanes.jpg';

function About() {
  const defaultImage = "https://placehold.co/400x600/10A54A/ffffff?text=Team+Member";

  const teamMembers = [
    {
      image: haroldImage,
      name: "Harold John Laborte",
      position: "Founder & CEO",
      delay: 0
    },
    {
      image: marianImage,
      name: "Marian Celeste Llanes",
      position: "Vice President for Marketing",
      delay: 200
    },
    {
      image: defaultImage,
      name: "Zuein Guantero",
      position: "Co-founder & COO & President",
      delay: 400
    },
    {
      image: defaultImage,
      name: "Kris Vasallo",
      position: "Board of Directors Chair and Research Consultant",
      delay: 600
    },
    {
      image: defaultImage,
      name: "Phoebe Pahunang",
      position: "Chief Financial Officer",
      delay: 800
    },
    {
      image: defaultImage,
      name: "Reinna Calo",
      position: "Co-Founder and Chief Product Officer",
      delay: 1000
    },
    {
      image: defaultImage,
      name: "Arsenio Meneses",
      position: "Vice President for Marketing",
      delay: 1200
    },
    {
      image: defaultImage,
      name: "Jessy de Castro",
      position: "Management Intern",
      delay: 1400
    },
    {
      image: defaultImage,
      name: "Rhoie Jhannarie Omlero",
      position: "People and Culture Manager",
      delay: 1600
    },
    {
      image: defaultImage,
      name: "Sittie Zaima ",
      position: "Marketing Intern",
      delay: 1800
    },
  ];

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
      <section className="relative h-[50vh] bg-gradient-to-br from-green-600 to-green-900 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-20"></div>
        
        <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center relative">
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
              Capilli Trading Inc. is a Northern Mindanao-based social enterprise that involves
              collecting, processing, and trading human waste hair. Capilli strives to create
              social, economic and environmental value out of human waste hair by establishing
              systems that utilizes the waste product as a resource that can be traded and
              transformed into a sustainable by-product for different industries.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="fade-up text-4xl md:text-5xl font-bold text-green-900 text-center mb-16">
          Our Leadership Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="fade-up group"
              style={{ transitionDelay: `${index * 100}ms` }}
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
    </div>
  );
}

export default About;
