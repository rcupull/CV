import React, { Fragment } from "react";
import { Row, Col, Container } from "react-bootstrap";
import PersonalInfo from "./personal_information";
import Footer from "./footer";
import Skills from "./skills";
import Abstract from "./abstract";
import Experience from "./experience";
import Educations from "./educations";

export interface LayoutProps {}

const style_col: React.CSSProperties = {
  margin: "2rem 0",
};
const Layout: React.SFC<LayoutProps> = () => {
  return (
    <Fragment>
      <PersonalInfo />
      <Container>
        <Row>
          <Col md={6} style={style_col}>
            <Container>
              <Abstract />
              <Skills />
              <Educations />
            </Container>
          </Col>
          <Col md={6} style={style_col}>
            <Container>
              <Experience />
            </Container>
          </Col>
        </Row>
      </Container>

      <Footer />
    </Fragment>
  );
};

export default Layout;
