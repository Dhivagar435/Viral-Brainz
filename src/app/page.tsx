import AboutUs from "../components/home/AboutUs";
import Clients from "../components/home/Clients";
import Hero from "../components/home/Hero";
import Results from "../components/home/Result";
import Services from "../components/home/Services";
import WhyChooseUs from "../components/home/WhyChooseUs";
import OurWork from "../components/home/OurWork";
import Blog from "../components/home/Blog";
import Contact from "../components/home/Contact";
const Home = () => {
  return (
    <div>
      <Hero />
      <AboutUs />
      <Services />
      <WhyChooseUs />
      <Results />
      <Clients/>
      <OurWork/>
      <Blog/>
      <Contact/>
    </div>
  );
};
export default Home;
