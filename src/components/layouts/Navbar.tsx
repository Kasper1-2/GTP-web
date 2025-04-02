import { useEffect, useState } from "react";
import {
  FaBars,
  FaDiscord,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import "./Navbar.css";
import logoImg from "../../assets/GTP-logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const section = document.getElementById("home");
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setScrolled(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.5,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "in-home"}`}>
      <div className="navbar-inner">
        <div className="navbar-left">
          <div className="logo-wrapper">
            {scrolled ? (
              <a href="#home" className="navbar-logo-link">
                <img src={logoImg} alt="GTP Logo" className="navbar-logo-img" />
              </a>
            ) : (
              <div className="navbar-socials">
                <a
                  href="https://www.youtube.com/@GranTurismoPanama"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/gt_panama/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.facebook.com/gtpanama/?locale=es_LA"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://discord.gg/jePnErWt"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaDiscord />
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="navbar-center">
          <nav className="navbar-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#drivers">Drivers</a>
          </nav>
        </div>

        <div className="navbar-hamburger">
          <button onClick={() => setMenuOpen(true)}>
            <FaBars />
          </button>
        </div>
      </div>

      {menuOpen && <MobileMenu onClose={() => setMenuOpen(false)} />}
    </header>
  );
};

export default Navbar;
