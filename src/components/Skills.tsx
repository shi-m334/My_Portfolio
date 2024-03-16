import React from "react";
import SkillCard from "./SkillCard";
import { skillsData } from "../data/skillsData";

const Skills: React.FC = () => (
  <div className="container mx-auto px-5 mt-10">
    <div className="text-center">
      <h2 className="text-center text-3xl lg:text-4xl font-bold mb-5">
        Skills
      </h2>
    </div>
    <div className="flex flex-wrap justify-center">
      {skillsData.map((skill) => (
        <SkillCard key={skill.id} skill={skill} />
      ))}
    </div>
  </div>
);

export default Skills;
