import React from "react";

const Banner = () => {
  return (
    <div className="hero bg-base-100 min-h-[calc(100vh-60px)]">
      <div className="hero-content flex-col lg:flex-row-reverse gap-x-36 gap-y-8">
        <img
          src="assets/images/dp.png"
          className="max-w-full md:max-w-md rounded-full border-4 border-primary"
        />
        <div>
          <h2 className="text-3xl font-mono mb-2">Hello World!</h2>
          <h1 className="text-5xl font-bold">
            Myself, <span className="text-primary">Mohammad Fattah Samit</span>
          </h1>
          <p className="pt-6">
            Computer Science and Engineering graduate passionate about
            continuous learning and growth. Adaptable, responsible, and quick
            learner with a keen aptitude for technology. Seeking industry
            opportunities to collaborate, learn, and apply skills in real-world
            projects.
          </p>
          <p className="text-primary font-mono pt-2 pb-6">
            Software Engineering, Web Development, Machine Learning
          </p>

          <button className="btn btn-primary btn-outline text-white">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
