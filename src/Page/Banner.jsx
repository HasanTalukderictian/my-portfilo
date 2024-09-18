import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/tooltip.css'; // Make sure to import the CSS file

const Banner = () => {
    return (
        <div 
            id="banner" // Added id here
            className="flex flex-col md:flex-row min-h-screen bg-black"
            style={{ 
                backgroundImage: "url('/src/image/bg-cover.jpg')", 
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat' 
            }}
        >
            <div
                className="flex-1 flex flex-col items-center justify-center"
            >
                <h2 className="text-red-500 text-2xl md:text-4xl font-serif lg:text-4xl font-semibold animate-fadeIn opacity-0 animation-delay-1">
                    Hi, This is Hasan Talukder
                </h2>
                <h3 className="text-gray-800  text-2xl font-seri mt-2 font-bold animate-fadeIn opacity-0 animation-delay-2">Software Developer</h3>
                <h3 className="text-gray-800 text-2xl font-seri mt-2 font-bold animate-fadeIn opacity-0 animation-delay-2">Software Engineer</h3>
                <h3 className="text-gray-800 text-2xl font-seri mt-2 font-bold animate-fadeIn opacity-0 animation-delay-3">Researcher</h3>
                <h3 className="text-white text-2xl font-seri mt-2 font-bold animate-fadeIn opacity-0 animation-delay-4">Youtuber</h3>

                {/* Social Media Icons */}
                <div className="flex space-x-4 mt-4 mb-4 gap-4">
                    {/* Facebook */}
                    <div className="tooltip-container animate-fadeIn opacity-0 animation-delay-5">
                        <a href="https://www.facebook.com/hasan.talukder.Ict/" target="_blank" rel="noopener noreferrer" className="text-blue-600 text-3xl hover:text-blue-400 transition-colors">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <span className="tooltip-text">Facebook</span>
                    </div>

                    {/* YouTube */}
                    <div className="tooltip-container animate-fadeIn opacity-0 animation-delay-6">
                        <a href="https://www.youtube.com/channel/UCbakZL5H4TvSbrJ4rkslC9A" target="_blank" rel="noopener noreferrer" className="text-red-600 text-3xl hover:text-red-400 transition-colors">
                            <i className="fab fa-youtube"></i>
                        </a>
                        <span className="tooltip-text">YouTube</span>
                    </div>

                    {/* GitHub */}
                    <div className="tooltip-container animate-fadeIn opacity-0 animation-delay-7">
                        <a href="https://github.com/HasanTalukderictian" target="_blank" rel="noopener noreferrer" className="text-gray-800 text-3xl hover:text-gray-600 transition-colors">
                            <i className="fab fa-github"></i>
                        </a>
                        <span className="tooltip-text">GitHub</span>
                    </div>

                    {/* LinkedIn */}
                    <div className="tooltip-container animate-fadeIn opacity-0 animation-delay-8">
                        <a href="https://www.linkedin.com/in/js-hasan-talukder/" target="_blank" rel="noopener noreferrer" className="text-blue-700 text-3xl hover:text-blue-500 transition-colors">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <span className="tooltip-text">LinkedIn</span>
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex space-x-4 mt-4 mb-4">
                    <div className="animate-fadeIn opacity-0 animation-delay-10">
                        <a href='#contact' className="btn btn-warning transition-transform transform hover:scale-105 duration-300">Hire Me</a>
                    </div>
                    <div className="animate-fadeIn opacity-0 animation-delay-11">
                        <a
                            href="/cv/Hasan Talukder.pdf"
                            download="Hasan_Talukder_CV.pdf"
                            className="btn btn-primary transition-transform transform hover:scale-105 duration-300"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>

            {/* Circular Image Box */}
            <div className="flex-1 flex items-center justify-center">
                <div className="relative rounded-full w-96 h-96 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2 shadow-lg">
                    <img
                        src="/src/image/hasan.jpg"
                        alt="Hasan Talukder"
                        className="rounded-full object-cover w-full h-full border-4 border-white shadow-md transform transition-transform duration-300 hover:scale-110"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;
