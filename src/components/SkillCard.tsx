import React from 'react';
import { Skill } from '../data/Skill';

interface SkillCardProps {
  skill: Skill;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => (
  <div className="w-full sm:w-1/2 md:w-1/3 p-4">
    <div className="bg-gray-200 rounded-lg p-8 h-full">
      <div className="flex flex-col items-center mb-3">
        <div className="flex mb-3">
          {skill.iconPaths.map((path, index) => (
            <img
              key={index}
              src={path}
              alt={skill.title}
              className="h-10 w-10"
            />
          ))}
        </div>
        <h2 className="text-gray-900 text-lg font-medium">{skill.title}</h2>
      </div>
      <p className="mb-3">{skill.description}</p>
      <span>{skill.experience}</span>
    </div>
  </div>
);

export default SkillCard;
