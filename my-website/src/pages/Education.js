import { EducationItem, Institution, Degree } from "../educationStyles";
import { Pill, Paragraph, SectionTitle } from "../styles";
import styles from "./Education.module.css";

function Education(props) {
  const { user } = props;

  return (
    <div className={`${styles.container}`}>
      <div>
        <SectionTitle>Education</SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.position}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area}
                </Degree>{" "}
                <span> &sdot; </span>
                <span>
                  {education.start.year} to {education.end.year}
                </span>
              </div>
              <Paragraph>
                {education.description.replace("\n\n", "\n")}
              </Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Education;
