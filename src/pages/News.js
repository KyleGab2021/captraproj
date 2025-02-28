import React from 'react';
import './News.css';

function News() {
  return (
    <div className="news-container">
      <div className="news-hero">
        <h1>Latest News</h1>
        <p>Stay updated with Capilli Trading's latest developments and initiatives</p>
      </div>
      
      <div className="news-grid">
        <article className="news-card">
          <div className="news-image-container">
            <img src="https://picsum.photos/800/600" alt="News Sample" className="news-image" />
            <div className="news-date">June 15, 2023</div>
          </div>
          <div className="news-content">
            <h2>Capilli Trading Launches New Environmental Initiative</h2>
            <p className="news-excerpt">
              Our company has launched a groundbreaking initiative to promote sustainable practices
              in the hair trading industry, focusing on waste reduction and community development.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </article>

        <article className="news-card">
          <div className="news-image-container">
            <img src="https://picsum.photos/800/600?random=2" alt="News Sample" className="news-image" />
            <div className="news-date">June 10, 2023</div>
          </div>
          <div className="news-content">
            <h2>Partnership with Local Communities</h2>
            <p className="news-excerpt">
              Capilli Trading establishes new partnerships with local communities to create
              sustainable economic opportunities through hair trading.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>
        </article>
      </div>
    </div>
  );
}

export default News;