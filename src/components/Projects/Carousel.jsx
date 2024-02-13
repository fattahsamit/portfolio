import ProjectCard from "./ProjectCard";

const Carousel = () => {
  return (
    <div className="carousel carousel-center max-w-full p-4 space-x-4 bg-neutral rounded-box">
      <div className="carousel-item">
        <ProjectCard
          img={
            "https://cdn.pixabay.com/photo/2018/05/18/15/30/web-design-3411373_1280.jpg"
          }
          liveLink={"https://todo-m23.netlify.app"}
          repoLink={"https://github.com/fattahsamit/to-do-list"}
          title={"To Do List"}
          description={
            "React-based to-do list web app featuring state management with Redux. It includes user authentication, form validation, private routes, task management, and Dark Mode support."
          }
          tools={["React", "Redux", "Typescript", "Tailwind CSS"]}
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
          liveLink={"https://fattahsamit.github.io/text-editor"}
          repoLink={"https://github.com/fattahsamit/text-editor"}
          title={"Text Editor"}
          description={
            "Responsive web application that allows users to create and edit plain text documents directly in any web browser.Designed to be fully responsive and functional, meaning it will work seamlessly on devices of all sizes as long as you have internet connection."
          }
          tools={["HTML", "Tailwind CSS", "Javascript"]}
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
