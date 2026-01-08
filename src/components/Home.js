import photo from "../assets/photo.jpeg";

function Home() {
  return (
    <section className="home" id="home">
      {/* LEFT CONTENT */}
      <div className="home-content">
        <h1>
          Hello, I’m{" "}
          <span className="name">Kakaraparthi Yesaswani Kritica</span>
        </h1>

        <div className="badges">
          <span className="badge">Frontend Developer</span>
          <span className="badge">Python • Flask</span>
        </div>

        <p>
          Frontend Developer passionate about building clean, responsive,
          and user-friendly web applications using React.
        </p>

        <div className="home-buttons">
          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            View Resume
          </a>

          <a href="#projects" className="btn btn-outline">
            View Projects
          </a>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="home-image">
        <img src={photo} alt="Profile" />
      </div>
    </section>
  );
}

export default Home;
