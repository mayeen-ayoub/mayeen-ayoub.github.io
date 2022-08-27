import CSS from './images/CSS.svg';
import Express from './images/Express.svg';
import Git from './images/Git.svg';
import GraphQL from './images/GraphQL.svg';
import HTML from './images/HTML.svg';
import Java from './images/Java.svg';
import JavaScript from './images/JS.svg';
import MongoDB from './images/MongoDB.svg';
import MySQL from './images/MySQL.svg';
import NodeJS from './images/NodeJS.svg';
import Python from './images/GraphQL.svg';
import Rails from './images/Rails.svg';
import React from './images/React.svg';
import Twilio from './images/Twilio.svg';
import TypeScript from './images/TypeScript.svg';
import { motion } from 'framer-motion';


export const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: React,
    },
    {
      name: 'CSS',
      icon: CSS,
    },
    {
      name: 'Express',
      icon: Express,
    },
    {
      name: 'Git',
      icon: Git,
    },
    {
      name: 'GraphQL',
      icon: GraphQL,
    },
    {
      name: 'HTML',
      icon: HTML,
    },
    {
      name: 'Java',
      icon: Java,
    },
    {
      name: 'JavaScript',
      icon: JavaScript,
    },
    {
      name: 'MongoDB',
      icon: MongoDB,
    },
    {
      name: 'MySQL',
      icon: MySQL,
    },
    {
      name: 'NodeJS',
      icon: NodeJS,
    },
    {
      name: 'Python',
      icon: Python,
    },
    {
      name: 'Rails',
      icon: Rails,
    },
    {
      name: 'Twilio',
      icon: Twilio,
    },
    {
      name: 'TypeScript',
      icon: TypeScript,
    },
  ];

  const skillsMarkup = skills.map((skill, index) => {
    return (
      <div key={index} className='col center'>
        <motion.img src={skill.icon}
          whileHover={{ scale: 1.2 }}
          onHoverStart={ e => {}}
          onHoverEnd={ e => {}}
          layout
        />
        <br/>
        <h6 className='skills-text'>{skill.name}</h6>
      </div>
    );
  });

  return (
    <div className='skills'>
      <div className="row">
        <h3>Skills</h3>
      </div>
      <div className="row row-cols-1 row-cols-md-6 g-4 mt-3">
        {skillsMarkup}
      </div>
    </div>
  );
}
