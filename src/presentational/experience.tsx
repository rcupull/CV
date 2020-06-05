import React, { Fragment } from "react";
import Topic from "./topic";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import SubTopic from "./sub_topic";
export interface ProjectProps {
  text: string;
  urls?: string[];
  tecnnologies: string;
}

const style_card_project: React.CSSProperties = {
  marginBottom: "1rem",
  listStyleType: "square",
};
const Project: React.SFC<ProjectProps> = ({ text, tecnnologies, urls }) => {
  const render_links = () => {
    if (typeof urls === "undefined") return null;

    return (
      <Fragment>
        {urls.map((url, id) => (
          <Fragment key={id}>
            <a href={url}>{url}</a>
            <br />
          </Fragment>
        ))}
      </Fragment>
    );
  };

  return (
    <div style={style_card_project}>
      <li>{text}</li>
      {render_links()}
      <u>{"Technologies:"}</u> {tecnnologies}
    </div>
  );
};

export interface ExperienceProps {}

const Experience: React.SFC<ExperienceProps> = () => {
  return (
    <Fragment>
      <Topic title="Experiencies" icon={faBookOpen} />
      <SubTopic text="2019-2020 Freelance Web Developer" />
      {/* {render_subtitle("2019-2020 Freelance Web Developer")} */}
      <Project
        text="Web site development for Cuban touristic card sale in Switzerland. Fronted developer in project for private enterprise. 2019"
        tecnnologies="HTML, CCS-Bootstrap, JavaScript"
        urls={["http://kuba-visum.ch/"]}
      />
      <Project
        text="Web site development for promotion and touristic service contracting for Madeira Island. Fronted developer in project for private enterprise. 2020"
        tecnnologies="HTML, CCS-Bootstrap, JavaScript"
        urls={["http://profil-madeira-reisen.de/"]}
      />
      <Project
        text="Fronted developer in react projects for self-study"
        tecnnologies="HTML, ReactJS, Typescript, CCS-Bootstrap"
        urls={[
          "https://rcupull.github.io/themoviedb",
          "https://rcupull.github.io/student-register",
        ]}
      />
      <Project
        text="Web site development with ReactJS, Node and MySQL for design service contracting. Full stack developer in project for private enterprise. 2020 "
        tecnnologies="HTML, ReactJS, Typescript, CCS-Bootstrap, NodeJS-Express, MySQL"
      />
      {/* // */}
      <SubTopic text="2017-2019 Freelance Microcontroller Firmware Developer" />
      <Project
        text="Full stack developer and designer of a Computer Numerical Control (CNC). Project for private enterprise. Presentation in 3rd Conference of Mechanic-Electric-Industrial Engineering (JIMEI 2017)"
        tecnnologies="C, Assembler, C# "
      />
      <Project
        text="Full stack developer of firmware for controller boards with PIC microcontrollers. Construction of smart houses systems, alarms and sensors. Project for private enterprise. 2018-2019"
        tecnnologies="C, Assembler "
      />
      {/* // */}
      <SubTopic text="2015-2017 Researcher and development (Specialist in Informatics Sciences)" />
      <Project
        text="Advanced Technologies Application Center (CENATAV), Havana, Cuba. To research about pattern recognition algorithms applied in latent palmprint identification. Scientifics developer of artificial intelligence algorithms"
        tecnnologies="Matlab, C, Phyton and Bach "
      />
      {/* // */}
      <SubTopic text="2012-2015 Telecommunication Engineering Professor" />
      <Project
        text="Full stack in the project Extraction and Processing of fingerprint features for automatic recognition of people. Project of GAPIS team.  University of Orient. 2012-2015"
        tecnnologies="Matlab and C"
      />
    </Fragment>
  );
};

export default Experience;
