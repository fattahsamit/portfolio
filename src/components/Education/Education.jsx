import React from "react";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <div>
      <h2 className="text-4xl text-center mb-10">Education</h2>
      <EducationCard
        img={"assets/images/diu.png"}
        degree={"BSc. in Computer Science & Engineering"}
        school={"Daffodil International University"}
        gpa={3.75}
        year={"2019 - 2023"}
      ></EducationCard>
      <EducationCard
        img={"assets/images/drmc.png"}
        degree={"Higher Secondary School Certificate"}
        school={"Dhaka Residential Model College"}
        year={"2016 - 2018"}
      ></EducationCard>
      <EducationCard
        img={"assets/images/drmc.png"}
        degree={"Secondary School Certificate"}
        school={"Dhaka Residential Model College"}
        year={"2014 - 2016"}
      ></EducationCard>
    </div>
  );
};

export default Education;
