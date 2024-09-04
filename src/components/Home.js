import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from '../contexts/ThemeContext';

function Home() {
  const { darkMode } = useTheme();

  const carouselItems = [
    { title: "Top Trader of the Week", image: "/placeholder-image.jpg", description: "Trader XYZ with 500% ROI" },
    { title: "Highest PNL", image: "/placeholder-image.jpg", description: "$1,000,000 in profits" },
    // Add more items as needed
  ];

  return (
    <div className={`home ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <h1 className="welcome-title">Welcome to Nova</h1>
      <div className="carousel-container">
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true} autoPlay={true} interval={5000}>
          {carouselItems.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img src={item.image} alt={item.title} />
              <div className="legend">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;