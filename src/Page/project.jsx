// import { useState } from 'react';

// const Project = ({ id }) => {
//     const projects = [
//         { id: 1, title: "Gift Place", description: "Modern e-commerce platform for gift items with seamless user experience.", link: "https://giftpalacebd.com/", img: "https://i.ibb.co.com/DPjqjg1y/Gemini-Generated-Image-ahdpj2ahdpj2ahdp.png" },
//         { id: 2, title: "Rigers Group", description: "Corporate website for business group showcasing their services.", link: "https://ridersgroupbd.com/", img: "https://i.ibb.co.com/cSxQRKdC/Rigers.png" },
//         { id: 3, title: "BD Stall", description: "Online marketplace for local products and services.", link: "https://bdstall.akashbariholidays.org/", img: "https://i.ibb.co.com/0V68cjnx/Ecommerce-Banner.png" },
//         { id: 4, title: "School Management", description: "Complete school management system with student portal.", link: "https://school.wetechdigital.com/", img: "https://i.ibb.co.com/NkNThhV/School-Picture.png" },
//         { id: 5, title: "Employee Management System", description: "HR management system for employee tracking and payroll.", link: "https://ems-crm.netlify.app/", img: "https://i.ibb.co.com/bMNK9gdR/Gemini-Generated-Image-6n4law6n4law6n4l.png" },
//         { id: 6, title: "Visa Management CRM", description: "CRM software for visa processing and client management.", link: "https://crm.akashbariholidays.org/", img: "https://i.ibb.co.com/PZYS3t6v/Gemini-Generated-Image-y1smp7y1smp7y1sm.png" }
//     ];

//     const projectsPerPage = 3;
//     const totalPages = Math.ceil(projects.length / projectsPerPage);
//     const [currentPage, setCurrentPage] = useState(1);

//     const indexOfLastProject = currentPage * projectsPerPage;
//     const indexOfFirstProject = indexOfLastProject - projectsPerPage;
//     const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

//     const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);
//     const handlePrevClick = () => { if (currentPage > 1) setCurrentPage(currentPage - 1); };
//     const handleNextClick = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };

//     return (
//         <div id={id} className="w-full py-16 px-4" style={{ backgroundColor: '#f5f5f1' }}>
//             <div className="max-w-7xl mx-auto">
//                 {/* Section Header */}
//                 <div className="text-center mb-12">
//                     <span className="text-amber-500 text-sm font-semibold tracking-wider uppercase bg-amber-50 px-4 py-1 rounded-full inline-block">
//                         Our Portfolio
//                     </span>
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-3">
//                         Featured <span className="text-amber-500">Projects</span>
//                     </h2>
//                     <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mt-4 rounded-full"></div>
//                     <p className="text-gray-500 mt-3 max-w-md mx-auto">
//                         Some of our best work — creative, modern, and impactful
//                     </p>
//                 </div>

//                 {/* Projects Grid */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {currentProjects.map((project, index) => (
//                         <div
//                             key={project.id}
//                             className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
//                         >
//                             {/* Image Container with Overlay */}
//                             <div className="relative overflow-hidden h-56">
//                                 <img
//                                     src={project.img}
//                                     alt={project.title}
//                                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                                 />
//                                 {/* Gradient Overlay */}
//                                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
//                                 {/* View Icon on Hover */}
//                                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
//                                     <a
//                                         href={project.link}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className="bg-white/20 backdrop-blur-md text-white p-3 rounded-full hover:bg-amber-500 transition-all duration-300 transform hover:scale-110"
//                                     >
//                                         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                                         </svg>
//                                     </a>
//                                 </div>
//                             </div>

//                             {/* Card Content */}
//                             <div className="p-6">
//                                 {/* Project Number Badge */}
//                                 <div className="inline-block px-3 py-1 rounded-full bg-amber-100 text-amber-600 text-xs font-semibold mb-3">
//                                     Project {String(project.id).padStart(2, '0')}
//                                 </div>
                                
//                                 <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-500 transition-colors duration-300">
//                                     {project.title}
//                                 </h3>
                                
//                                 <p className="text-gray-600 text-sm leading-relaxed mb-4">
//                                     {project.description}
//                                 </p>

