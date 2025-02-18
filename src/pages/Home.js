import React, { useState, useEffect, useRef } from 'react'; // Importing React and hooks
import './Home.css'; // Importing the CSS file for styling
import hairMatImage from '../assets/capilliproducthairmat.jpg'; // Importing the product image
import hairRugImage from '../assets/capilliproducthairrug.jpg'; // Importing the product image
import logoImage from '../assets/capillitradinglogotext.png'; // Importing the logo image
import advocacyImage from '../assets/capilliadvocacyimg1.jpg'; // Importing the advocacy image

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility
  const advocacyRef = useRef(null); // Ref for advocacy section
  const productRefs = useRef([]); // Refs for product cards

  const openModal = () => {
    setIsModalOpen(true); // Function to open modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Function to close modal
  };

  const handleScroll = () => {
    const advocacyElement = advocacyRef.current; // Get advocacy element

    if (advocacyElement && isVisible(advocacyElement)) {
      advocacyElement.classList.add('animated'); // Add animation class if visible
    } else if (advocacyElement) {
      advocacyElement.classList.remove('animated'); // Remove animation class if not visible
    }

    productRefs.current.forEach((productRef) => {
      if (productRef && isVisible(productRef)) {
        productRef.classList.add('animated'); // Add animation class if visible
      } else if (productRef) {
        productRef.classList.remove('animated'); // Remove animation class if not visible
      }
    });
  };

  const isVisible = (element) => {
    const rect = element.getBoundingClientRect(); // Get element's bounding rectangle
    return rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight); // Check if element is visible
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll); // Add scroll event listener
    return () => {
      window.removeEventListener('scroll', handleScroll); // Remove scroll event listener on cleanup
    };
  }, []);

  return (
    <div className="home">
      <section className="background-overlay">
        <div className="home-content">
          <img src={logoImage} alt="Capilli Trading Logo" className="logo-image" /> {/* Logo image */}
          <h1>Welcome to Capilli Trading</h1> {/* Main heading */}
          <p>Your trusted partner in trading and investment solutions. We offer a wide range of services to help you achieve your financial goals. Explore our website to learn more about what we can do for you.</p> {/* Description */}
        </div>
      </section>
      <section className="section section-products">
        <h2>PRODUCTS</h2> {/* Products section heading */}
        <div className="product-grid">
          <div className="product-card" ref={(el) => (productRefs.current[0] = el)}> {/* Product card with ref */}
            <img src={hairRugImage} alt="Hair Rugs" className="product-image" /> {/* Product image */}
            <div className="product-caption-placeholder">Hair Rugs</div> {/* Product caption */}
          </div>
          <div className="product-card" ref={(el) => (productRefs.current[1] = el)}> {/* Product card with ref */}
            <img src={hairMatImage} alt="Hair Plant Mats" className="product-image" /> {/* Product image */}
            <div className="product-caption-placeholder">Hair Plant Mats</div> {/* Product caption */}
          </div>  
        </div>
      </section>
      <section className="section section-advocacy">
        <h2 className="advocacy-heading">Our Advocacy</h2> {/* Advocacy section heading */}
        <div className="advocacy-container" ref={advocacyRef}> {/* Advocacy container with ref */}
          <div className="advocacy-left">
            <p>We are committed to providing the best service and support to our clients.</p> {/* Advocacy description */}
            <p>
              We envision to be the leading research with trading and by-product manufacturing company for waste human hair in the Philippines.
              Grounded on the principles of sustainability and creating positive socio-economic impacts to our partner communities.
            </p>
          </div>
          <div className="advocacy-right">
            <div className="advocacy-image-placeholder">
              <img src={advocacyImage} alt="Advocacy Photo" className="advocacy-image" /> {/* Advocacy image */}
            </div>
          </div>
        </div>
      </section>
      <section className="section section-contact-us">
        <h2>CONTACT US</h2> {/* Contact us section heading */}
        <div className="contact-us-container">
          <div className="contact-us-left">
            <img src={logoImage} alt="Capilli Trading Logo" className="logo-image animated" /> {/* Logo image */}
          </div>
          <div className="contact-us-right">
            <div className="contact-form animated">
              <h3>CONTACT INFO</h3> {/* Contact info heading */}
              <form>
                <label htmlFor="name">NAME</label> {/* Name label */}
                <input type="text" id="name" name="name" required /> {/* Name input */}
                <label htmlFor="email">EMAIL</label> {/* Email label */}
                <input type="email" id="email" name="email" required /> {/* Email input */}
                <label htmlFor="message">MESSAGE</label> {/* Message label */}
                <textarea id="message" name="message" required></textarea> {/* Message textarea */}
                <button type="submit">SUBMIT</button> {/* Submit button */}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; // Exporting the Home component as the default export
