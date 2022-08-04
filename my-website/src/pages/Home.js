import React from "react";
import styles from "./Home.module.css";
import { Pill } from "../styles/skillStyles";

function Home(props) {
  const { user } = props;

  return (
    <div className={`${styles.container}`}>
      <div>
        <img
          className={`${styles.img}`}
          src={user.basics.image}
          alt="avatar"
        ></img>
      </div>
      <div className={`${styles.basics}`}>
        <h2>{user.basics.name}</h2>
        <h4 className={`${styles.handle}`}>
          <a
            href={`https://gitconnected.com/${user.basics.username}`}
            target="_blank"
            rel="noreferrer noopener"
          >
            @{user.basics.username}
          </a>
        </h4>
        <p>
          {user.basics.label} from {user.basics.region}
        </p>
        {/* <p>{user.basics.yearsOfExperience} year of experience as a developer</p> */}
        <p>{user.basics.headline}</p>
        <p>{user.basics.summary}</p>
        <a href="https://github.com/ESDUNCAN/"> Github |</a>
        <a href="https://www.linkedin.com/in/eric-duncan-103554243/">
          {" "}
          LinkedIn{" "}
        </a>
        <h2>Skills </h2>
        <div>
          {user.skills.map((skill) => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
