import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";
import { profile } from "../data/profile";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const navItems = [
  { index: "01", label: "ABOUT", href: "#about" },
  { index: "02", label: "WORK", href: "#work" },
  { index: "03", label: "CONTACT", href: "#contact" },
];

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header a[data-href]");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);
  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-logo" data-cursor="disable">
          <span className="logo-bracket">&lt;/</span>
          <span className="logo-name">{profile.logoText}</span>
          <span className="logo-bracket">&gt;</span>
          <span className="logo-caret"></span>
        </a>
        <nav className="navbar-pill">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a data-href={item.href} href={item.href}>
                  <span className="nav-index">{item.index}</span>
                  <HoverLinks text={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          data-href="#contact"
          href="#contact"
          className="navbar-cta"
          data-cursor="disable"
        >
          <span className="navbar-cta-dot"></span>
          Let&apos;s Talk
        </a>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;
