import styles from "./Projects.module.css";
import { Pill } from "../styles";
import { ProjectItem, SkillContainer, ProjectTitle } from "../projectStyles";
function Projects(props) {
  const { user } = props;

  return (
    <div className={`${styles.container}`}>
      <ul>
        {user.projects.map((project, i) => (
          <ProjectItem key={i}>
            <ProjectTitle>{project.displayName}</ProjectTitle>
            <p>{project.summary}</p>
            <a href={`${project.website}`} target="_blank">
              GitHub<i class="fa fa-github"></i>
            </a>
            <SkillContainer>
              {[...project.languages, ...project.libraries].map((item, j) => (
                <Pill key={j}>{item}</Pill>
              ))}
            </SkillContainer>
          </ProjectItem>
        ))}
      </ul>
    </div>
  );
}

export default Projects;
