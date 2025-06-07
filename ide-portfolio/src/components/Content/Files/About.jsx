import React, { useState } from "react";
import "./About.css";

const skills = {
  Languages: [
    {
      name: "C/C++",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "Java",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "HTML",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "SQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],
  "Data Science & ML": [
    {
      name: "Machine Learning",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/machinelearning/machinelearning-original.svg",
    },
    {
      name: "Deep Learning",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "LLMs",
      icon: "https://cdn-icons-png.flaticon.com/512/2922/2922510.png",
    }, // GPT icon (not devicon but common)
    {
      name: "Neural Networks",
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149777.png",
    },
    {
      name: "Natural Language Processing (NLP)",
      icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png",
    }, // text icon

    {
      name: "TensorFlow",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
    },
    {
      name: "Keras",
      icon: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    },
    {
      name: "NumPy",
      icon: "https://numpy.org/images/logos/numpy.svg",
    },
    {
      name: "Pandas",
      icon: "https://pandas.pydata.org/static/img/pandas_mark.svg",
    },
  ],
  Visualization: [
    {
      name: "Chart.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/chartjs/chartjs-original.svg",
    },
    {
      name: "Seaborn",
      icon: "https://seaborn.pydata.org/_static/logo-wide-lightbg.svg",
    },
    {
      name: "Matplotlib",
      icon: "https://matplotlib.org/_static/images/logo2.svg",
    },
    { name: "Plotly", icon: "https://cdn.plot.ly/plotly-logo.png" },
    {
      name: "Tableau",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg",
    },
  ],
  "Web Development": [
    {
      name: "React.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "React Native",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Nest.js",
      icon: "https://nestjs.com/img/logo-small.svg",
    },
    {
      name: "Redux",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    },
    {
      name: "Spring",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    },
    {
      name: "Spring Boot",
      icon: "https://spring.io/images/projects/spring-boot-9f403ae9a3e08a59be892207b75be9db.svg",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.worldvectorlogo.com/logos/tailwindcss.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Flask",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    },
  ],
  "Testing & Quality": [
    {
      name: "Unit Testing",
      icon: "https://cdn-icons-png.flaticon.com/512/2829/2829416.png",
    },
    {
      name: "Jest",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
  ],
  Databases: [
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "MySQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "AWS DynamoDB",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/65/Amazon_DynamoDB_Logo.svg",
    },
    {
      name: "Supabase",
      icon: "https://cdn.worldvectorlogo.com/logos/supabase-3.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ],
  "Cloud & DevOps": [
    {
      name: "AWS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
    },
    {
      name: "GitHub Actions",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "Docker",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    },
    {
      name: "CI/CD",
      icon: "https://cdn-icons-png.flaticon.com/512/2942/2942679.png",
    },
  ],
  "Security & Architecture": [
    {
      name: "REST APIs",
      icon: "https://cdn-icons-png.flaticon.com/512/1250/1250686.png",
    },
    {
      name: "GraphQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    },
    { name: "JWT", icon: "https://cdn.worldvectorlogo.com/logos/jwt-icon.svg" },
    {
      name: "OAuth2",
      icon: "https://cdn-icons-png.flaticon.com/512/2504/2504944.png",
    },
    {
      name: "Microservices",
      icon: "https://cdn-icons-png.flaticon.com/512/326/326862.png",
    },
    {
      name: "Caching",
      icon: "https://cdn-icons-png.flaticon.com/512/1061/1061349.png",
    },
  ],
};

const categories = ["All", ...Object.keys(skills)];

function About() {
  const [activeCategory, setActiveCategory] = useState("All");

  const getFilteredSkills = () => {
    if (activeCategory === "All") {
      return Object.entries(skills).flatMap(([_, list]) => list);
    }
    return skills[activeCategory] || [];
  };

  return (
    <div className="about-container">
      <div className="about-intro">
        <h2>👋 About Me</h2>
        <p>
          I&apos;m Kshitij — a Software Engineer building intelligent systems
          that turn data into real-world solutions.
        </p>
        <p>
          With a strong foundation in full-stack engineering, machine learning,
          and scalable infrastructure, I bring ideas to life with clarity and
          impact.
        </p>
      </div>

      <div className="skills-section">
        <h3>🧰 Skills</h3>
        <div className="skill-filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`skill-tab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="skill-grid">
          {getFilteredSkills().map((skill) => (
            <div key={skill.name} className="skill-badge">
              {skill.icon && (
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              )}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
