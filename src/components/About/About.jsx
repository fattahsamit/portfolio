import Lottie from "lottie-react";
import developerAnimation from "../../assets/animations/developer.json";

const About = () => {
  return (
    <div className="w-1/2 mx-auto">
      <Lottie animationData={developerAnimation} loop={true} />
    </div>
  );
};

export default About;
