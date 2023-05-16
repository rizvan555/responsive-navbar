import { useState } from "react";
import "../css/hamburger.css";

const Hamburger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <h1 id="logo">MyLogo</h1>
      <section
        className={`hamburger ${isOpen ? "lines-rotate" : ""}`}
        onClick={handleClick}
      >
        <span className="lines"></span>
        <span className="lines"></span>
        <span className="lines"></span>
      </section>

      <ul className={`nav-links ${isOpen ? "" : "hide"}`}>
        <li>
          <a href="#" className="links">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Blogs
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Gallery
          </a>
        </li>
        <li>
          <a href="#" className="links">
            About
          </a>
        </li>
        <li>
          <a href="#" className="links">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Hamburger;
