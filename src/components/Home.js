import React from 'react';
import DataCards from './DataCards';
import { NewCarousel } from './NewCarousel';
import { UserCard, UserCardRow } from './UserCard';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useTheme } from '../contexts/ThemeContext';

function Home() {
  // const { darkMode } = useTheme();

  const carouselItems = [
    { title: "Top Trader of the Week", image: "/placeholder-image.jpg", description: "Trader XYZ with 500% ROI" },
    { title: "Highest PNL", image: "/placeholder-image.jpg", description: "$1,000,000 in profits" },
    // Add more items as needed
  ];

  return (
    <div className="HomePage">
            <NewCarousel />
      <div className="flex justify-center">
        
        <UserCardRow />
      </div>
    </div>
  );
  
}

export default Home;