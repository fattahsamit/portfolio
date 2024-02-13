const ExperienceCard = ({
  img,
  company,
  companyLink,
  designation,
  locationType,
  description,
  year,
}) => {
  return (
    <div className="card p-5 my-5 bg-base-100 shadow-xl border border-primary mx-auto w-3/4 flex items-center md:flex-row">
      <div className="w-72">
        <img src={img} alt="Company" className="rounded-full" />
      </div>
      <div className="card-body">
        <h3 className="card-title">{designation}</h3>
        <a
          className="text-primary text-lg"
          href={companyLink}
          target="_blank"
          rel="noreferrer"
        >
          {company}
        </a>
        <p>{locationType}</p>
        <p>{year}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
