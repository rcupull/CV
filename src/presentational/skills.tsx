import React, { Fragment } from "react";
import { ProgressBar, Row, Col } from "react-bootstrap";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import Topic from "./topic";
import SubTopic from "./sub_topic";
type TSkill = { title: string; percent: number };

export interface SkillProps {
  skill: TSkill;
}

const Skill: React.SFC<SkillProps> = ({ skill }) => {
  return (
    <Row>
      <Col>{skill.title}</Col>
      <Col>
        <ProgressBar
          style={{ margin: "0.3rem" }}
          variant="info"
          now={skill.percent}
        />
      </Col>
    </Row>
  );
};

/////////////////////////////////////////////////////////

const webDeveloperSkillsArray: TSkill[] = [
  { title: "HTML", percent: 80 },
  { title: "CSS", percent: 65 },
  { title: "Typescript", percent: 90 },
  { title: "ReactJS", percent: 85 },
  { title: "Redux", percent: 65 },
  { title: "MongoDB", percent: 70 },
  { title: "MySQL", percent: 60 },
  { title: "NodeJS", percent: 55 },
  { title: "Git", percent: 70 },
];
const additionalSkillsArray: TSkill[] = [
  { title: "Matlab", percent: 90 },
  { title: "C", percent: 85 },
  { title: "Python", percent: 30 },
  { title: "Office Suite", percent: 90 },
  { title: "Latex", percent: 70 },
  { title: "Microcontroller Firmware", percent: 80 },
  { title: "Electronics", percent: 70 },
  { title: "Networking", percent: 60 },
  { title: "Pattern Recognition", percent: 30 },
  { title: "Digital Signals Processing", percent: 65 },
];

export interface SkillsProps {}

const Skills: React.SFC<SkillsProps> = () => {
  return (
    <Fragment>
      <Topic title={"Skills"} icon={faCheck} />
      <SubTopic text="Web developer skills" />

      {webDeveloperSkillsArray.map((skill, id) => (
        <Skill key={id} skill={skill} />
      ))}
      <SubTopic text="Additional skills" />
      {additionalSkillsArray.map((skill, id) => (
        <Skill key={id} skill={skill} />
      ))}
    </Fragment>
  );
};

export default Skills;
