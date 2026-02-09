import About from "./about";
import Banner from "./Banner";
import Navbar from "./Navbar";
import Project from "./project";
import Service from "./service";
import Skill from "./Skil";
import Footer from "./footer";
import Contact from "./contact";
import Review from "./review";


const Home = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
              <Navbar id="home"/>
              <Banner id="banner"/>
               <About id="about"/>
              <Skill  id="skill"/>
              <Service id="service" />
              <Project id="project" />
              <Review id="review" />
              <Contact id="contact"/>
                 <Footer/>
             
        </div>
    );
};

export default Home;