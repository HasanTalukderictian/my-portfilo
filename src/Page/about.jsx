import  { useState } from 'react';
import CountUp from 'react-countup';

const About = ({ id }) => { // Accept id prop
    const [selectedCol, setSelectedCol] = useState(null); // Track selected column

    // Data for skills
    const skills = [
        { name: 'UI & UX Designing', icon: 'fas fa-paint-brush' },
        { name: 'Web Development', icon: 'fas fa-code' },
        { name: 'Mobile Development', icon: 'fas fa-mobile-alt' },
        { name: 'Web Scraping with Python', icon: 'fas fa-laptop-code' },
    ];

    return (
        <div id={id} className="bg-gray-900 text-white py-12 px-4"> {/* Apply id here */}
            <div className="max-w-6xl mx-auto">
                {/* About Me Section */}
                <div className="mb-12 mt-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center mb-2">About me :</h2>
                    <p className="text-lg mb-6 mb-2">
                        Hi, my name is Hasan Talukder, I am a Fullstack web developer, Software designer, and Mobile developer.
                        I have honed my skills in Web Development and have a core understanding of advanced UI design principles.
                        Here are the major skills I have:
                    </p>
                </div>

                {/* Experience Section */}
                <div className="flex flex-col md:flex-row items-center mb-12 text-center md:text-left">
                    <h3 className="text-5xl font-bold text-purple-300 mb-4 md:mb-0 md:mr-4">
                        <CountUp start={0} end={2} duration={2} suffix="+" />
                    </h3>
                    <p className="text-lg md:mr-4">
                        Years of experience. Specialized in building apps, while ensuring a seamless web experience for end users.
                    </p>
                    {/* Experience Details Section */}
                    <div className="flex flex-col md:flex-row md:space-x-6 mt-6 md:mt-0">
                        <div className="flex flex-col md:mr-6">
                            <p className="text-lg">
                                I have been working for <span className="text-yellow-500">
                                <a href="https://wetechdigital.com/" target="_blank" rel="noopener noreferrer">Wetech Digital </a></span> 
                                as a Software Engineer from 01/08/2023 to 01/06/2024
                            </p>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg">
                                I have been working for <span className="text-yellow-500">
                                <a href="https://f3solution.com/" target="_blank" rel="noopener noreferrer">F3 Solution Limited </a></span> 
                                as a Software Engineer from 01/08/2023 to 01/06/2024
                            </p>
                        </div>
                    </div>
                </div>

                {/* Animated Numbers Section */}
                <div className="flex flex-wrap gap-10 justify-center md:justify-start mb-12">
                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">Number of Projects</h3>
                        <p className="text-2xl font-bold">
                            <CountUp start={0} end={12} duration={3} suffix="+" />
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">Number of Clients</h3>
                        <p className="text-2xl font-bold">
                            <CountUp start={0} end={120} duration={3} suffix="+" />
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">Number of Awards</h3>
                        <p className="text-2xl font-bold">
                            <CountUp start={0} end={5} duration={3} suffix="+" />
                        </p>
                    </div>

                    <div className="text-center">
                        <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">Countries Reached</h3>
                        <p className="text-2xl font-bold">
                            <CountUp start={0} end={15} duration={3} suffix="+" />
                        </p>
                    </div>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-md text-center cursor-pointer ${
                                selectedCol === index ? 'bg-purple-500' : 'bg-gray-700'
                            } hover:bg-purple-500 transition-all`}
                            onClick={() => setSelectedCol(index)} // Set selected column
                        >
                            <i className={`${skill.icon} text-4xl mb-4`}></i>
                            <h4 className="text-xl font-semibold">{skill.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
