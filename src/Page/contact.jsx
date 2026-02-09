const Contact = ({ id }) => {
    return (
        <div id={id} className="flex flex-col md:flex-row justify-between items-start p-12 bg-gray-900 text-white">
            {/* Left section: Connect with me */}
            <div className="mt-4 md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-xl font-semibold mb-4">Connect with me:</h2>
                <p className="mb-4">Satisfied with me? Please contact me</p>
               <p className="mb-4"> <i className="fas fa-phone"></i> 01768712230</p>
             <p>
         <i className="fas fa-envelope mr-2  mb-4"></i> 
         <a href="mailto:hasantalukdercou@gmail.com" target="_blank" rel="noopener noreferrer">
        hasantalukdercou@gmail.com
    </a>
</p>


             
                <div className="flex flex-wrap space-x-4">
                    {/* Social Media Icons */}
                    <a href="https://www.facebook.com/hasan.talukder.Ict/" className="text-2xl hover:text-purple-500 mb-2">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/hasan___talukder/?igsh=MTNmcG44amNrdzFkeA%3D%3D" className="text-2xl hover:text-purple-500 mb-2">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#" className="text-2xl hover:text-purple-500 mb-2">
                        <i className="fab fa-dribbble"></i>
                    </a>
                    <a href="#" className="text-2xl hover:text-purple-500 mb-2">
                        <i className="fas fa-envelope"></i>
                    </a>
                </div>
            </div>

            {/* Right section: Contact Form */}
            <div className="md:w-1/2">
                <h2 className="text-xl font-semibold mb-4">
                    Contact me, let's make magic together
                </h2>
                <form className="space-y-4">
                    <input
                        type="text"
                        placeholder="Name:"
                        className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none hover:bg-slate-400"
                    />
                    <input
                        type="email"
                        placeholder="Email:"
                        className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none hover:bg-slate-400"
                    />
                    <textarea
                        placeholder="Message:"
                        className="w-full p-2 bg-gray-800 text-white rounded-lg focus:outline-none h-32 hover:bg-slate-400"
                    ></textarea>
                    <button
                        type="submit"
                        className="w-full p-2 bg-purple-500 text-white rounded-lg text-xl hover:bg-purple-700 transition-colors"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
