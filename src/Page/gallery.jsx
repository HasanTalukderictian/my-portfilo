import  { useState } from 'react';
import '../css/Gallery.css'; // Make sure to create and import this CSS file

const images = [
    '/src/image/gallery/gallery1.jpg',
    '/src/image/gallery/gallery2.jpg',
    '/src/image/gallery/gallery3.jpg',
    '/src/image/gallery/gallery4.jpg',
    '/src/image/gallery/gallery5.jpg',
    '/src/image/gallery/gallery6.jpg',
];

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openLightbox = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    return (
        <div className="gallery-container p-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-yellow-400">Image Gallery</h2>
            <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((image, index) => (
                    <div key={index} className="relative">
                        <img
                            src={image}
                            alt={`Gallery Image ${index + 1}`}
                            className="gallery-image w-full h-64 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                            onClick={() => openLightbox(image)}
                        />
                    </div>
                ))}
            </div>

            {isOpen && (
                <div className="lightbox-overlay" onClick={closeLightbox}>
                    <div className="lightbox-content">
                        <span className="lightbox-close" onClick={closeLightbox}>×</span>
                        <img src={currentImage} alt="Lightbox" className="lightbox-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
