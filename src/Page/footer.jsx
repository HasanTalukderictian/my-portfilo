const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { name: "Twitter", icon: "fa-brands fa-twitter", url: "#", color: "hover:bg-blue-400" },
        { name: "YouTube", icon: "fa-brands fa-youtube", url: "#", color: "hover:bg-red-500" },
        { name: "Facebook", icon: "fa-brands fa-facebook-f", url: "https://www.facebook.com/hasan.talukder.Ict", color: "hover:bg-blue-600" },
    ];

    const navLinks = [
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
        { name: "Projects", href: "#projects" },
        { name: "Reviews", href: "#review" },
    ];

    return (
        <footer className="w-full" style={{ backgroundColor: '#1f2937' }}>
            <div className="max-w-7xl mx-auto px-4 py-10">
                
                {/* Top Section with Border */}
                <div className="border-b border-gray-700 pb-8 mb-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        
                        {/* Logo/Brand */}
                        <div className="text-center md:text-left">
                            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Hasan Talukder
                            </h3>
                            <p className="text-gray-400 text-sm mt-1">Fullstack Developer</p>
                        </div>

                        {/* Navigation Links */}
                        <div className="flex flex-wrap justify-center gap-4">
                            {navLinks.map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.href}
                                    className="text-gray-300 hover:text-white px-3 py-2 rounded-lg transition-all duration-300 hover:bg-purple-500/20"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {socialLinks.map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center text-gray-300 transition-all duration-300 ${social.color} hover:text-white hover:-translate-y-1`}
                                >
                                    <i className={social.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
                    <p className="text-gray-400 text-sm">
                        © {currentYear} Hasan Talukder. All rights reserved.
                    </p>
                    
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-gray-400 text-sm hover:text-purple-400 transition-colors">
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>

            {/* Font Awesome */}
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        </footer>
    );
};

export default Footer;