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
          {[
            {
              image: haroldImage,
              name: "Harold Laborte",
              position: "Founder & CEO",
              delay: 0
            },
            {
              image: marianImage,
              name: "Marian Celeste Llanes",
              position: "Vice President for Marketing",
              delay: 200
            }
          ].map((member, index) => (
            <div 
              className="team-card animate-on-scroll" 
              key={index}
              style={{ animationDelay: `${member.delay}ms` }}
            >
              <div className="card-content">
                <div className="photo-container">
                  <img src={member.image} alt={member.name} />
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
