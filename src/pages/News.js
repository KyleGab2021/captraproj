import React from 'react';
import './News.css';

function News() {
  // Temporary placeholder image URL
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

  return (
    <div className="news-container">
      <div className="news-hero">
        <h1>Awards & Recognition</h1>
        <p>Celebrating our milestones and achievements in sustainable innovation</p>
      </div>
      
      <div className="news-grid">
        {awards.map((award, index) => (
          <article className="news-card" key={index}>
            <div className="news-image-container">
              <img 
                src={placeholderImage} 
                alt={award.title}
                className="news-image"
                onError={(e) => {
                  e.target.src = "https://placehold.co/600x400/10A54A/ffffff?text=Award";
                }}
              />
              <div className="news-date">{award.date}</div>
            </div>
            <div className="news-content">
              <h2>{award.title}</h2>
              <p className="news-excerpt">{award.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default News;