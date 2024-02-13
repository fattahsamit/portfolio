const ProjectCard = ({
  title,
  description,
  tools,
  img,
  liveLink,
  repoLink,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="project" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex gap-3 my-1">
          <button className="btn btn-outline btn-primary w-1/3">
            <a href={liveLink} target="_blank" rel="noreferrer">
              Live Site
            </a>
          </button>
          <button className="btn btn-outline btn-primary">
            <a href={repoLink} target="_blank" rel="noreferrer">
              Repository
            </a>
          </button>
        </div>
        <p>{description}</p>
        <div className="card-actions justify-start mt-2">
          {tools.map((tool, index) => (
            <div
              key={index}
              className="badge badge-primary badge-lg badge-outline"
            >
              {tool}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
