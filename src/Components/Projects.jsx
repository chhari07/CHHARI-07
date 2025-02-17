import React from "react";
import "./Projects.css";

const Projects = () => {
  const projects = [
    {
      image: "https://wallpapercave.com/uwp/uwp4673313.png",
      githubLink: "https://github.com/chhari07/ALL-FIT-_",
      title: "ALL FIT",
      description: "A fitness web app related to Indian culture.",
    },
    {
      image: "https://wallpapercave.com/uwp/uwp4673317.png",
      githubLink: "https://github.com/chhari07/TIMES",
      title: "MANAD TIMES",
      description: "A news application in Next.js.",
    },
    {
      image: "https://wallpapercave.com/uwp/uwp4673316.png",
      githubLink: "https://github.com/chhari07/all_recipe_app",
      title: "ALL RECIPES",
      description: "A recipe website.",
    },
    {
      image: "https://wallpapercave.com/uwp/uwp4673315.png",
      githubLink: "https://github.com/chhari07/IMAGINARIA",
      title: "IMAGINARIA",
      description: "A wallpaper downloading website.",
    },
    {
      image: "https://wallpapercave.com/uwp/uwp4673314.png",
      githubLink: "https://github.com/chhari07/MentorMatch",
      title: "MENTOR MATCH",
      description: "A mentor finding website.",
    },
  ];

  const handleClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <div>
     
      <div className="accordion">
        {projects.map((project, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundImage: `url(${project.image})` }}
            onClick={() => handleClick(project.githubLink)}
          >
            <div className="text">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
