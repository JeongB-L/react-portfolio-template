import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faDocker,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const labelsFirst = [
  "React",
  "TypeScript",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Flask",
  "NodeJS",
  "ExpressJS",
  "Python",
  "MongoDB",
];

const labelsSecond = [
  "Azure",
  "Git",
  "Github",
  "AWS",
  "PostgreSQL",
  "Linux",
  "T-SQL",
  "MySQL",
  "SQLite",
  "Bash",
  "Docker",
  "DuckDB",
];

const labelsThird = [
  "Java",
  "C++",
  "C#",
  "C",
  ".NET Core",
  "Assembly Language",
  "ADO.NET",
  "Neo4j",
];

function Expertise2() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise as a Developer</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Full Stack Web Development</h3>
            <p>
              I have built modern, scalable web applications from scratch using
              technologies such as React, TypeScript, Flask, and Node.js. I am
              proficient in designing and implementing responsive user
              interfaces, developing RESTful APIs, and integrating databases for
              robust backend systems. I am experienced in working within the
              SCRUM framework to deliver high-quality software.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsFirst.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faDocker} size="3x" />
            <h3>Data Engineering & DevOps</h3>
            <p>
              I have extensive experience in designing and managing data
              pipelines, handling big data workloads (e.g., millions of .parquet
              files), and processing data efficiently using SQL and Python.
              Additionally, I have automated workflows and deployments with
              Docker, Bash scripts, and Azure Batch job scheduling, ensuring
              smooth CI/CD pipelines and scalable deployments.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsSecond.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Backend Development</h3>
            <p>
              I have a strong foundation in backend development, working with
              languages such as Java, C++, and Python to build robust
              server-side applications. I am experienced in implementing
              object-oriented principles, and integrating with databases along
              with technologies like .NET Core and ADO.NET. My expertise allows
              me to create scalable and maintainable backend solutions.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {labelsThird.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise2;
