import {
  MdArrowOutward,
  MdCopyright,
  MdMailOutline,
  MdOutlinePhone,
  MdOutlineLocationOn,
} from "react-icons/md";
import "./styles/Contact.css";
import { links, profile } from "../data/profile";

const socials = [
  { label: "GitHub", handle: "code-with-zain-hunzai", url: links.github },
  { label: "LinkedIn", handle: "zain-ul-abbdin", url: links.linkedin },
  { label: "Fiverr", handle: "zainulabbdin20", url: links.fiverr },
  { label: "Upwork", handle: "Zain ul Abbdin", url: links.upwork },
];

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <span className="contact-overline">// Contact</span>
        <h3 className="contact-headline">
          Let’s build something <span>great</span> together.
        </h3>
        <p className="contact-sub">
          Have a project in mind, or just want to say hi? My inbox is always
          open.
        </p>

        <div className="contact-cta-row">
          <a
            href={`mailto:${profile.email}`}
            className="contact-cta"
            data-cursor="disable"
          >
            <MdMailOutline />
            {profile.email}
            <MdArrowOutward className="contact-cta-arrow" />
          </a>
          <div className="contact-meta">
            <span>
              <MdOutlinePhone /> {profile.phone}
            </span>
            <span>
              <MdOutlineLocationOn /> {profile.location}
            </span>
          </div>
        </div>

        <div className="contact-socials">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
              data-cursor="disable"
            >
              <div className="contact-card-text">
                <span className="contact-card-label">{s.label}</span>
                <span className="contact-card-handle">{s.handle}</span>
              </div>
              <MdArrowOutward className="contact-card-arrow" />
            </a>
          ))}
        </div>

        <div className="contact-footer">
          <p className="contact-edu">
            BS Software Engineering — Virtual University of Pakistan, 2022–2026
          </p>
          <p className="contact-credit">
            Designed &amp; Developed by <span>Zain ul Abbdin</span>
          </p>
          <p className="contact-copy">
            <MdCopyright /> 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
