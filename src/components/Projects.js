function Projects() {
  return (
    <section className="projects" id="projects">
      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <h3>Student Grade Management System</h3>
          <p>
            A web application developed using Python and Flask to manage student
            grades with secure data storage and MySQL database integration.
          </p>
          <p className="tech">Python • Flask • MySQL</p>
        </div>

        
        <div className="project-card">
          <h3>Tourism Management System</h3>
          <p>
            A web application developed using Python and Flask to manage tourism
            services such as destinations, bookings, and user management with
            MySQL database support.
          </p>
          <p className="tech">Python • Flask • MySQL</p>
        </div>

      </div>
    </section>
  );
}

export default Projects;
