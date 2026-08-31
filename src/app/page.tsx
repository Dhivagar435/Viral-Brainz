
import AboutUs from "../components/sections/AboutUs";
import Hero from "../components/sections/Hero";
import Results from "../components/sections/Result";
import Services from "../components/sections/Services";
import WhyChooseUs from "../components/sections/WhyChooseUs";
const Home = () => {
  return (
    <div>
      <Hero />
      <Services/>
      <AboutUs/>
      <WhyChooseUs/>
      <Results/>
    </div>
  );
};
export default Home;
