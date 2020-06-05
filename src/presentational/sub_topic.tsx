import React from "react";

const style_subtitle: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "black",
  padding: "0.5rem 0",
};

export interface SubTopicProps {
  text: string;
}
const SubTopic: React.SFC<SubTopicProps> = ({ text }) => {
  return (
    <div style={style_subtitle}>
      <b>{text}</b>
    </div>
  );
};

export default SubTopic;
