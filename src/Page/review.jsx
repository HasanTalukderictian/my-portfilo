import React, { useState, useEffect, useRef } from 'react';

const Review = ({ image, title, description, badges, isCenter }) => {
  return (
    <div className={`
      transition-all duration-500 ease-in-out
      ${isCenter ? 'transform scale-100' : 'transform scale-90 opacity-70'}
    `}>
      <div className={`
        bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group
        ${isCenter ? 'border-2 border-amber-400' : 'border border-gray-100'}
      `}>
        <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-500"></div>
        
        <div className="p-6 text-center">
          <div className="relative inline-block">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 blur-sm opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className={`
              relative rounded-full overflow-hidden ring-4 ring-white shadow-lg mx-auto
              ${isCenter ? 'w-28 h-28' : 'w-20 h-20'}
            `}>
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-amber-400 rounded-full p-1.5 shadow-md">
              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
          </div>

          <h2 className={`
            font-bold text-gray-800 mt-4
            ${isCenter ? 'text-xl' : 'text-lg'}
          `}>{title}</h2>
          
          <div className="flex justify-center gap-1 my-2">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-amber-400 fill-current" viewBox="0 0 24 24">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            ))}
          </div>
          
          <p className={`
            text-gray-600 italic leading-relaxed
            ${isCenter ? 'text-sm' : 'text-xs'}
          `}>"{description}"</p>
          
          <div className="flex justify-center gap-2 mt-4 flex-wrap">
            {badges.map((badge, index) => (
              <span 
                key={index} 
                className={`
                  px-3 py-1 font-medium rounded-full bg-amber-50 text-amber-600 border border-amber-200
                  ${isCenter ? 'text-xs' : 'text-[11px]'}
                `}
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const intervalRef = useRef(null);

  const reviews = [
    {
      image: "https://i.ibb.co.com/Cp1CbgfC/client1.jpg",
      title: "Mamun Hasan",
      description: "Excellent work man! Truly exceeded my expectations. Will definitely work again.",
      badges: ["Fashion", "Products"],
    },
    {
      image: "https://i.ibb.co.com/KcxRPqDc/client2.jpg",
      title: "Sharif Ahmed",
      description: "Really pleased with your work. Very professional approach and timely delivery.",
      badges: ["Accessories", "Fashion"],
    },
    {
      image: "https://i.ibb.co.com/7tc7Pfb8/client3.jpg",
      title: "Faruk Ahmed",
      description: "Quick and smart design! Delivered before deadline. Highly recommended!",
      badges: ["Fashion", "Accessories"],
    },
    {
      image: "https://i.ibb.co.com/Q7q8dcBG/client4.jpg",
      title: "Rafiq Khan",
      description: "Thanks for the best output. Creative and innovative design solutions.",
      badges: ["Fashion", "Luxury"],
    },
    {
      image: "https://i.ibb.co.com/nMh3YdBj/client5.jpg",
      title: "Raju Ahamed",
      description: "Keep doing good work. One of the best experiences I've had.",
      badges: ["Luxury", "Fashion"],
    },
    {
      image: "https://i.ibb.co.com/39S0Yz8T/client6.jpg",
      title: "Habib Mirza",
      description: "Amazing experience working with you. Very talented and creative.",
      badges: ["Luxury", "Fashion"],
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  // Start auto-play
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Empty dependency array - interval created once

  // Pause auto-play on hover
  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);
  };

  // Get 3 visible reviews
  const getVisibleReviews = () => {
    const prev = (currentIndex - 1 + reviews.length) % reviews.length;
    const next = (currentIndex + 1) % reviews.length;
    return [prev, currentIndex, next];
  };

  const visibleReviews = getVisibleReviews();

  return (
    <div 
      id="review" 
      className="w-full py-16 px-4 overflow-hidden" 
      style={{ backgroundColor: '#f5f5f1' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase bg-amber-50 px-4 py-1 rounded-full inline-block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
            What Our <span className="text-amber-500">Clients Say</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-500 mt-3 max-w-md mx-auto">
            Don't just take our word for it — hear from our satisfied clients
          </p>
        </div>

        <div className="relative flex items-center justify-center min-h-[500px]">
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-4 z-20 w-12 h-12 bg-white hover:bg-amber-400 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 px-8 md:px-12 w-full">
            {visibleReviews.map((reviewIndex, idx) => {
              const isCenter = idx === 1;
              return (
                <div
                  key={reviewIndex}
                  className={`
                    transition-all duration-500 ease-in-out
                    ${isCenter ? 'md:scale-100 z-10' : 'md:scale-90 z-0'}
                  `}
                >
                  <Review
                    image={reviews[reviewIndex].image}
                    title={reviews[reviewIndex].title}
                    description={reviews[reviewIndex].description}
                    badges={reviews[reviewIndex].badges}
                    isCenter={isCenter}
                  />
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-4 z-20 w-12 h-12 bg-white hover:bg-amber-400 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-10">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentIndex(idx);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`
                transition-all duration-300 rounded-full
                ${currentIndex === idx 
                  ? 'w-10 h-2.5 bg-amber-500' 
                  : 'w-2.5 h-2.5 bg-gray-300 hover:bg-amber-300'}
              `}
            />
          ))}
        </div>

        <div className="absolute left-0 top-1/2 -translate-y-1/2 -z-10 opacity-5">
          <svg className="w-80 h-80 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" />
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 -z-10 opacity-5">
          <svg className="w-64 h-64 text-amber-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L15 8.5L22 9.5L17 14L18.5 21L12 17.5L5.5 21L7 14L2 9.5L9 8.5L12 2Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;