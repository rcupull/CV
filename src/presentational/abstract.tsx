import React, { Fragment } from "react";
import Topic from "./topic";

import { faUser } from "@fortawesome/free-solid-svg-icons";

// import {} from "../styles/js/all.js";

// import "../styles/css/fontawesome.css";
// import "../styles/css/solid.css";

export interface AbstractProps {}

const Abstract: React.SFC<AbstractProps> = () => {
  return (
    <Fragment>
      <Topic title="Abstract" icon={faUser} />
      <ul>
        <li>3 years of experience in university teaching</li>
        <li>
          4 years of experience in development of biometric pattern recognition
          for scientifics applications
        </li>
        <li>
          2 years of experience in PIC microcontroller firmware development
        </li>
        <li>1+ year of experience in web applications development</li>
        <li>Good command of language Matlab, C, JavaScript and Typescript</li>
        <li>
          Good command of HTML, CCS, Bootstrap, ReactJS, NodeJS, MySQL, MongoDB
        </li>
        <li>Experience with versions controller Git</li>
      </ul>
    </Fragment>
  );
};

export default Abstract;
