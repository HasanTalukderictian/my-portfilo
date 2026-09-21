import '@fortawesome/fontawesome-free/css/all.min.css';
import '../css/theme.css';

import Navbar from './Navbar';
import Banner from './Banner';
import About from './about';
import Skill from './Skil';
import Service from './service';
import Project from './project';
import Review from './review';
import Contact from './contact';
import Footer from './footer';

const Home = () => {
    return (
        <div className="bg-white">
            <Navbar />
            <Banner id="banner" />
            <About id="about" />
            <Skill id="skill" />
            <Service id="service" />
            <Project id="project" />
            <Review id="review" />
            <Contact id="contact" />
            <Footer />
        </div>
    );
};

export default Home;