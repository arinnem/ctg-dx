import React, { useState, useRef } from 'react';
import InitiativeCard from './InitiativeCard';

interface InitiativeCarouselProps {
  initiatives: any[];
  onViewDetails: (id: number) => void;
}

const InitiativeCarousel: React.FC<InitiativeCarouselProps> = ({ initiatives, onViewDetails }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Calculate how many slides we need (2 initiatives per slide)
  const initiativesPerSlide = 2;
  const totalSlides = Math.ceil(initiatives.length / initiativesPerSlide);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Get initiatives for current slide
  const getCurrentSlideInitiatives = () => {
    const startIndex = currentIndex * initiativesPerSlide;
    return initiatives.slice(startIndex, startIndex + initiativesPerSlide);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Carousel Container */}
      <div 
        ref={carouselRef}
        className="relative overflow-hidden rounded-xl"
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const slideInitiatives = initiatives.slice(
              slideIndex * initiativesPerSlide, 
              slideIndex * initiativesPerSlide + initiativesPerSlide
            );
            
            return (
              <div 
                key={slideIndex} 
                className="w-full flex-shrink-0 px-4"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  {slideInitiatives.map((initiative) => (
                    <InitiativeCard
                      key={initiative.id}
                      imageUrl={initiative.imageUrl}
                      title={initiative.title}
                      summary={initiative.summary}
                      members={initiative.members}
                      highlightResults={initiative.highlightResults}
                      onViewDetails={() => onViewDetails(initiative.id)}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
        aria-label="Previous slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-3 shadow-lg transition-all duration-200 z-10"
        aria-label="Next slide"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-blue-600 scale-125' 
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="text-center mt-4 text-sm text-gray-500">
        {currentIndex + 1} / {totalSlides}
      </div>
    </div>
  );
};

export default InitiativeCarousel; 