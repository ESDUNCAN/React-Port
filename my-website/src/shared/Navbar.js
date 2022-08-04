import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logo from "../images/logo2.png";

function Navbar() {
  let navigate = useNavigate();
  const resume =
    "https://docs.google.com/document/d/1G9dyQx_u7jH6OUNObHy4PZULUiZcNTZdmTnIz650DUw/edit?usp=sharing";

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
            <NavLink to="mycat">Leia</NavLink>
          </li>
          <li>
            <NavLink to="projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="work">Work</NavLink>
          </li>
          <li>
            <a
              title="Eric's Résumé"
              href={resume}
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Résumé
            </a>{" "}
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Navbar;
