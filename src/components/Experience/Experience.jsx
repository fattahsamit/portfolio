import ExperienceCard from "./ExperienceCard";

const Experience = () => {
  return (
    <div className="my-20">
      <h2 className="text-4xl text-center my-10 text-primary">Experience</h2>
      <ExperienceCard
        img={"assets/images/trayn.jpeg"}
        designation={"Software Engineer - QA Automation"}
        company={"Trayn CA"}
        companyLink={"https://www.trayn.ca"}
        locationType={"Full-time | Hybrid"}
        year={"June 2023 - Running"}
        description={
          "As a Software Quality Assurance (SQA) engineer, I'm at the forefront of ensuring the top-notch quality of our software products. I conduct thorough testing, both manually and with automated tools. Collaboration is key as I work closely with the team to enforce quality standards and maintain clear communication."
        }
      ></ExperienceCard>
      <ExperienceCard
        img={"assets/images/fiverr.png"}
        designation={"Software Engineer - QA Automation"}
        company={"Fiverr"}
        locationType={"Freelance | Remote"}
        year={"February 2019 - July 2021"}
        description={
          "Experienced in writing, editing, reviewing and proofreading to produce high-quality for a global online marketplace. Managed and delivered content that met clients' needs within deadlines."
        }
      ></ExperienceCard>
    </div>
  );
};

export default Experience;
