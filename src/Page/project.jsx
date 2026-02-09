import { useState } from 'react';

const Project = ({ id }) => {
    // Array of project data
    const projects = [
        {
            id: 1,
            title: "Gift Place",
            description: "I created this personal project to show how to create an interface using Figma as an example.",
            link: "https://giftpalacebd.com/",
            img: "/src/image/pic.png"
        },
        {
            id: 2,
            title: "Rigers Group",
            description: "What was your role, your deliverables, if the project was personal, freelancing.",
            link: "https://ridersgroupbd.com/",
            img: "/src/image/pic1.png"
        },
        {
            id: 3,
            title: "Trust Sports",
            description: "Description for project 3.",
            link: "trustsportsbd.com",
            img: "/src/image/trust.png"
        },
        {
            id: 4,
            title: "School Management",
            description: "Description for project 4.",
            link: "https://school.wetechdigital.com/",
            img: "/src/image/school.png"
        },
        {
            id: 5,
            title: "Fashionia",
            description: "Description for project 5.",
            link: "http://fashionia.recycleshop.xyz/",
            img: "/src/image/pic4.png"
        },
        {
            id: 6,
            title: "Project 6",
            description: "Description for project 6.",
            link: "#",
            img: "/src/image/pic5.png"
        }
    ];

    // Number of projects per page
    const projectsPerPage = 2;

    // Calculate total number of pages
    const totalPages = Math.ceil(projects.length / projectsPerPage);

    // State to manage the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate the index range of the projects to display on the current page
    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;

    // Get the projects for the current page
    const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

    // Function to handle pagination click
    const handlePageClick = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Function to handle next button click
    const handleNextClick = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div id={id} className="flex flex-col bg-gray-800 items-center gap-5 w-full px-4"> {/* Apply id here */}
            <div className="mb-10 mt-10">
                <h2 className="text-3xl font-bold mt-5 text-white">Projects</h2>
            </div>

            {/* Display only the projects for the current page */}
            {currentProjects.map((project, index) => (
                <div 
                    key={project.id} 
                    // Conditional flex direction: row for even index (left image), row-reverse for odd index (right image)
                    className={`flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} bg-gray-800 rounded-lg shadow-lg w-full p-6 max-w-7xl mb-6`}
                >
                    <img
                        src={project.img}
                        alt="Project visual"
                        className="w-1/2 h-64 rounded-lg object-cover mr-6"
                    />
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4 text-white">{project.title}</h2>
                        <p className="mb-4 text-gray-300">{project.description}</p>
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-yellow-500"
                        >
                            View Project
                        </a>
                    </div>
                </div>
            ))}

            {/* Pagination buttons */}
            <div className="flex space-x-2 mt-6 mb-6">
                {/* Page number buttons */}
                {[...Array(totalPages)].map((_, index) => (
                    <button
                        key={index + 1}
                        className={`px-4 py-2 ${currentPage === index + 1 ? 'bg-yellow-500' : 'bg-blue-500'} text-white rounded hover:bg-yellow-500`}
                        onClick={() => handlePageClick(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}
                
                {/* Next button */}
                {currentPage < totalPages && (
                    <button
                        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-yellow-500"
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
