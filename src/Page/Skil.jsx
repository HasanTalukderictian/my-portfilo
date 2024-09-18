import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import CountUp from 'react-countup';

// Define your skills
const skills = [
  { name: 'React', percentage: 70, color: 'text-red-500', progressColor: 'bg-blue-600', icon: 'fab fa-react' },
  { name: 'Laravel', percentage: 70, color: 'text-red-500', progressColor: 'bg-blue-600', icon: 'fab fa-laravel' },
  { name: 'PHP', percentage: 80, color: 'text-blue-500', progressColor: 'bg-blue-600', icon: 'fab fa-php' },
  { name: 'HTML/CSS', percentage: 90, color: 'text-red-500', progressColor: 'bg-blue-600', icon: 'fab fa-html5' },
  { name: 'Tailwind CSS', percentage: 90, color: 'text-teal-500', progressColor: 'bg-blue-600', icon: 'fab fa-css3-alt' },
  { name: 'Javascript', percentage: 90, color: 'text-yellow-500', progressColor: 'bg-blue-600', icon: 'fab fa-js' },
  { name: 'My SQL', percentage: 70, color: 'text-yellow-500', progressColor: 'bg-blue-600', icon: 'fas fa-database' },
  { name: 'Restful API', percentage: 60, color: 'text-yellow-500', progressColor: 'bg-blue-600', icon: 'fas fa-cogs' },
];

const SkillItem = ({ name, percentage, color, progressColor, icon }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage); // Trigger the animation for the progress bar
    }, 300); // Delay to start animation

    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <div className="flex items-center justify-between space-y-4">
      <div className="flex items-center space-x-2">
        <i className={`${icon} text-2xl ${color}`}></i>
        <span className={`font-semibold ${color}`}>{name}</span>
      </div>
      <div className="w-2/3">
        <div className="relative h-2 bg-gray-300 rounded overflow-hidden">
          <div
            className={`${progressColor} h-full rounded transition-all duration-1000`}
            style={{ width: `${width}%` }} // Animate width of progress bar
          ></div>
        </div>
      </div>
      <span className="font-semibold text-white">
        <CountUp start={0} end={percentage} duration={2} suffix="%" /> {/* Animate percentage */}
      </span>
    </div>
  );
};

const Skill = () => {
  return (
    <div className="bg-gray-900 shadow-md p-8 mx-auto relative">
      <h2 className="text-3xl font-bold text-center mb-8 mt-8 relative text-white">
        MY <span className="text-blue-600">SKILLS</span>
        {/* Divider */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-[-10px] w-[20%] h-1 bg-white"></div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-2xl">
        {skills.map((skill, index) => (
          <SkillItem 
            key={index} 
            name={skill.name} 
            percentage={skill.percentage} 
            color={skill.color} 
            progressColor={skill.progressColor} 
            icon={skill.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default Skill;
