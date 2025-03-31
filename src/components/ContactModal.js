import React from 'react';
import logoImage from "../assets/capillitradinglogotext.png";

// Reusable Contact Modal Component
const ContactModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-4xl relative transform transition-all animate-scale-in mx-4">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10 bg-white rounded-full p-2 transition-transform hover:scale-110"
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

        <div className="flex flex-col md:flex-row">
          {/* Left side with logo and info */}
          <div className="md:w-2/5 bg-gradient-to-br from-green-700 to-green-900 p-6 md:p-8 text-white rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none">
            <div className="flex items-center mb-6">
              <img
                src={logoImage}
                alt="Capilli Trading Logo"
                className="h-12 w-12 object-contain mr-3"
              />
              <h3 className="text-xl font-bold">Capilli Trading</h3>
            </div>
            
            <div className="border-t border-white border-opacity-20 my-6"></div>
            
            <h4 className="text-lg font-medium mb-4">Get in Touch</h4>
            <p className="text-gray-200 text-sm mb-6">
              Have questions or want to collaborate? Send us a message and our team will get back to you soon.
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="text-sm">+63 (908) 123-4567</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="text-sm">info@capillitrading.com</span>
              </div>
              
              <div className="flex items-center">
                <div className="bg-white bg-opacity-20 p-2 rounded-full mr-3">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm">Ipil St, Cagayan de Oro, Philippines</span>
              </div>
            </div>
          </div>
          
          {/* Right side with form */}
          <div className="md:w-3/5 p-6 md:p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="modal-name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="modal-name"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="modal-email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="modal-email"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="example@email.com"
                    />
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="modal-topic" className="block text-sm font-medium text-gray-700 mb-1">Topic</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <select
                    id="modal-topic"
                    className="w-full pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                  >
                    <option value="">Select a topic</option>
                    <option value="products">Hair Products</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="sustainability">Sustainability Programs</option>
                    <option value="other">Other Inquiry</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="modal-message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <div className="relative">
                  <div className="absolute left-0 top-0 pt-3 pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                    </svg>
                  </div>
                  <textarea
                    id="modal-message"
                    rows="5"
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
              </div>
              
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7" />
                  </svg>
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;