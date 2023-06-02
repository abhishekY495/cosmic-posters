import React from "react";
import { Link } from "react-router-dom";

import githubIcon from "../../assets/footer/github-icon.svg";
import linkedinIcon from "../../assets/footer/linkedin-icon.svg";
import twitterIcon from "../../assets/footer/twitter-icon.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <footer class="social-links">
      <Link to="https://github.com/abhishekY495" target="_blank">
        <img class="social-icons" src={githubIcon} alt="github" />
      </Link>
      <Link to="https://twitter.com/abhishekY495" target="_blank">
        <img class="social-icons" src={twitterIcon} alt="twitter" />
      </Link>
      <Link to="https://www.linkedin.com/in/abhishekY495" target="_blank">
        <img class="social-icons" src={linkedinIcon} alt="linkedin" />
      </Link>
    </footer>
  );
}
