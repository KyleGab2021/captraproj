import React, { useEffect, useRef } from 'react';

function News() {
  const placeholderImage = "https://placehold.co/600x400/10A54A/ffffff?text=Award";
  const awards = [
    {
      date: "March 2023",
      title: "Global Recognition at Art of the Pivot",
      description: "Featured as one of the panelists alongside sustainable entrepreneurs across the globe during the Art of the Pivot.",
    },
    {
      date: "March 2023",
      title: "2023 Green Impact Accelerator Top 20",
      description: "Selected as part of the Top 20 in the 2023 Green Impact Accelerator by the Spark Project and US Embassy of the Philippines.",
    },
    {
      date: "2023",
      title: "NEXPH Startup of the Year",
      description: "Awarded Startup of the Year by NEXPH. CEO Harold John Laborte was also awarded Founder of the Year.",
    },
    {
      date: "2023",
      title: "BPI Sinag 2023 Award",
      description: "Received the BPI Direct BanKo Negosyo Ko Award in BPI Sinag 2023.",
    },
    {
      date: "2023",
      title: "Iligan Business Awards - Best Startup",
      description: "Awarded Best Startup of the Year during the Iligan Business Awards.",
    },
    {
      date: "2023",
      title: "Young Entrepreneur Outstanding Award",
      description: "CEO Harold John Laborte received the Young Entrepreneur Outstanding Award.",
    },
    {
      date: "2022",
      title: "Most Inspiring Youth Enterprise",
      description: "Recognized as Most Inspiring Youth Enterprise and Entrepreneur during the Iligan Business Awards.",
    },
    {
      date: "2024",
      title: "Pasigarbo sa Diyandi Excellence Award",
      description: "Young Entrepreneur Outstanding Awardee at the Pasigarbo sa Diyandi: Youth Leadership and Excellence Awards.",
    },
    {
      date: "October 2022",
      title: "Villgro PH Business Growth Support Award",
      description: "Received the Villgro PH Business Growth Support Award at the BPI Sinag Social Entrepreneurship Challenge.",
    }
  ];

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-green-600 to-green-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <h1 className="fade-up text-4xl md:text-6xl font-bold text-white mb-6">
            Awards & Recognition
          </h1>
          <p className="fade-up text-xl text-gray-200 max-w-2xl mx-auto delay-200">
            Celebrating our milestones and achievements in sustainable innovation
          </p>
        </div>
      </section>

      {/* Awards Grid */}
      <section className="container mx-auto px-6 py-20 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="fade-up group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Card content */}
                <div className="relative">
                  <div className="aspect-w-16 aspect-h-9">
                    <img 
                      src={placeholderImage} 
                      alt={award.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = placeholderImage }}
                    />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-full">
                      {award.date}
                    </span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {award.title}
                  </h2>
                  <p className="text-gray-600">
                    {award.description}
                  </p>
                  <div className="mt-6 flex justify-end">
                    <button className="inline-flex items-center text-green-600 hover:text-green-700 transition-colors">
                      Read more
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default News;