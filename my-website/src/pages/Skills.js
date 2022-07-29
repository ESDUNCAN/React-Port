import styles from "./Home.module.css";
import { Pill } from "../styles";

function Skills(props) {
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
        <div>
          {user.skills.map((skill) => (
            <Pill key={skill.name}>{skill.name}</Pill>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
