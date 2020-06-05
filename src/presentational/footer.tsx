import React from "react";

const style_body: React.CSSProperties = {
  backgroundColor: "gray",
  width: "100%",
  height: "5rem",
};
export interface FooterProps {}

const Footer: React.SFC<FooterProps> = () => {
  return <div style={style_body}></div>;
};

export default Footer;
