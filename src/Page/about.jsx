import { useState } from 'react';
import CountUp from 'react-countup';

const About = ({ id }) => {
    const [selectedCol, setSelectedCol] = useState(null);

    const skills = [
        { name: 'UI & UX Designing', icon: 'fas fa-paint-brush', description: 'User-centered design solutions' },
        { name: 'Web Development', icon: 'fas fa-code', description: 'Modern web applications' },
        { name: 'Mobile Development', icon: 'fas fa-mobile-alt', description: 'Cross-platform apps' },
        { name: 'Web Scraping with Python', icon: 'fas fa-laptop-code', description: 'Data extraction & automation' },
    ];

    const experiences = [
        { company: "Akashbari Holidays", role: "Software Engineer", period: "2026 to Present", link: "#" },
        { company: "Paperfly Private", role: "Software Engineer", period: "2024 to 2025", link: "#" },
        { company: "F3 Solution Limited", role: "Software Engineer", period: "2023 to 2024", link: "#" },
        { company: "Wetech Digital", role: "Software Engineer", period: "2023 to 2024", link: "#" },
    ];

    const stats = [
        { icon: "fas fa-briefcase", label: "Projects", value: 12, suffix: "+", color: "from-blue-500 to-cyan-500" },
        { icon: "fas fa-users", label: "Clients", value: 120, suffix: "+", color: "from-green-500 to-emerald-500" },
        { icon: "fas fa-trophy", label: "Awards", value: 5, suffix: "", color: "from-yellow-500 to-orange-500" },
        { icon: "fas fa-globe-americas", label: "Countries", value: 15, suffix: "+", color: "from-purple-500 to-pink-500" },
    ];

    return (
        <div id={id} className="w-full py-16 px-4" style={{ backgroundColor: '#F4F1E6' }}>
            <div className="max-w-7xl mx-auto">
                
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="inline-block px-4 py-1 bg-purple-100 rounded-full mb-3">
                        <span className="text-purple-600 text-sm font-semibold">Get to Know Me</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                        About <span className="text-purple-600">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                </div>

                {/* Bio Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-10">
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed text-center">
                        Hi, my name is <span className="font-bold text-purple-600">Hasan Talukder</span>, I am a 
                        <span className="font-semibold text-gray-800"> Fullstack web developer</span>, 
                        <span className="font-semibold text-gray-800"> Software designer</span>, and 
                        <span className="font-semibold text-gray-800"> Mobile developer</span>.
                        I have honed my skills in Web Development and have a core understanding of advanced UI design principles.
                    </p>
                </div>

                {/* Experience Banner */}
                <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl shadow-lg p-6 mb-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex items-center gap-5">
                            <div className="text-5xl md:text-6xl font-bold text-white">
                                <CountUp start={0} end={3} duration={2} suffix="+" />
                            </div>
                            <div className="text-white">
                                <p className="font-bold text-lg">Years of Experience</p>
                                <p className="text-purple-100 text-sm">Specialized in building apps & web solutions</p>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            {[...Array(3)].map((_, i) => (
                                <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-white' : 'bg-white/40'}`}></div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="bg-white rounded-xl shadow-md p-4 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group">
                            <div className={`w-12 h-12 mx-auto rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                                <i className={`${stat.icon} text-white text-xl`}></i>
                            </div>
                            <div className="text-2xl md:text-3xl font-bold text-gray-800">
                                <CountUp start={0} end={stat.value} duration={2.5} suffix={stat.suffix} />
                            </div>
                            <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </div>

                {/* Experience Section */}
                <div className="mb-12">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-600 text-sm">💼</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Work Experience</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        {experiences.map((exp, idx) => (
                            <a
                                key={idx}
                                href={exp.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-xl shadow-md p-5 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-l-purple-500"
                            >
                                <h4 className="font-bold text-gray-800 text-base mb-1 group-hover:text-purple-600 transition-colors">
                                    {exp.company}
                                </h4>
                                <p className="text-gray-600 text-sm font-medium mb-2">{exp.role}</p>
                                <span className="inline-block text-xs font-semibold px-2 py-1 bg-purple-50 text-purple-600 rounded-full">
                                    {exp.period}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Skills Section */}
                <div>
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <span className="text-purple-600 text-sm">⚡</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">Core Skills</h3>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className={`
                                    group rounded-xl p-5 text-center cursor-pointer transition-all duration-300
                                    ${selectedCol === index 
                                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 shadow-xl' 
                                        : 'bg-white shadow-md hover:shadow-xl'}
                                `}
                                onClick={() => setSelectedCol(index)}
                            >
                                <div className={`
                                    w-14 h-14 mx-auto rounded-full flex items-center justify-center mb-3 transition-all duration-300
                                    ${selectedCol === index 
                                        ? 'bg-white/20 text-white' 
                                        : 'bg-purple-50 text-purple-600 group-hover:bg-purple-100'}
                                `}>
                                    <i className={`${skill.icon} text-2xl`}></i>
                                </div>
                                <h4 className={`font-bold text-base mb-1 ${selectedCol === index ? 'text-white' : 'text-gray-800'}`}>
                                    {skill.name}
                                </h4>
                                <p className={`text-xs ${selectedCol === index ? 'text-purple-100' : 'text-gray-500'}`}>
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Font Awesome CDN - Add to index.html or head */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
            </div>
        </div>
    );
};

export default About;