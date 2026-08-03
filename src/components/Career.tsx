import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Kohminds</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Feb 2025 – Feb 2026. Building scalable full-stack applications with
              Next.js, Node.js, Express and PostgreSQL. REST APIs, Prisma ORM and
              authentication with NextAuth.js and JWT; dynamic dashboards with
              real-time updates, built for performance and security.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Frontend Developer</h4>
                <h5>North Nine</h5>
              </div>
              <h3>2023–25</h3>
            </div>
            <p>
              Jun 2023 – Jan 2025. Developed and maintained high-quality,
              responsive user interfaces with HTML, CSS and modern JavaScript
              frameworks. Worked closely with designers and back-end developers
              to deliver polished user experiences end to end.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Trainee — Data Science & AI</h4>
                <h5>NUST</h5>
              </div>
              <h3>2024–25</h3>
            </div>
            <p>
              Jul 2024 – Jan 2025. Statistical analysis, machine learning and
              data visualization using Python, R, SQL, TensorFlow and Tableau —
              deriving insights from large datasets and turning them into
              data-driven solutions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Intern</h4>
                <h5>Uconnect</h5>
              </div>
              <h3>2020–21</h3>
            </div>
            <p>
              Feb 2020 – Jan 2021. Established a strong foundation in front-end
              development through hands-on work with HTML, CSS and JavaScript.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
