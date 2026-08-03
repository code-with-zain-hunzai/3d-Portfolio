import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { profile } from "../data/profile";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <div className="landing-portrait">
              <img
                src="/images/me1.webp"
                alt={`${profile.firstName} ${profile.lastName}`}
                loading="eager"
                decoding="async"
              />
            </div>
            <h2>Hello! I'm</h2>
            <h1>
              {profile.firstName}
              <br />
              <span>{profile.lastName}</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Full Stack &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Web</div>
              <div className="landing-h2-2">AI</div>
            </h2>
            <h2>
              <div className="landing-h2-info">AI</div>
              <div className="landing-h2-info-1">Web</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
