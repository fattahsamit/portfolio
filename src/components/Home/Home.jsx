import Banner from "../Banner/Banner";
import About from "../About/About";
import Education from "../Education/Education";
import Experience from "../Experience/Experience";
import ProjectShowcase from "../Projects/ProjectShowcase";

const Home = () => {
  return (
    <div className="container mx-auto">
      <Banner></Banner>
      <About></About>
      <ProjectShowcase />
      <Experience></Experience>
      <Education></Education>
    </div>
  );
};

export default Home;
