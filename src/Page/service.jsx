



const Service = () => {
    // List of services
    const services = [
        {
            title: 'UI & UX DESIGNING',
            icon: 'fas fa-paint-brush',
            description: 'I design beautiful web interfaces with Figma and Adobe XD.',
        },
        {
            title: 'WEB DEVELOPMENT',
            icon: 'fas fa-code',
            description: 'I create beautiful interfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS.',
        },
        {
            title: 'MOBILE DEVELOPMENT',
            icon: 'fas fa-mobile-alt',
            description: 'I am an expert mobile developer. I have experience using Flutter and React Native.',
        },
        {
            title: 'VERSION CONTROL',
            icon: 'fas fa-code-branch',
            description: 'I can use version control systems well, and Git & Mercurial are my go-to tools.',
        },
        {
            title: 'NPM AND NODEJS',
            icon: 'fas fa-server',
            description: 'I have a core understanding of NPM. I can also develop general-purpose applications with NodeJS.',
        },
        {
            title: 'WEB SCRAPING',
            icon: 'fas fa-laptop-code',
            description: 'I can collect content and data from the internet then manipulate and analyze as needed.',
        },
    ];

    return (
        <div className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-purple-300 mb-8">The services I offer :</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-gray-800 hover:bg-purple-500 p-6 rounded-lg text-center transition-all duration-300 border border-purple-500"
                        >
                            <i className={`${service.icon} text-4xl mb-4 text-purple-300`}></i>
                            <h4 className="text-xl font-semibold text-purple-300 mb-2">{service.title}</h4>
                            <p className="text-gray-400">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;
