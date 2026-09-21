// const Navbar = () => {

//     const navOptions = (
//         <>
//             <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
//                 <a href="#banner">Home</a>
//             </li>
//             <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
//                 <a href="#about">About Me</a>
//             </li>
//             <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
//                 <a href="#project">Project</a>
//             </li>

//             <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
//                 <a href="#review">Review</a>
//             </li>
//             <li className="text-black text-xl hover:text-[#0d6efd] font-bold">
//                 <a href="#contact">Contact</a>
//             </li>
//         </>
//     );

//     return (
//         <div className="navbar sticky top-0 z-50 h-[50px]" style={{ backgroundColor: "#dfe4eb" }}>
//             <div className="navbar-start">
//                 <div className="dropdown">
//                     <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-5 w-5 text-black"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor">
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 d="M4 6h16M4 12h8m-8 6h16" />
//                         </svg>
//                     </div>
//                     <ul
//                         tabIndex={0}
//                         className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
//                         style={{ backgroundColor: "#5d6570" }}>
//                         {navOptions}
//                     </ul>
//                 </div>
//                 <a href="#banner" className="btn btn-ghost text-xl text-black hover:text-[#0d6efd]">
//                     Hasan Talukder
//                 </a>
//             </div>

//             <div className="navbar-center hidden lg:flex">
//                 <ul className="menu menu-horizontal px-1">
//                     {navOptions}
//                 </ul>
//             </div>

//             <div className="navbar-end">
//                 <a
//                     href="#contact"
//                     className="btn text-xl font-serif text-black hover:text-[#0d6efd]"
//                     style={{ backgroundColor: "#5d6570" }}
//                 >
//                     Hire Me
//                 </a>
//             </div>
//         </div>
//     );
// };

// export default Navbar;


import { useState } from 'react';
import { navLinks } from './data';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/85 backdrop-blur">
            <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
                <a href="#banner" className="font-display text-xl font-bold text-slate-900">
                    Hasan Talukder
                </a>

                {/* Desktop links */}
                <ul className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="font-medium text-slate-600 transition-colors hover:text-teal-700">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        className="hidden rounded-full bg-teal-700 px-5 py-2 font-semibold text-white transition-colors hover:bg-teal-800 sm:inline-block"
                    >
                        Hire me
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                        aria-expanded={open}
                        className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
                    >
                        <i className={`fas ${open ? 'fa-xmark' : 'fa-bars'} text-lg`}></i>
                    </button>
                </div>
            </nav>

            {/* Mobile menu */}
            {open && (
                <ul className="border-t border-slate-200 bg-white px-5 py-3 lg:hidden">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="block py-3 font-medium text-slate-700 hover:text-teal-700"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                    <li className="pt-2 pb-2">
                        <a
                            href="#contact"
                            onClick={() => setOpen(false)}
                            className="block rounded-full bg-teal-700 py-3 text-center font-semibold text-white"
                        >
                            Hire me
                        </a>
                    </li>
                </ul>
            )}
        </header>
    );
};

export default Navbar;
