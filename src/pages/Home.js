import React, { useState, useEffect } from 'react';
import './Home.css';
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
import wtGardens from '../assets/wtgardens_sponsorlogo.png';

function Home() {
  const [isIntersecting, setIsIntersecting] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(prev => ({
            ...prev,
            [entry.target.dataset.section]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.2 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

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
    { src: spiPower, alt: 'SPI Power' },
    { src: wtGardens, alt: 'WT Gardens' }
  ];

  return (
    <div className="home">
      <section className="background-overlay">
        <div className="home-content slide-in">
          <img src={logoImage} alt="Capilli Trading Logo" className="logo-image" />
          <h1 className="fade-in-up">Welcome to Capilli Trading</h1>
          <p className="fade-in-up delay-1">Your trusted partner in trading and investment solutions.</p>
        </div>
      </section>

      <section 
        className={`section section-products ${isIntersecting['products'] ? 'active' : ''}`}
        data-section="products"
      >
        <h2 className="section-title">PRODUCTS</h2>
        <div className="product-grid">
          {[
            { image: hairRugImage, title: "Hair Rugs" },
            { image: hairMatImage, title: "Hair Plant Mats" }
          ].map((product, index) => (
            <div className="product-card" key={index}>
              <div className="product-image-wrapper">
                <img src={product.image} alt={product.title} className="product-image" />
              </div>
              <div className="product-caption">{product.title}</div>
            </div>
          ))}
        </div>
      </section>

      <section 
        className={`section section-advocacy ${isIntersecting['advocacy'] ? 'active' : ''}`}
        data-section="advocacy"
      >
        <h2 className="advocacy-heading">ADVOCACY</h2>
        <div className="advocacy-container">
          <div className="advocacy-left">
            <div className="advocacy-content">
              <p className="advocacy-text">We are committed to providing the best service and support to our clients.</p>
              <p className="advocacy-text">
                We envision to be the leading research with trading and by-product manufacturing company
                for waste human hair in the Philippines. Grounded on the principles of sustainability
                and creating positive socio-economic impacts to our partner communities.
              </p>
            </div>
          </div>
          <div className="advocacy-right">
            <div className="advocacy-image-wrapper">
              <img src={advocacyImage} alt="Advocacy" className="advocacy-image" />
            </div>
          </div>
        </div>
      </section>

      <section 
        className={`section section-sponsors ${isIntersecting['sponsors'] ? 'active' : ''}`}
        data-section="sponsors"
      >
        <h2 className="section-title">Our Partners</h2>
        <div className="sponsors-container">
          <div className="sponsors-track">
            {/* Repeat twice for seamless loop */}
            {[1, 2].map((set) => (
              <div key={set} className="sponsors-group">
                {sponsorLogos.map((logo, index) => (
                  <img 
                    key={`${set}-${index}`}
                    src={logo.src}
                    alt={logo.alt}
                    className="sponsor-logo"
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        className={`section section-contact-us ${isIntersecting['contact'] ? 'active' : ''}`}
        data-section="contact"
      >
        <h2 className="section-title">CONTACT US</h2>
        <div className="contact-us-container">
          <div className="contact-us-left">
            <img src={logoImage} alt="Capilli Trading Logo" className="logo-image" />
          </div>
          <div className="contact-us-right">
            <div className="contact-form">
              <h3>CONTACT INFO</h3>
              <form className="animated-form">
                <label htmlFor="name">NAME</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">EMAIL</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">MESSAGE</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
