import React from 'react'
import '../assets/css/Skills.css'
import { SkillsCard } from '../components'
import { ReactLogo ,MongoDbLogo ,JsImage , TailwindLogo ,NodejsLogo  } from '../assets'
function Skills() {
  let SkillsArray = [
    {
      Image : JsImage ,
      title : (<>Java&nbsp;script</>) ,
      content : (<>Proficient in JavaScript, with expertise in creating dynamic, responsive web applications. Skilled in ES6+ features, DOM manipulation, and event-driven programming. Experienced in both front-end and back-end JavaScript frameworks, enhancing application performance and user experience</>) 
    },
    {
      Image : NodejsLogo ,
      title : (<>Node&nbsp;js</>) ,
      content : (<>Proficient in Node.js with experience in building server-side applications, managing APIs, implementing authentication, and handling databases using frameworks like Express. Adept in using asynchronous programming, RESTful services, and integrating MongoDB with Mongoose for full stack development.</>) 
    },
    {
      Image : ReactLogo ,
      title : (<>React&nbsp;js</>) ,
      content : (<>Proficient in React.js, experienced in building interactive and high-performance user interfaces. Skilled in component-based architecture, state management, and React Hooks. Expertise in integrating APIs, optimizing rendering, and enhancing user experience with modern front-end techniques.</>) 
    },
    {
      Image : TailwindLogo ,
      title : (<>Tailwind&nbsp;css</>) ,
      content : (<>Proficient in Tailwind CSS, with expertise in creating responsive and visually appealing web designs. Skilled in leveraging utility-first classes to build custom layouts efficiently. Experienced in integrating Tailwind with React, ensuring clean and maintainable code while optimizing for performance</>) 
    },
    {
      Image : MongoDbLogo ,
      title : (<>Mongo&nbsp;DB</>) ,
      content : (<>
Proficient in MongoDB, skilled in designing and managing NoSQL databases. Experienced in creating efficient data models, performing complex queries, and optimizing database performance. Expertise in aggregation pipelines, indexing, and handling large datasets in a scalable environment</>) 
    },
  ]
  return (
    <div className='skillsDiv'>
      <div className="skillsMainDiv">        
        <div className="skillsHeadingDiv">
          <p>My</p>&nbsp;&nbsp;<p>Skills</p>
        </div>
      </div>
        <div className="skillsContentDiv">
          {
            SkillsArray.map(({Image , title , content} , i)=> <SkillsCard key={i} logo={Image} title={title} content={content} />)
          }
        </div>
    </div>
  )
}

export default Skills