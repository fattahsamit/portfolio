import ProjectCard from "./ProjectCard";

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <ProjectCard
          img={
            "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
          }
          liveLink={"https://fattahsamit.netlify.app/"}
          repoLink={"https://github.com/fattahsamit/portfolio"}
          title={"Project 1"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem recusandae harum accusantium fuga, mollitia eveniet."
          }
          tools={["React", "Redux", "Typescript"]}
        ></ProjectCard>
      </div>
      <div className="carousel-item">
        <ProjectCard
          img={
            "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
          }
          liveLink={"https://fattahsamit.netlify.app/"}
          repoLink={"https://github.com/fattahsamit/portfolio"}
          title={"Project 2"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem recusandae harum accusantium fuga, mollitia eveniet."
          }
          tools={["Python", "MySQL"]}
        ></ProjectCard>
      </div>
      <div className="carousel-item">
        <ProjectCard
          img={
            "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
          }
          liveLink={"https://fattahsamit.netlify.app/"}
          repoLink={"https://github.com/fattahsamit/portfolio"}
          title={"Project 3"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem recusandae harum accusantium fuga, mollitia eveniet."
          }
          tools={["HTML", "CSS", "Javascript"]}
        ></ProjectCard>
      </div>
      <div className="carousel-item">
        <ProjectCard
          img={
            "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
          }
          liveLink={"https://fattahsamit.netlify.app/"}
          repoLink={"https://github.com/fattahsamit/portfolio"}
          title={"Project 4"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem recusandae harum accusantium fuga, mollitia eveniet."
          }
          tools={["HTML", "CSS"]}
        ></ProjectCard>
      </div>
      <div className="carousel-item">
        <ProjectCard
          img={
            "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
          }
          liveLink={"https://fattahsamit.netlify.app/"}
          repoLink={"https://github.com/fattahsamit/portfolio"}
          title={"Project 5"}
          description={
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. orem recusandae harum accusantium fuga, mollitia eveniet."
          }
          tools={["HTML", "CSS", "Javascript"]}
        ></ProjectCard>
      </div>
    </div>
  );
};

export default Carousel;