//                                 {/* View Project Button */}
//                                 <a
//                                     href={project.link}
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-xl hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg group/btn"
//                                 >
//                                     <span>View Project</span>
//                                     <svg className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
//                                     </svg>
//                                 </a>
//                             </div>
//                         </div>
//                     ))}
//                 </div>

//                 {/* Pagination */}
//                 {totalPages > 1 && (
//                     <div className="flex justify-center items-center gap-3 mt-12">
//                         {/* Previous Button */}
//                         <button
//                             onClick={handlePrevClick}
//                             disabled={currentPage === 1}
//                             className={`
//                                 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
//                                 ${currentPage === 1 
//                                     ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
//                                     : 'bg-white text-gray-700 hover:bg-amber-500 hover:text-white shadow-md'}
//                             `}
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
//                             </svg>
//                         </button>

//                         {/* Page Numbers */}
//                         <div className="flex gap-2">
//                             {[...Array(totalPages)].map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => handlePageClick(index + 1)}
//                                     className={`
//                                         w-10 h-10 rounded-full font-semibold transition-all duration-300
//                                         ${currentPage === index + 1 
//                                             ? 'bg-amber-500 text-white shadow-lg scale-110' 
//                                             : 'bg-white text-gray-600 hover:bg-amber-100'}
//                                     `}
//                                 >
//                                     {index + 1}
//                                 </button>
//                             ))}
//                         </div>

//                         {/* Next Button */}
//                         <button
//                             onClick={handleNextClick}
//                             disabled={currentPage === totalPages}
//                             className={`
//                                 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
//                                 ${currentPage === totalPages 
//                                     ? 'bg-gray-200 text-gray-400 cursor-not-allowed' 
//                                     : 'bg-white text-gray-700 hover:bg-amber-500 hover:text-white shadow-md'}
//                             `}
//                         >
//                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                             </svg>
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Project;

import SectionTitle from './SectionTitle';

const projects = [
    { id: 1, title: 'Gift Place', description: 'E-commerce platform for gift items with a smooth shopping experience.', link: 'https://giftpalacebd.com/', img: 'https://i.ibb.co.com/DPjqjg1y/Gemini-Generated-Image-ahdpj2ahdpj2ahdp.png' },
    { id: 2, title: 'Riders Group', description: 'Corporate website showcasing the group’s business and services.', link: 'https://ridersgroupbd.com/', img: 'https://i.ibb.co.com/cSxQRKdC/Rigers.png' },
    { id: 3, title: 'BD Stall', description: 'Online marketplace for local products and services.', link: 'https://bdstall.akashbariholidays.org/', img: 'https://i.ibb.co.com/0V68cjnx/Ecommerce-Banner.png' },
    { id: 4, title: 'School Management', description: 'Complete school management system with a student portal.', link: 'https://school.wetechdigital.com/', img: 'https://i.ibb.co.com/NkNThhV/School-Picture.png' },
    { id: 5, title: 'Employee Management System', description: 'HR system for employee tracking and payroll.', link: 'https://ems-crm.netlify.app/', img: 'https://i.ibb.co.com/bMNK9gdR/Gemini-Generated-Image-6n4law6n4law6n4l.png' },
    { id: 6, title: 'Visa Management CRM', description: 'CRM for visa processing and client management.', link: 'https://crm.akashbariholidays.org/', img: 'https://i.ibb.co.com/PZYS3t6v/Gemini-Generated-Image-y1smp7y1smp7y1sm.png' },
];

const Project = ({ id = 'project' }) => {
    return (
        <section id={id} className="bg-white px-5 py-20">
            <div className="mx-auto max-w-6xl">
                <SectionTitle title="Selected projects" subtitle="Some of the work I'm proud of." />

                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <a
                            key={p.id}
                            href={p.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white transition-colors hover:border-teal-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-teal-700"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                                <img
                                    src={p.img}
                                    alt={p.title}
                                    referrerPolicy="no-referrer"
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-display text-xl font-bold text-slate-900">{p.title}</h3>
                                <p className="mt-2 text-slate-600">{p.description}</p>
                                <span className="mt-4 inline-flex items-center gap-2 font-semibold text-teal-700">
                                    Visit site
                                    <i className="fas fa-arrow-up-right-from-square text-xs transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"></i>
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;