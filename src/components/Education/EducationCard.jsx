const EducationCard = ({ img, degree, school, gpa, year }) => {
  return (
    <div className="card p-5 my-5 bg-base-100 shadow-xl border border-primary mx-auto w-3/4 flex items-center md:flex-row">
      <div className="w-28">
        <img src={img} alt="Institute" />
      </div>
      <div className="card-body">
        <h2 className="card-title">{degree}</h2>
        <h3 className="text-primary">{school}</h3>
        {gpa && (
          <p>
            CGPA: <strong>{gpa}</strong>
          </p>
        )}
        <p>{year}</p>
      </div>
    </div>
  );
};

export default EducationCard;
