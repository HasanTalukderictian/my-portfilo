// import '@fortawesome/fontawesome-free/css/all.min.css';
// import '../css/tooltip.css';
// import '../css/banner.css';
// import { useEffect, useState } from 'react';

// const Banner = () => {

//     const roles = ["Software Developer", "Software Engineer", "Researcher", "Youtuber"];

//     const [currentRole, setCurrentRole] = useState(0);
//     const [displayText, setDisplayText] = useState("");
//     const [charIndex, setCharIndex] = useState(0);

//     useEffect(() => {
//         const typingSpeed = 50; // typing speed in ms
//         const currentText = roles[currentRole];

//         const typingInterval = setInterval(() => {
//             setDisplayText(currentText.substring(0, charIndex + 1));
//             setCharIndex(prev => prev + 1);
//         }, typingSpeed);

//         if (charIndex === currentText.length) {
//             clearInterval(typingInterval);
//             setTimeout(() => {
//                 setDisplayText("");
//                 setCharIndex(0);
//                 setCurrentRole((prev) => (prev + 1) % roles.length);
//             }, 600); // pause before next role
//         }

//         return () => clearInterval(typingInterval);
//     }, [charIndex, currentRole]);

//     return (
//         <div
//             id="banner"
//             className="flex flex-col md:flex-row min-h-[90vh] pt-6 md:pt-10 bg-gray-100"

//         >
//             {/* Left Text Content */}
//             <div className="flex-1 flex flex-col items-start justify-start pl-10 pt-20 md:pt-16">
//                 <h2 className="text-red-500 mt-2 text-2xl md:text-4xl font-serif lg:text-4xl font-semibold mt-4">
//                     Hi
//                 </h2>

//                 <h1 className="text-3xl font-bold mt-4">
//                     <span className="text-primary">I AM</span> Hasan Talukder, a Full Stack
//                 </h1>


//                 {/* Typing Effect Text with Gradient */}

//                 <h3 className="text-4xl md:text-5xl font-extrabold mt-5 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
//                     {displayText}
//                     <span className="animate-pulse text-black font-thin ml-1">|</span>
//                 </h3>

//                 <p className="text-gray-700 text-base md:text-lg leading-relaxed mt-5">
//                     I'm a Web Designer & Developer passionate about creating error-free websites with 100% client satisfaction.
//                     I love learning, sharing knowledge, and solving real-world problems. I primarily work with React JS, JavaScript,
//                     Laravel, Mysql, and other modern technologies.
//                 </p>

//                 {/* Social Media Icons */}
//                 <div className='mt-10 mb-8'>
//                     <h3 className="font-sans font-bold text-lg mt-5 text-[#171613]">
//                         Find on me
//                     </h3>

//                     <div className="flex space-x-4 mt-8 mb-2">
//                         {/* Facebook */}
//                         <div className="tooltip-container">
//                             <a
//                                 href="https://www.facebook.com/hasan.talukder.Ict/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white border-2 border-gray-200 text-blue-600 text-2xl p-2 rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.6)] hover:text-blue-400 transition-colors"
//                             >
//                                 <i className="fab fa-facebook-f"></i>
//                             </a>
//                             <span className="tooltip-text">Facebook</span>
//                         </div>

//                         {/* YouTube */}
//                         <div className="tooltip-container">
//                             <a
//                                 href="https://www.youtube.com/channel/UCbakZL5H4TvSbrJ4rkslC9A"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white border-2 border-gray-200 text-red-600 text-2xl p-2 rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.6)] hover:text-red-400 transition-colors"
//                             >
//                                 <i className="fab fa-youtube"></i>
//                             </a>
//                             <span className="tooltip-text">YouTube</span>
//                         </div>

//                         {/* GitHub */}
//                         <div className="tooltip-container">
//                             <a
//                                 href="https://github.com/HasanTalukderictian"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white border-2 border-gray-200 text-gray-800 text-2xl p-2 rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.6)] hover:text-gray-600 transition-colors"
//                             >
//                                 <i className="fab fa-github"></i>
//                             </a>
//                             <span className="tooltip-text">GitHub</span>
//                         </div>

//                         {/* LinkedIn */}
//                         <div className="tooltip-container">
//                             <a
//                                 href="https://www.linkedin.com/in/js-hasan-talukder/"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="bg-white border-2 border-gray-200 text-blue-700 text-2xl p-2 rounded-full shadow-[0_4px_15px_rgba(255,255,255,0.6)] hover:text-blue-500 transition-colors"
//                             >
//                                 <i className="fab fa-linkedin"></i>
//                             </a>
//                             <span className="tooltip-text">LinkedIn</span>
//                         </div>
//                     </div>
//                 </div>

//                 <p>

//                 </p>





