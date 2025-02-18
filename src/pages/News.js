import React from 'react'; // Importing the React library
import './News.css'; // Importing the CSS file for styling

function News() {
	return (
		<div className="news-container"> {/* Container for the entire News page */}
			<section className="news-description"> {/* Section for the News page description */}
				<h1>News</h1> {/* Heading for the News page */}
			</section>
			<section className="news-section"> {/* Section for the News content */}
				<section className="news-grid"> {/* Grid layout for news items */}
					<section className="news-card"> {/* Individual news card */}
						<img src="https://via.placeholder.com/300" alt="News Image" className="news-image" /> {/* Placeholder image for the news */}
						<div className="news-caption"> {/* Container for the news caption */}
							<h2>News Title</h2> {/* Title of the news */}
							<p>News Description</p> {/* Description of the news */}
						</div>
					</section>
				</section>
			</section>
		</div>
	);
}

export default News; // Exporting the News component as the default export