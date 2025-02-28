import React, { useEffect } from 'react';
import './About.css';
import haroldImage from '../assets/haroldlaborte.jpg';
import marianImage from '../assets/mariancelestellanes.jpg';

function About() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // Add default placeholder image
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

  return (
    <div className="about">
      <section className="hero-section animate-on-scroll">
        <h1>About Us</h1>
        <div className="hero-underline"></div>
      </section>

      <section className="company-description animate-on-scroll">
        <div className="description-card">
          <p>Capilli Trading Inc. is a Northern Mindanao-based social enterprise that involves
             collecting, processing, and trading human waste hair. Capilli strives to create
             social, economic and environmental value out of human waste hair by establishing
             systems that utilizes the waste product as a resource that can be traded and
             transformed into a sustainable by-product for different industries.
          </p>
        </div>
      </section>

      <section className="team-section">
        <h2 className="animate-on-scroll">Our Leadership Team</h2>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div 
              className="team-card animate-on-scroll" 
              key={index}
              style={{ animationDelay: `${member.delay}ms` }}
            >
              <div className="card-content">
                <div className="photo-container">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    onError={(e) => {
                      e.target.src = defaultImage;
                    }}
                  />
                </div>
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
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
