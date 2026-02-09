import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS
import '../css/customCarousel.css'; // Custom CSS for arrows

// Review component accepts dynamic content through props
const Review = ({ image, title, description, badges }) => {
  return (
    <div className="card bg-gray-100 w-52 sm:w-80 shadow-xl sm:m-2 lg:m-1 border-yellow-500 border-4 rounded-xl overflow-hidden">
      {/* Circular image container */}
      <figure className="flex justify-center items-center p-4">
        <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-4 border-yellow-500">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      </figure>

      <div className="card-body text-black text-left">
        <h2 className="card-title font-bold text-lg sm:text-xl">{title}</h2>
        <p className="text-sm sm:text-base mt-1">{description}</p>
        <div className="card-actions justify-start mt-2 flex-wrap gap-2">
          {badges.map((badge, index) => (
            <div key={index} className="badge badge-outline">{badge}</div>
          ))}
        </div>
      </div>
    </div>

  );
};

const ReviewCarousel = () => {
  // Define an array of review data
  const reviews = [
    {
      image: "src/image/clients/client1.jpg",
      title: "Mamun",
      description: "Excellent work man.",
      badges: ["Fashion", "Products"],
    },
    {
      image: "src/image/clients/client2.jpg",
      title: "Sharif",
      description: "Reallay Pleased with your Work.",
      badges: ["Accessories", "Fashion"],
    },
    {
      image: "src/image/clients/client3.jpg",
      title: "Faruk Ahmed",
      description: "Quick and smart design man!.",
      badges: ["Fashion", "Accessories"],
    },
    {
      image: "src/image/clients/client5.jpg",
      title: "Rafiq Khan",
      description: "Thanks for the best Output.",
      badges: ["Fashion", "Luxury"],
    },
    {
      image: "src/image/clients/client6.jpg",
      title: "Raju Ahamed",
      description: "Keep doing Good Work.",
      badges: ["Luxury", "Fashion"],
    },
  ];

  // Function to dynamically determine centerSlidePercentage based on window width
  const getCenterSlidePercentage = () => {
    if (window.innerWidth >= 1024) {
      return 33.33; // Reduce percentage to fit three cards with minimal gap
    } else if (window.innerWidth >= 768) {
      return 50; // Show two cards with smaller gaps on tablets
    } else {
      return 100; // Full width on mobile
    }
  };

  return (
    <div id="review" className="container mx-auto bg-[#F4F1E6] p-4 sm:p-7">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 text-black">Clients Review</h2>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        showThumbs={false}
        interval={3000}
        centerMode={true}
        centerSlidePercentage={getCenterSlidePercentage()} // Adjust slide percentage based on device size
        showStatus={false}
        swipeable={true}
        emulateTouch={true} // Enable swiping for touch devices
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute left-0 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg focus:outline-none"
              aria-label={label}
              style={{ top: '50%' }}
            >
              &#10094;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button
              type="button"
              onClick={onClickHandler}
              className="absolute right-0 z-10 p-2 sm:p-3 bg-white rounded-full shadow-lg focus:outline-none"
              aria-label={label}
              style={{ top: '50%' }}
            >
              &#10095;
            </button>
          )
        }
      >
        {reviews.map((review, index) => (
          <Review
            key={index}
            image={review.image}
            title={review.title}
            description={review.description}
            badges={review.badges}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default ReviewCarousel;
