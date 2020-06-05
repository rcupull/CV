import React from "react";
import { Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

// import FA from "../utils/FA";
// import { IconName } from "../utils/FA_types";

export interface TopicProps {
  icon: IconDefinition;
  title: string;
}
const style_icon: React.CSSProperties = {
  color: "#17a2b8",
  margin: " 0.7rem 1rem",
};
const style_row: React.CSSProperties = {
  borderStyle: "solid none solid none",
  borderWidth: "1px",
  borderColor: "grays",
  margin: "1rem 0",
  fontSize: "1.5rem",
};
const style_title: React.CSSProperties = { padding: "0.2rem 0" };

const Topic: React.SFC<TopicProps> = ({ title, icon }) => {
  return (
    <Row style={style_row}>
      <FontAwesomeIcon icon={icon} style={style_icon} />
      <div style={style_title}>{title}</div>
    </Row>
  );
};

export default Topic;