//                 {/* Buttons */}
//                 <div className="flex space-x-4 mt-2 mb-2">
//                     {/* Hire Me Button */}
//                     <div>
//                         <a
//                             href="#contact"
//                             className="relative inline-block px-6 py-2 font-semibold text-gray-800 bg-white border-2 border-gray-300 rounded-full overflow-hidden group transition-transform transform hover:scale-105 duration-300"
//                         >
//                             {/* Gradient circular line */}
//                             <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
//                             {/* Text */}
//                             <span className="relative group-hover:text-white transition-colors duration-300">
//                                 Hire Me
//                             </span>
//                         </a>
//                     </div>

//                     {/* Download CV Button */}
//                     <div>
//                         <a
//                             href="/cv/Hasan Talukder.pdf"
//                             download="Hasan_Talukder_CV.pdf"
//                             className="relative inline-block px-6 py-2 font-semibold text-gray-800 bg-white border-2 border-gray-300 rounded-full overflow-hidden group transition-transform transform hover:scale-105 duration-300"
//                         >
//                             {/* Gradient circular line */}
//                             <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-500 group-hover:w-full rounded-full"></span>
//                             {/* Text */}
//                             <span className="relative group-hover:text-white transition-colors duration-300">
//                                 Download CV
//                             </span>
//                         </a>
//                     </div>
//                 </div>




//             </div>




//             <div className="flex-1 flex items-center justify-center relative">

//                 {/* Background Big Text */}
//                 <h1 className="bg-text">Web</h1>
//                 <h1 className="bg-text">Developer</h1>

//                 {/* Main Image */}
//                 <div className="image-wrapper">
//                     <img
//                         src="https://i.ibb.co.com/hJ7GM2jK/Me.png"
//                         alt="Hasan Talukder"
//                         className="profile-img"
//                     />
//                 </div>

//                 {/* Bottom Outline Text */}
//                 <h2 className="outline-text">
//                     Software Engineer
//                 </h2>

//             </div>


//         </div>
//     );
// };

// export default Banner;

import { useEffect, useState } from 'react';
import { socials } from './data';

const roles = ['Software Developer', 'Software Engineer', 'Researcher', 'YouTuber'];

const Banner = ({ id = 'banner' }) => {
    const [role, setRole] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);

    // Type -> pause -> delete -> next role
    useEffect(() => {
        const full = roles[role];
        const atEnd = !deleting && text === full;
        const delay = atEnd ? 1200 : deleting ? 35 : 70;

        const timer = setTimeout(() => {
            if (atEnd) setDeleting(true);
            else if (deleting && text === '') {
                setDeleting(false);
                setRole((role + 1) % roles.length);
            } else {
                setText(full.slice(0, text.length + (deleting ? -1 : 1)));
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, deleting, role]);

    return (
        <section id={id} className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2">
            {/* Text */}
            <div>
                <p className="text-lg font-medium text-teal-700">Hi, I'm</p>
                <h1 className="font-display mt-2 text-5xl font-extrabold text-slate-900 md:text-6xl">
                    Hasan Talukder
                </h1>
                <p className="font-display mt-4 h-10 text-2xl font-semibold text-slate-800 md:text-3xl">
                    {text}
                    <span className="ml-0.5 inline-block w-[2px] animate-pulse bg-teal-700">&nbsp;</span>
                </p>

                <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-600">
                    I build fast, error-free websites and apps with React, Laravel and MySQL. I love learning,
                    sharing what I know, and solving real problems for clients.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                    <a
                        href="#contact"
                        className="rounded-full bg-teal-700 px-7 py-3 font-semibold text-white transition-colors hover:bg-teal-800"
                    >
                        Hire me
                    </a>
                    <a
                        href="/cv/Hasan Talukder.pdf"
                        download="Hasan_Talukder_CV.pdf"
                        className="rounded-full border border-slate-300 px-7 py-3 font-semibold text-slate-800 transition-colors hover:border-teal-700 hover:text-teal-700"
                    >
                        Download CV
                    </a>
                </div>

                <div className="mt-10 flex items-center gap-3">
                    {socials.map((s) => (
                        <a
                            key={s.name}
                            href={s.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.name}
                            title={s.name}
                            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-teal-700 hover:bg-teal-700 hover:text-white"
                        >
                            <i className={s.icon}></i>
                        </a>
                    ))}
                </div>
            </div>

            {/* Photo */}
            <div className="relative mx-auto w-full max-w-md">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[2rem] border-2 border-teal-700"></div>
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-teal-100">
                    <img
                        src="https://i.ibb.co.com/ZpHgC6dd/mehasan-jpg.jpg"
                        alt="Hasan Talukder"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 h-full w-full object-cover object-top"
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;