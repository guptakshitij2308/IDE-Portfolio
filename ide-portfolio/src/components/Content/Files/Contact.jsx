import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  const setQuickMode = (mode) => {
    let message = "";
    switch (mode) {
      case "job":
        message = "I'd like to discuss a job opportunity with you.";
        break;
      case "project":
        message = "I have a project idea I'd like to collaborate on.";
        break;
      case "question":
        message = "I have a question about your work.";
        break;
      default:
        message = "";
    }

    setFormData((prevState) => ({
      ...prevState,
      message,
    }));
  };

  return (
    <div className="vscode-page">
      <div className="content-wrapper">
        <div className="main-content">
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2 className="form-title">Contact Form</h2>

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  const name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  const email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  const message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-input form-textarea"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder={"// Write your message here..."}
                ></textarea>
              </div>

              <div className="quick-mode-container">
                <span className="quick-mode-title">
                  {"// Quick templates:"}
                </span>
                <button
                  type="button"
                  className="quick-mode-button"
                  onClick={() => setQuickMode("job")}
                >
                  Job Opportunity
                </button>
                <button
                  type="button"
                  className="quick-mode-button"
                  onClick={() => setQuickMode("project")}
                >
                  Project Idea
                </button>
                <button
                  type="button"
                  className="quick-mode-button"
                  onClick={() => setQuickMode("question")}
                >
                  Question
                </button>
              </div>

              <button type="submit" className="form-button">
                Send Message
              </button>
            </form>
          </div>

          {/* Terminal Section */}
          <div className="editor-container">
            <div className="terminal-container">
              <div className="panel-tabs">
                <div className="panel-tab">Problems</div>
                <div className="panel-tab">Output</div>
                <div className="panel-tab">Debug Console</div>
                <div className="panel-tab active">Terminal</div>
                <div className="panel-tab">Ports</div>
              </div>
              <div className="terminal-body">
                <div className="terminal-line login-info">
                  Last login: Fri Jun 7 14:30:00 on Windows 11 PowerShell
                </div>

                <div className="terminal-line">
                  <span className="prompt-user">kshitij@DESKTOP-12345 ~ $</span>
                </div>

                <div className="terminal-line">
                  <span className="prompt-command">{"> whoami"}</span>
                </div>
                <div className="terminal-output">Kshitij Gupta</div>
                <div className="terminal-output">
                  🚀 Ready to innovate & code!
                </div>

                <div className="terminal-line">
                  <span className="prompt-command">{"> contact"}</span>
                </div>
                <div className="terminal-output">
                  <span className="icon">📧</span>{" "}
                  <a href="mailto:guptakshitij2308@gmail.com">
                    guptakshitij2308@gmail.com
                  </a>
                </div>
                <div className="terminal-output">
                  <span className="icon">🌐</span>{" "}
                  <a
                    href="https://www.linkedin.com/in/kshitij-gupta-362aa1227/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/kshitij-gupta
                  </a>
                </div>
                <div className="terminal-output">
                  <span className="icon">💻</span>{" "}
                  <a
                    href="https://github.com/guptakshitij2308"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/guptakshitij2308
                  </a>
                </div>
                <div className="terminal-output">
                  <span className="icon">📍</span> India
                </div>

                <div className="terminal-line">
                  <span className="prompt-command">{"> resume"}</span>
                </div>
                <div className="terminal-output">
                  <span className="icon">📄</span>{" "}
                  <a
                    href="https://drive.google.com/file/d/1IYCtua_74iQ_gpl8xLEVPibOh1fmTALK/view"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Resume
                  </a>
                </div>

                <div className="terminal-line">
                  <span className="prompt-command">
                    {'> echo "Let\'s build something awesome together!"'}
                  </span>
                </div>
                <div className="terminal-output">
                  Let&apos;s build something awesome together! 💻✨
                </div>

                <div className="terminal-line">
                  <span className="prompt-user">kshitij@DESKTOP-12345 ~ $</span>
                  <span className="cursor"></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
