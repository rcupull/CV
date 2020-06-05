import React, { Fragment } from "react";
import Topic from "./topic";
import SubTopic from "./sub_topic";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

export interface EducationsProps {}

const Educations: React.SFC<EducationsProps> = () => {
  return (
    <Fragment>
      <Topic title="Education" icon={faGraduationCap} />
      <SubTopic text="2007-2012 Telecommunication and Electronic Engineering" />
      <ul>
        <li>
          Communications systems, networking, technologies and Internet
          protocols.
        </li>
        <li>Analogic and digital electronic </li>
        <li>
          Microcontroller systems. Firmware programing in assembler and C
          languaje
        </li>
        <li>Field Programmable Gate Array(FPGA). Programming in VHDL</li>
        <li>
          Digital signals processing, artificial intelligence, patter
          recognition.
        </li>
      </ul>
    </Fragment>
  );
};

export default Educations;
