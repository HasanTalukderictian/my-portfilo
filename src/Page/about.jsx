import { useState } from 'react';
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
        <div id={id} className="bg-[#F4F1E6] text-white py-12 px-4"> {/* Apply id here */}
            <div className="max-w-6xl mx-auto">
                {/* About Me Section */}
                <div className="mb-12 mt-4 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center mb-2">About me :</h2>
                    <p className="text-lg mb-6 mb-2 text-black">
                        Hi, my name is Hasan Talukder, I am a Fullstack web developer, Software designer, and Mobile developer.
                        I have honed my skills in Web Development and have a core understanding of advanced UI design principles.
                        Here are the major skills I have:
                    </p>
                </div>

                {/* Experience Section */}
                <div className="p-6">


                    {/* Cards Wrapper */}
                    <div className="grid md:grid-cols-1 gap-6">
                        {/* Card */}
                        <div className="bg-[#dfe4eb] rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300">
                            <div className="flex flex-col md:flex-row items-center text-center md:text-left">

                                {/* Years of Experience */}
                                <h3 className="text-5xl font-bold text-black mb-4 md:mb-0 md:mr-6">
                                    <CountUp start={0} end={3} duration={2} suffix="+" />
                                </h3>

                                {/* Experience Description */}
                                <p className="text-lg md:mr-6 text-black">
                                    Years of experience. Specialized in building apps, while ensuring a seamless web experience for end users.
                                </p>
                            </div>

                            {/* Experience Section */}


                            <div className="p-6">
                                {/* Section Heading */}
                                <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 flex items-center space-x-2">
                                    <span className="text-[#139bfd] text-2xl">🛠️</span>
                                    <span>My Experience</span>
                                </h2>

                                {/* Cards Wrapper */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                                    {/* Card for Paperfly */}
                                    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-left">
                                        <p className="text-xl font-bold text-black mb-2">
                                            <a href="https://paperfly.com.bd"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-black no-underline">
                                                Paperfly Private
                                            </a>
                                        </p>
                                        <p className="text-lg text-black mb-1 font-bold">Software Engineer</p>
                                        <p className="text-[#139bfd] font-bold">2024 to Present</p>
                                    </div>

                                    {/* Card for Wetech Digital */}
                                    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-left">
                                        <p className="text-xl font-bold text-black mb-2">
                                            <a href="https://wetechdigital.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-black no-underline">
                                                Wetech Digital
                                            </a>
                                        </p>
                                        <p className="text-lg text-black mb-1 font-bold">Software Engineer</p>
                                        <p className="text-[#139bfd] font-bold">01/08/2023 to 01/06/2024</p>
                                    </div>

                                    {/* Card for F3 Solution */}
                                    <div className="bg-white border-2 border-gray-200 rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 text-left">
                                        <p className="text-xl font-bold text-black mb-2">
                                            <a href="https://f3solution.com/"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-black no-underline">
                                                F3 Solution Limited
                                            </a>
                                        </p>
                                        <p className="text-lg text-black mb-1 font-bold">Software Engineer</p>
                                        <p className="text-[#139bfd] font-bold">01/08/2023 to 01/06/2024</p>
                                    </div>

                                </div>
                            </div>


                        </div>



                    </div>


                    {/* Animated Numbers Section */}
                    <div className="flex flex-wrap gap-10 justify-center md:justify-start mb-12 mt-8">

                        {/* Number of Projects */}
                        <div className="text-center">
                            <i className="fas fa-briefcase text-black text-4xl mb-2"></i>
                            <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">Number of Projects</h3>
                            <p className="text-2xl text-black font-bold">
                                <CountUp start={0} end={12} duration={3} suffix="+" />
                            </p>
                        </div>

                        {/* Number of Clients */}
                        <div className="text-center">
                            <i className="fas fa-users text-black text-4xl mb-2"></i>
                            <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">Number of Clients</h3>
                            <p className="text-2xl text-black font-bold">
                                <CountUp start={0} end={120} duration={3} suffix="+" />
                            </p>
                        </div>

                        {/* Number of Awards */}
                        <div className="text-center">
                            <i className="fas fa-trophy text-black text-4xl mb-2"></i>
                            <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">Number of Awards</h3>
                            <p className="text-2xl text-black font-bold">
                                <CountUp start={0} end={5} duration={3} suffix="+" />
                            </p>
                        </div>

                        {/* Countries Reached */}
                        <div className="text-center">
                            <i className="fas fa-globe-americas text-black text-4xl mb-2"></i>
                            <h3 className="text-xl md:text-2xl font-bold text-purple-300 mb-2">Countries Reached</h3>
                            <p className="text-2xl text-black font-bold">
                                <CountUp start={0} end={15} duration={3} suffix="+" />
                            </p>
                        </div>

                    </div>


                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-md text-center cursor-pointer ${selectedCol === index ? 'bg-purple-500' : 'bg-gray-700'
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
        </div>
    );
};

export default About;
