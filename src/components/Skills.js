function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-container">

        {/* Frontend */}
        <div className="skill-card">
          <h3>Frontend</h3>

          <div className="skill">
            <span>React.js</span>
            <span>90%</span>
            <div className="bar">
              <div className="fill" style={{ width: "90%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>JavaScript</span>
            <span>85%</span>
            <div className="bar">
              <div className="fill" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>HTML & CSS</span>
            <span>80%</span>
            <div className="bar">
              <div className="fill" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>

        {/* Backend */}
        <div className="skill-card">
          <h3>Backend</h3>

          <div className="skill">
            <span>Spring Boot</span>
            <span>85%</span>
            <div className="bar">
              <div className="fill" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Node.js</span>
            <span>80%</span>
            <div className="bar">
              <div className="fill" style={{ width: "80%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>Express.js</span>
            <span>75%</span>
            <div className="bar">
              <div className="fill" style={{ width: "75%" }}></div>
            </div>
          </div>
        </div>

        {/* Databases */}
        <div className="skill-card">
          <h3>Databases</h3>

          <div className="skill">
            <span>MySQL</span>
            <span>75%</span>
            <div className="bar">
              <div className="fill" style={{ width: "75%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>MongoDB</span>
            <span>80%</span>
            <div className="bar">
              <div className="fill" style={{ width: "80%" }}></div>
            </div>
          </div>
        </div>

        {/* Tools */}
        <div className="skill-card">
          <h3>Tools & Platforms</h3>

          <div className="skill">
            <span>Git & GitHub</span>
            <span>85%</span>
            <div className="bar">
              <div className="fill" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="skill">
            <span>VS Code</span>
            <span>90%</span>
            <div className="bar">
              <div className="fill" style={{ width: "90%" }}></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
