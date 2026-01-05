import photo from "../assets/photo.jpeg";

function Home() {
  return (
    <section className="home" id="home">

      {/* LEFT SIDE CONTENT */}
      <div className="home-content">
        <h1>
          Hello, I’m{" "}
          <span className="name">
            Kakaraparthi Yesaswani kritica
          </span>

          <span className="badge">Frontend Developer</span>
          <span className="badge">Python • Flask</span>
        </h1>

        <p>
          Frontend Developer passionate about building clean, responsive,
          and user-friendly web applications using React.
        </p>

        <div className="home-buttons">
  <a
    href="/Resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="btn"
  >
    View Resume
  </a>

  <a href="#projects" className="btn btn-outline">
    View Projects
  </a>
</div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="home-image">
        <img src={photo} alt="Profile" />
      </div>

    </section>
  );
}

export default Home;
