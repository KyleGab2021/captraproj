import React from 'react'; // Importing the React library
import './About.css'; // Importing the CSS file for styling
import haroldImage from '../assets/haroldlaborte.jpg'; // Importing the founder image
import marianImage from '../assets/mariancelestellanes.jpg'; // Importing the image for Marian Celeste Llanes

function About() {
  return (
    <div className="about">
      <section className="company-description">
        <h1>ABOUT US</h1> {/* Heading for the About Us section */}
        <p>Capilli Trading Inc. is a Northern Mindanao-based social enterprise that involves
           collecting, processing, and trading human waste hair. Capilli strives to create
           social, economic and environmental value out of human waste hair by establishing
           systems that utilizes the waste product as a resource that can be traded and
           transformed into a sustainable by-product for different industries.
        </p>
      </section>
      <section className="team-section">
        <h2>MEET THE TEAM BEHIND CAPILLI INC.</h2> {/* Heading for the team section */}
        <div className="team-grid">
          <div className="team-card">
            <div className="photo-placeholder">
              <img src={haroldImage} alt="Harold John Laborte" /> {/* Image of Harold John Laborte */}
            </div>
            <div className="caption-placeholder">
              <p>Harold Laborte</p> {/* Name of Harold John Laborte */}
              <p>Founder & CEO</p> {/* Position of Harold John Laborte */}
            </div>
          </div>
          <div className="team-card">
            <div className="photo-placeholder">
              <img src={marianImage} alt="Marian Celeste Llanes" /> {/* Image of Marian Celeste Llanes */}
            </div>
            <div className="caption-placeholder">
              <p>Marian Celeste Llanes</p> {/* Name of Marian Celeste Llanes */}
              <p>Vice President for Marketing</p> {/* Position of Marian Celeste Llanes */}
            </div>
          </div>
          <div className="team-card">
            <div className="photo-placeholder">
              <img src="" alt="Team Member Photo" /> {/* Placeholder for team member photo */}
            </div>
            <div className="caption-placeholder">
              <p>Team Member Name</p> {/* Placeholder for team member name */}
              <p>Team Member Position</p> {/* Placeholder for team member position */}
            </div>
          </div>
          <div className="team-card">
            <div className="photo-placeholder">
              <img src="" alt="Team Member Photo" /> {/* Placeholder for team member photo */}
            </div>
            <div className="caption-placeholder">
              <p>Team Member Name</p> {/* Placeholder for team member name */}
              <p>Team Member Position</p> {/* Placeholder for team member position */}
            </div>
          </div>
          <div className="team-card">
            <div className="photo-placeholder">
              <img src="" alt="Team Member Photo" /> {/* Placeholder for team member photo */}
            </div>
            <div className="caption-placeholder">
              <p>Team Member Name</p> {/* Placeholder for team member name */}
              <p>Team Member Position</p> {/* Placeholder for team member position */}
            </div>
          </div>
          <div className="team-card">
            <div className="photo-placeholder">
              <img src="" alt="Team Member Photo" /> {/* Placeholder for team member photo */}
            </div>
            <div className="caption-placeholder">
              <p>Team Member Name</p> {/* Placeholder for team member name */}
              <p>Team Member Position</p> {/* Placeholder for team member position */}
            </div>
          </div>
          <div className="team-card">
            <div className="photo-placeholder">
              <img src="" alt="Team Member Photo" /> {/* Placeholder for team member photo */}
            </div>
            <div className="caption-placeholder">
              <p>Team Member Name</p> {/* Placeholder for team member name */}
              <p>Team Member Position</p> {/* Placeholder for team member position */}
            </div>
          </div>
          {/* Add more team cards as needed */}
        </div>
      </section>
    </div>
  );
}

export default About; // Exporting the About component as the default export
