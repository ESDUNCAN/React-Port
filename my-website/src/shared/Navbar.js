import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../images/logo2.png";

function Navbar() {
  let navigate = useNavigate();
  const resume =
    "https://resume.creddle.io/resume/cfbzubtuc3r?fbclid=IwAR3mn-8000nlPetFSaIK0rWo4NC0IF4aKZYjlga6cOpTVRNADLwqQlU_AqY";
  const github = "https://github.com/ESDUNCAN";
  const linkedin = "https://www.linkedin.com/in/eric-duncan-103554243/";

  return (
    <div className={`${styles.navbar}`}>
      <div className={`${styles.container}`}>
        <div>
          <img
            onClick={() => navigate("/")}
            className={`${styles.logo}`}
            src={logo}
            alt="logo"
          />
        </div>
        <ul className={`${styles.links}`}>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <a
              title="Lance's Résumé"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Résumé
            </a>{" "}
          </li>
          <li className={`${styles.github}`}>
            <a
              title="Eric's GitHub"
              href={github}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fa-brands fa-github fa-xl"></i>{" "}
            </a>{" "}
          </li>
          <li className={`${styles.linkedin}`}>
            <a
              title="Eric's Linkedin"
              href={linkedin}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <i className="fa-brands fa-linkedin-in fa-xl"></i>{" "}
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
