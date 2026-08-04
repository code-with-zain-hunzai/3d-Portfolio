import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">&lt;about /&gt;</h3>
        <p className="para">
          I'm a full stack developer from Hunza, Pakistan, with four years of
          experience building fast, responsive interfaces and the APIs
          behind them. I work day to day in React, Next.js, Node.js and
          PostgreSQL, and I enjoy turning design concepts into products that
          actually ship. Alongside the web work I train in data science and
          machine learning, so I bring a data-driven eye to everything I build.
        </p>
        <div className="about-stats">
          <div className="about-stat">
            <span className="about-stat-num">4+</span>
            <span className="about-stat-label">Years Experience</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">20+</span>
            <span className="about-stat-label">Projects Shipped</span>
          </div>
          <div className="about-stat">
            <span className="about-stat-num">10+</span>
            <span className="about-stat-label">Happy Clients</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
