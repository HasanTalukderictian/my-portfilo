import { useState } from 'react';

const Project = ({ id }) => {
    const projects = [
        { id: 1, title: "Gift Place", description: "I created this personal project to show how to create an interface using Figma as an example.", link: "https://giftpalacebd.com/", img: "/src/image/pic.png" },
        { id: 2, title: "Rigers Group", description: "What was your role, your deliverables, if the project was personal, freelancing.", link: "https://ridersgroupbd.com/", img: "/src/image/pic1.png" },
        { id: 3, title: "Trust Sports", description: "Description for project 3.", link: "https://trustsportsbd.com/", img: "/src/image/trust.png" },
        { id: 4, title: "School Management", description: "Description for project 4.", link: "https://school.wetechdigital.com/", img: "/src/image/school.png" },
        { id: 5, title: "Fashionia", description: "Description for project 5.", link: "http://fashionia.recycleshop.xyz/", img: "/src/image/pic4.png" },
        { id: 6, title: "Project 6", description: "Description for project 6.", link: "#", img: "/src/image/pic5.png" }
    ];

    const projectsPerPage = 3;
    const totalPages = Math.ceil(projects.length / projectsPerPage);
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    const handlePageClick = (pageNumber) => setCurrentPage(pageNumber);
    const handleNextClick = () => { if (currentPage < totalPages) setCurrentPage(currentPage + 1); };

    return (
        <div id={id} className="flex flex-col bg-gray-100 items-center gap-5 w-full px-4 py-10">
            <div className="mb-10">
                <h2 className="text-3xl font-bold mt-5 text-black">Projects</h2>
            </div>

            {/* Grid display for projects */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-7xl">
                {currentProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-[#f9f9f9] border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
                    >
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full md:w-11/12 mx-auto h-56 md:h-64 object-cover mt-4 rounded-lg"
                        />

                        <div className="p-4 flex flex-col flex-1 justify-between relative group">
                            <div>
                                <h2 className="text-xl font-bold mb-2 text-black">{project.title}</h2>
                                <p className="text-gray-700 mb-4">{project.description}</p>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-blue-500 text-white rounded transition-all duration-500 hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500 hover:text-white self-start"
                            >
                                View Project
                            </a>
                        </div>



                    </div>
                ))}
            </div>


            {/* Pagination buttons */}
            <div className="flex space-x-2 mt-6 mb-6">
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-yellow-500' : 'bg-blue-500'} text-white rounded hover:bg-yellow-500 transition-colors duration-300`}
                        onClick={() => handlePageClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                {currentPage < totalPages && (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-yellow-500 transition-colors duration-300"
                        onClick={handleNextClick}
                    >
                        Next &gt;
                    </button>
                )}
            </div>
        </div>
    );
};

export default Project;
