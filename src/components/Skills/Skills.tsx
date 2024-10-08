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
import Python from './images/python.svg';
import Rails from './images/Rails.svg';
import React from './images/React.svg';
import CockroachDB from './images/CockroachDB.svg';
import Ruby from './images/Ruby.svg';
// import Twilio from './images/Twilio.svg';
import TypeScript from './images/TypeScript.svg';
import { motion } from 'framer-motion';
import './Skills.css';


export const Skills = () => {
  const skills = [
    {
      name: 'React',
      icon: React,
    },
    {
      name: 'JavaScript',
      icon: JavaScript,
    },
    {
      name: 'TypeScript',
      icon: TypeScript,
    },
    {
      name: 'Ruby',
      icon: Ruby,
    },
    {
      name: 'Rails',
      icon: Rails,
    },
    {
      name: 'Python',
      icon: Python,
    },
    {
      name: 'Java',
      icon: Java,
    },
    {
      name: 'MySQL',
      icon: MySQL,
    },
    {
      name: 'HTML',
      icon: HTML,
    },
    {
      name: 'CSS',
      icon: CSS,
    },
    {
      name: 'GraphQL',
      icon: GraphQL,
    },
    {
      name: 'NodeJS',
      icon: NodeJS,
    },
    {
      name: 'MongoDB',
      icon: MongoDB,
    },
    {
      name: 'Git',
      icon: Git,
    },
    // {
    //   name: 'Twilio',
    //   icon: Twilio,
    // },
    {
      name: 'Express',
      icon: Express,
    },
  ];

  const skillsMarkup = skills.map((skill, index) => {
    return (
      <div key={index} className='col center'>
        <div className="skills-img align-items-center justify-content-center">
          <motion.img src={skill.icon}
            whileHover={{ scale: 1.2 }}
            onHoverStart={ e => {}}
            onHoverEnd={ e => {}}
            layout
          />
        </div>
        <h6 className='skills-text'>{skill.name}</h6>
      </div>
    );
  });

  return (
    <div id="skills" className='skills ms-4 me-4'>
      <div className="row">
        <h3>Skills</h3>
      </div>
      <div className="all-skills row row-cols-2 row-cols-md-6 g-4 mt-3">
        {skillsMarkup}
      </div>
    </div>
  );
}
