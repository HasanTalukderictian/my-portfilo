import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CountUp from 'react-countup';

// Define your skills
const skills = [
  { name: 'React', percentage: 70, icon: 'fab fa-react' },
  { name: 'Laravel', percentage: 70, icon: 'fab fa-laravel' },
  { name: 'PHP', percentage: 80, icon: 'fab fa-php' },
  { name: 'HTML/CSS', percentage: 90, icon: 'fab fa-html5' },
  { name: 'Tailwind CSS', percentage: 90, icon: 'fab fa-css3-alt' },
  { name: 'Javascript', percentage: 90, icon: 'fab fa-js' },
  { name: 'MySQL', percentage: 70, icon: 'fas fa-database' },
  { name: 'Restful API', percentage: 60, icon: 'fas fa-cogs' },
];

const SkillItem = ({ name, percentage, icon }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage);
    }, 300);

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 mb-4 mt-4">
      {/* Icon + Skill Name */}
      <div className="flex items-center space-x-3 mb-2 md:mb-0">
        <i className={`${icon} text-3xl text-black`}></i>
        <span className="font-semibold text-black text-lg">{name}</span>
      </div>

      {/* Progress Bar */}
      <div className="flex-1 md:mx-4 w-full">
        <div className="relative h-3 bg-gray-300 rounded overflow-hidden">
          <div
            className="h-full rounded transition-all duration-1000"
            style={{
              width: `${width}%`,
              background: 'linear-gradient(90deg, #4f46e5, #3b82f6, #06b6d4)',
            }}
          ></div>
        </div>
      </div>

      {/* Percentage */}
      <span className="font-semibold text-black text-lg">
        <CountUp start={0} end={percentage} duration={2} suffix="%" />
      </span>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="bg-gray-100 shadow-md p-8 mx-auto ">
      <h2 className="text-3xl md:text-4xl font-bold text-black mb-8 text-center relative">
        MY <span className="text-blue-600">SKILLS</span>
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-1/5 h-1 bg-blue-600 rounded"></div>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            name={skill.name}
            percentage={skill.percentage}
            icon={skill.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
