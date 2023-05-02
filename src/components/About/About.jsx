import React from "react";
import Lottie from "lottie-react";
import developerAnimation from "../../assets/animations/developer.json";

const About = () => {
  return (
    <div className=" lg:w-4/12 ">
      <Lottie animationData={developerAnimation} loop={true} />
    </div>
  );
};

export default About;
