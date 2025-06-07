import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./Experience.css";

function Experience() {
  const codeString = `/* experience.css */

.kshitij-gupta {
  email: "guptakshitij2308@gmail.com";
  github: "guptakshitij2308";

  education: {
    abv_iiitm: {
      degree: "Integrated B.Tech + M.Tech in Information Technology",
      institution: "ABV-IIITM Gwalior",
      duration: "Oct 2021 - May 2026",
      cgpa: "8.15 / 10.0",
      subjects: [
        "Data Structures", "Algorithms", "DBMS", 
        "Operating Systems", "OOPs", "Computer Networks",
        "Computer Architecture"
      ]
    }
  };

  experience: {
    Tally_Solutions_Private_Limited: {
      role: "Software Engineer Intern",
      tech: ["React", "TypeScript", "Node.js", "MySQL"],
      duration: "Oct 2024 - Jan 2025",
      highlights: [
        "Engineered a business intelligence dashboard for 5,000+ enterprise users",
        "Increased decision-making speed by 40% using data-driven visualizations",
        "Optimized API queries and reduced latency by 35%, enabling 3x more concurrent users",
        "Collaborated across product and design to deliver impactful UI/UX at scale"
      ]
    },
    Flickmatch_Private_Limited: {
      role: "Software Dev Intern",
      tech: ["Java", "Spring Boot", "React.js", "AWS", "GitHub Actions"],
      duration: "Feb 2024 - Jul 2024",
      highlights: [
        "Integrated Razorpay and Stripe gateways for secure high-volume transactions (1K+ daily)",
        "Automated deployment workflows with CI/CD pipelines using GitHub Actions",
        "Boosted frontend Lighthouse performance score from 65 → 92",
        "Built real-time analytics dashboard that contributed to 25% revenue growth"
      ]
    },
    aican: {
      role: "Full Stack Intern",
      tech: ["MERN", "Nodemailer", "Cloudinary"],
      duration: "Oct 2023 - Feb 2024",
      highlights: [
        "Developed IoT-enabled operations dashboard tailored for MSME use-cases",
        "Reduced server response time by optimizing backend and database queries",
        "Integrated email automation (Nodemailer) and secure media storage (Cloudinary)",
        "Improved Google PageSpeed score and SEO metrics by 40%"
      ]
    }
  };

  projects: {
    hackex: {
      stack: ["React", "Node.js", "MongoDB", "Docker"],
      summary: "A scalable online coding platform with a custom-built compiler engine and collaborative arenas",
      features: [
        "In-house Dockerized compiler supporting C++, Python, and Java",
        "Real-time multiplayer battle mode using WebSockets",
        "User leaderboard, profile statistics, and custom contest creation",
        "Used by 100+ users in private alpha with zero third-party dependency"
      ],
      awards: "🏆 Winner - Tally Codebrewers (17,000+ teams)"
    },
    deepflowshield: {
      tech: ["LSTM", "Keras", "PCA", "Flask"],
      summary: "A deep learning system for detecting and classifying DDoS attacks with high accuracy",
      features: [
        "Achieved 99.6% detection accuracy using LSTM on time-series data",
        "Reduced feature dimensionality using PCA while preserving variance",
        "Built and served model via Flask REST API for integration with monitoring tools",
        "Visualized performance metrics with Seaborn and Matplotlib"
      ]
    },
        musicify: {
      stack: ["React Native", "Redux", "Expo", "Firebase"],
      summary: "A cross-platform music streaming app for discovering, playing, and managing tracks on the go",
      features: [
        "Integrated real-time music playback with track seek, pause, and resume",
        "Used JWT and MongoDB Aggregation pipeline to manage user accounts and playlists",
        "Implemented global state management using Redux for seamless experience",
        "Designed custom audio player UI with progress bar, album art, and control buttons"
      ],
    }

  };

  skills: {
    languages: ["C/C++", "JavaScript", "TypeScript", "Java", "Python", "SQL"],
    databases: ["MongoDB", "MySQL", "DynamoDB", "Firebase"],
    frameworks: ["React", "Node", "Express", "Spring Boot", "Redux", "GraphQL"],
    devtools: ["AWS", "Docker", "Postman", "Jira", "Git", "GitHub Actions"],
    others: ["REST APIs", "Linux", "CI/CD", "Unit Testing", "UI/UX Design"]
  };

  achievements: [
    "🥇 Winner - Tally Codebrewers 2024 (out of 17,000+ teams)",
    "🎓 Selected - Amazon ML Summer School 2024",
    "🏅 Top 5% - Adobe GenSolve Hackathon 2024",
    "🎤 Organizer - 5 National Events with RCOY (UN-backed) Club"
  ];

  academics: {
    class10: "96.2%",
    class12: "96.0%"
  };
}
`;

  return (
    <div className="experience-container">
      <SyntaxHighlighter
        language="css"
        style={vscDarkPlus}
        customStyle={{
          fontSize: "14px",
          background: "#1e1e1e",
          padding: "1.5rem",
          borderRadius: "8px",
          overflowX: "auto",
        }}
        showLineNumbers
        lineNumberStyle={{
          color: "#555",
          paddingRight: "10px",
          minWidth: "2em",
          textAlign: "right",
        }}
      >
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
}

export default Experience;
