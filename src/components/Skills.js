function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>Skills</h2>

      <div className="skills-grid">

        <div className="skill-card">
          <h3>Frontend</h3>

          <div className="skill">
            <span><span>React.js</span><span>90%</span></span>
            <div className="progress"><div className="bar" style={{ width: "90%" }} /></div>
          </div>

          <div className="skill">
            <span><span>JavaScript</span><span>85%</span></span>
            <div className="progress"><div className="bar" style={{ width: "85%" }} /></div>
          </div>

          <div className="skill">
            <span><span>HTML & CSS</span><span>80%</span></span>
            <div className="progress"><div className="bar" style={{ width: "80%" }} /></div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Backend</h3>

          <div className="skill">
            <span><span>Spring Boot</span><span>85%</span></span>
            <div className="progress"><div className="bar" style={{ width: "85%" }} /></div>
          </div>

          <div className="skill">
            <span><span>Node.js</span><span>80%</span></span>
            <div className="progress"><div className="bar" style={{ width: "80%" }} /></div>
          </div>

          <div className="skill">
            <span><span>Express.js</span><span>75%</span></span>
            <div className="progress"><div className="bar" style={{ width: "75%" }} /></div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Databases</h3>

          <div className="skill">
            <span><span>MySQL</span><span>75%</span></span>
            <div className="progress"><div className="bar" style={{ width: "75%" }} /></div>
          </div>

          <div className="skill">
            <span><span>MongoDB</span><span>80%</span></span>
            <div className="progress"><div className="bar" style={{ width: "80%" }} /></div>
          </div>
        </div>

        <div className="skill-card">
          <h3>Tools & Platforms</h3>

          <div className="skill">
            <span><span>Git & GitHub</span><span>85%</span></span>
            <div className="progress"><div className="bar" style={{ width: "85%" }} /></div>
          </div>

          <div className="skill">
            <span><span>VS Code</span><span>90%</span></span>
            <div className="progress"><div className="bar" style={{ width: "90%" }} /></div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Skills;
