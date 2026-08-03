import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { links, linkedinHandle, profile } from "../data/profile";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href={`mailto:${profile.email}`}
                data-cursor="disable"
              >
                {profile.email}
              </a>
            </p>
            <p>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                {linkedinHandle}
              </a>
            </p>
            <h4>Education</h4>
            <p>
              BS Software Engineering, Virtual University of Pakistan —
              2022–2026
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href={links.github}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href={links.fiverr}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Fiverr <MdArrowOutward />
            </a>
            <a
              href={links.upwork}
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Upwork <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Zain ul Abbdin</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
