import { EducationItem, Institution, Degree } from "../educationStyles";
import { Pill, Paragraph, SectionTitle } from "../styles";
import styles from "./Work.module.css";

function Work(props) {
  function toMonthName(monthNumber) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString("en-US", {
      month: "long",
    });
  }

  const { user } = props;

  return (
    <div className={`${styles.container}`}>
      <div>
        <SectionTitle>
          <h1>Experience</h1>
        </SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <EducationItem key={i}>
              <Institution>{work.name}</Institution>
              <div>
                <Degree>{work.position},</Degree>{" "}
                <span>
                  {toMonthName(work.start.month)} {work.start.year} -{" "}
                  {toMonthName(work.end.month)} {work.end.year}
                </span>
              </div>
              <Paragraph>{work.summary}</Paragraph>
            </EducationItem>
          ))}
        </ul>
      </div>
      <div>
        <SectionTitle>
          <h1>Education</h1>
        </SectionTitle>
        <ul>
          {user.education.map((education, i) => (
            <EducationItem key={i}>
              <Institution>{education.institution}</Institution>
              <div>
                <Degree>
                  {education.studyType}, {education.area},
                </Degree>{" "}
                <span>
                  {toMonthName(education.start.month)} {education.start.year} -{" "}
                  {toMonthName(education.end.month)} {education.end.year}
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

export default Work;
