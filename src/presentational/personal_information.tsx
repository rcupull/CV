import React from "react";
import { Image } from "react-bootstrap";
import ProfileImage from "../styles/profile.jpg";
export interface PersonalInfoProps {}

const style_body: React.CSSProperties = {
  backgroundColor: "gray",
  width: "100%",
  height: "20rem",
};
const style_image_div: React.CSSProperties = {
  position: "relative",
  top: "20%",
  height: "60%",
  textAlign: "center",
};
const style_image: React.CSSProperties = {
  top: "20%",
  height: "100%",
};
const style_name_div: React.CSSProperties = {
  backgroundColor: "white",
  height: "2rem",
  position: "relative",
  top: "20%",
  textAlign: "center",
};
const style_name: React.CSSProperties = {
  display: "inline",
  position: "relative",
  fontSize: "3rem",
  padding: "0 0.7rem",
  top: "-1.2rem",
  backgroundColor: "white",
  borderRadius: "1.5rem",
  color: "#17a2b8",
};
const style_data: React.CSSProperties = {
  textAlign: "center",
  bottom: "0.5rem",
  padding: "0.5rem 0",
};

const PersonalInfo: React.SFC<PersonalInfoProps> = () => {
  return (
    <div>
      <div style={style_body}>
        <div style={style_image_div}>
          <Image style={style_image} src={ProfileImage} roundedCircle />
        </div>
        <div style={style_name_div}>
          <div style={style_name}>Rodobaldo Cupull</div>
        </div>
      </div>
      <div style={style_data}>
        Santos Suárez Street, #65, apartment 9, Havana, 10500 | +53-54811429,
        +53-76387640 | <a href="mailto:rcupull@gmail.com">rcupull@gmail.com</a>
      </div>
    </div>
  );
};

export default PersonalInfo;
