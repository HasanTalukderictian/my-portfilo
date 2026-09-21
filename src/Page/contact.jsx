// import { useState } from 'react';

// const Contact = ({ id }) => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });
//     const [isSubmitted, setIsSubmitted] = useState(false);

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Handle form submission here
//         console.log('Form submitted:', formData);
//         setIsSubmitted(true);
//         setTimeout(() => setIsSubmitted(false), 3000);
//         setFormData({ name: '', email: '', message: '' });
//     };

//     return (
//         <div id={id} className="w-full py-16 px-4" style={{ backgroundColor: '#F4F1E6' }}>
//             <div className="max-w-7xl mx-auto">
                
//                 {/* Header */}
//                 <div className="text-center mb-10">
//                     <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
//                         Get In <span className="text-purple-600">Touch</span>
//                     </h2>
//                     <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
//                     <p className="text-gray-500 mt-3">Have a project? Let's work together!</p>
//                 </div>

//                 <div className="flex flex-col md:flex-row gap-8">
                    
//                     {/* Left Section - Contact Info */}
//                     <div className="md:w-1/2 space-y-6">
//                         <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
//                             <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
//                                 <span className="text-2xl">📞</span> Connect with me
//                             </h3>
//                             <p className="text-gray-600 mb-5">
//                                 Satisfied with my work? Let's discuss your next project!
//                             </p>
                            
//                             <div className="space-y-3">
//                                 <div className="flex items-center gap-3 text-gray-700">
//                                     <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
//                                         <i className="fas fa-phone text-purple-600"></i>
//                                     </div>
//                                     <span className="font-medium">+880 1768712230</span>
//                                 </div>
                                
//                                 <div className="flex items-center gap-3 text-gray-700">
//                                     <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
//                                         <i className="fas fa-envelope text-purple-600"></i>
//                                     </div>
//                                     <a 
//                                         href="mailto:hasantalukdercou@gmail.com" 
//                                         className="font-medium hover:text-purple-600 transition-colors"
//                                     >
//                                         hasantalukdercou@gmail.com
//                                     </a>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Social Links */}
//                         <div className="bg-white rounded-xl shadow-md p-6">
//                             <h4 className="font-semibold text-gray-800 mb-3">Follow me on</h4>
//                             <div className="flex gap-4">
//                                 <a 
//                                     href="https://www.facebook.com/hasan.talukder.Ict/" 
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center hover:bg-blue-600 transition-all hover:-translate-y-1"
//                                 >
//                                     <i className="fab fa-facebook-f text-white text-lg"></i>
//                                 </a>
//                                 <a 
//                                     href="https://www.instagram.com/hasan___talukder/" 
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="w-10 h-10 rounded-full bg-pink-500 flex items-center justify-center hover:bg-pink-600 transition-all hover:-translate-y-1"
//                                 >
//                                     <i className="fab fa-instagram text-white text-lg"></i>
//                                 </a>
//                                 <a 
//                                     href="#" 
//                                     className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-800 transition-all hover:-translate-y-1"
//                                 >
//                                     <i className="fab fa-github text-white text-lg"></i>
//                                 </a>
//                                 <a 
//                                     href="#" 
//                                     className="w-10 h-10 rounded-full bg-blue-400 flex items-center justify-center hover:bg-blue-500 transition-all hover:-translate-y-1"
//                                 >
//                                     <i className="fab fa-linkedin-in text-white text-lg"></i>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right Section - Contact Form */}
//                     <div className="md:w-1/2">
//                         <div className="bg-white rounded-xl shadow-md p-6">
//                             <h3 className="text-xl font-bold text-gray-800 mb-2">
//                                 Let's make magic together ✨
//                             </h3>
//                             <p className="text-gray-500 text-sm mb-5">
//                                 Fill out the form and I'll get back to you within 24 hours.
//                             </p>

//                             {isSubmitted && (
//                                 <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
//                                     Message sent successfully! 🎉
//                                 </div>
//                             )}

//                             <form onSubmit={handleSubmit} className="space-y-4">
//                                 <div>
//                                     <label className="block text-gray-600 text-sm font-medium mb-1">Your Name</label>
//                                     <input
//                                         type="text"
//                                         name="name"
//                                         value={formData.name}
//                                         onChange={handleChange}
//                                         placeholder="John Doe"
//                                         required
//                                         className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-gray-600 text-sm font-medium mb-1">Email Address</label>
//                                     <input
//                                         type="email"
//                                         name="email"
//                                         value={formData.email}
//                                         onChange={handleChange}
//                                         placeholder="hello@example.com"
//                                         required
//                                         className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all"
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-gray-600 text-sm font-medium mb-1">Your Message</label>
//                                     <textarea
//                                         name="message"
//                                         value={formData.message}
//                                         onChange={handleChange}
//                                         placeholder="Tell me about your project..."
//                                         rows="4"
//                                         required
//                                         className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-100 transition-all resize-none"
//                                     ></textarea>
//                                 </div>

//                                 <button
//                                     type="submit"
//                                     className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all transform hover:-translate-y-0.5 shadow-md"
//                                 >
//                                     Send Message
//                                     <i className="fas fa-paper-plane ml-2"></i>
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Font Awesome */}
//             <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
//         </div>
//     );
// };

// export default Contact;

import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { socials } from './data';

const inputClass =
    'w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/20';

const Contact = ({ id = 'contact' }) => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: send to your backend / EmailJS / Formspree here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id={id} className="bg-white px-5 py-20">
            <div className="mx-auto max-w-6xl">
                <SectionTitle title="Let's work together" subtitle="Have a project in mind? Send a message and I'll reply within 24 hours." />

                <div className="grid gap-14 md:grid-cols-2">
                    {/* Contact info */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                                <i className="fas fa-phone"></i>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Phone</p>
                                <a href="tel:+8801768712230" className="font-semibold text-slate-900 hover:text-teal-700">
                                    +880 1768712230
                                </a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-teal-700">
                                <i className="fas fa-envelope"></i>
                            </div>
                            <div>
                                <p className="text-sm text-slate-500">Email</p>
                                <a href="mailto:hasantalukdercou@gmail.com" className="font-semibold text-slate-900 hover:text-teal-700">
                                    hasantalukdercou@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="pt-4">
                            <p className="mb-3 text-sm text-slate-500">Find me online</p>
                            <div className="flex gap-3">
                                {socials.map((s) => (
                                    <a
                                        key={s.name}
                                        href={s.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={s.name}
                                        title={s.name}
                                        className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:border-teal-700 hover:bg-teal-700 hover:text-white"
                                    >
                                        <i className={s.icon}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-200 md:p-8">
                        {isSubmitted && (
                            <div role="status" className="mb-5 rounded-xl bg-teal-100 p-3 text-center font-medium text-teal-800">
                                Message sent. Thank you!
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div>
                                <label htmlFor="name" className="mb-1 block text-sm font-medium text-slate-700">Your name</label>
                                <input id="name" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="email" className="mb-1 block text-sm font-medium text-slate-700">Email address</label>
                                <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="hello@example.com" required className={inputClass} />
                            </div>
                            <div>
                                <label htmlFor="message" className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                                <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project" rows="4" required className={`${inputClass} resize-none`}></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full rounded-full bg-teal-700 py-3 font-semibold text-white transition-colors hover:bg-teal-800"
                            >
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;