import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-100 py-5">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-72 gap-y-8">
        <img
          src="assets/images/dp.png"
          className="max-w-full md:max-w-sm rounded-full border-4 border-primary"
        />
        <div>
          <h2 className="text-4xl font-bold">Hello World!</h2>
          <h1 className="text-5xl font-bold">
            Myself, <span className="text-primary">Mohammad Fattah Samit</span>
          </h1>
          <p className="py-6">
            Computer Science and Engineering graduate passionate about
            continuous learning and growth. Adaptable, responsible, and quick
            learner with a keen aptitude for technology. Seeking industry
            opportunities to collaborate, learn, and apply skills in real-world
            projects.
          </p>
          <button className="btn btn-primary text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
