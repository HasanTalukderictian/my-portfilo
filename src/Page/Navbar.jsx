const Navbar = () => {

    const navOptions = (
        <>
            <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
                <a href="#banner">Home</a>
            </li>
            <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
                <a href="#about">About Me</a>
            </li>
            <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
                <a href="#project">Project</a>
            </li>

            <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
                <a href="#review">Review</a>
            </li>
            <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
                <a href="#contact">Contact</a>
            </li>
        </>
    );

    return (
        <div className="navbar sticky top-0 z-50 h-[50px]" style={{ backgroundColor: "#dfe4eb" }}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
                        style={{ backgroundColor: "#5d6570" }}>
                        {navOptions}
                    </ul>
                </div>
                <a href="#banner" className="btn btn-ghost text-xl text-black hover:text-[#0d6efd]">
                    Hasan Talukder
                </a>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navOptions}
                </ul>
            </div>

            <div className="navbar-end">
                <a
                    href="#contact"
                    className="btn text-xl font-serif text-black hover:text-[#0d6efd]"
                    style={{ backgroundColor: "#5d6570" }}
                >
                    Hire Me
                </a>
            </div>
        </div>
    );
};

export default Navbar;
