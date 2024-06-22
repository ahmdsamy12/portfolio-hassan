import { skills } from "../constants";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import skillsImage from "../images/Skills.png";
import dots from "../images/dots2.png";

const Skills = () => {
  return (
    <div className="skills mt-32 relative">
      <img src={skillsImage} alt="skills" className="mb-24" />
      <div className=" grid min-[850px]:grid-cols-4 gap-20 grid-cols-2">
        {skills.map((skill) => (
          <div className="skills-card my-4" key={skill.title}>
            <div className="min-[850px]:w-[220px] min-[850px]:h-[220px] w-[119px] h-[119px]">
              <CircularProgressbar
                value={skill.percent}
                text={skill.percent + "%"}
                styles={buildStyles({
                  textColor: "#000",
                  pathColor: "#7579FF",
                  trailColor: "#EDEEFF",
                })}
              />
              <h3 className="text-center mt-5">{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <img
        src={dots}
        alt="dots"
        className="absolute top-[50px] left-[-100px] md:flex hidden"
      />
      <img
        src={dots}
        alt="dots"
        className="absolute bottom-[-50px] left-[-100px] md:flex hidden"
      />
      <img
        src={dots}
        alt="dots"
        className="absolute top-[55%] right-[-100px] md:flex hidden"
      />
    </div>
  );
};

export default Skills;
