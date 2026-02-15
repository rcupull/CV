import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Stack,
  ProgressBar,
  Button,
  ListGroup,
} from "react-bootstrap";

const profile = {
  name: "Rodobaldo Cupull",
  title: "Software Architect | React Frontend | Full Stack with Node.js",
  location: "Havana, Cuba",
  email: "rcupull@gmail.com",
  phone: "+53 54811429",
  links: [
    { label: "GitHub", href: "https://github.com/rcupull" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/rodobaldo-cupull-471935191" },
  ],
  highlights: [
    "Software Architect with 6+ years building scalable web applications using React and Node.js.",
    "Designed and led a microservices based architecture to improve scalability and maintainability.",
    "Strong experience planning technical roadmaps, issues, and task execution to achieve product goals.",
    "Applied AI tools for chatbot development, workflow optimization, and agile acceleration.",
  ],
};


const skills = {
  primary: [
    { name: "React", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "JavaScript", level: 85 },
    { name: "Node.js", level: 78 },
    { name: "Express", level: 72 },
    { name: "MongoDB", level: 70 },
    { name: "Redux", level: 75 },
    { name: "HTML/CSS", level: 85 },
  ],
  additional: [
    "Next.js",
    "Storybook",
    "Styled Components",
    "Testing, Enzyme",
    "Git",
    "C, Matlab",
  ],
};

const experience = [
  {
    period: "2024 to 2025",
    role: "Software Architect, Full Stack Developer, CTO",
    company: "El Trapiche Marketplace, Cuba",
    bullets: [
      "Designed and implemented a microservices architecture to improve scalability, modularity, and long term maintainability.",
      "Led system architecture decisions across frontend and backend using React, Node.js, Express, and MongoDB.",
      "Planned technical roadmaps, defined issues, and coordinated task execution to meet product milestones.",
      "Integrated AI driven workflows to accelerate development, including chatbot implementation and task planning automation.",
      "Owned end to end delivery, from infrastructure decisions to production deployment.",
    ],
    links: [
      { label: "Live site", href: "https://tienda.eltrapichecubiche.com/" },
    ],
    tech: [
      "TypeScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Microservices",
      "AI Integration",
      "Vike",
    ],
  },
  {
    period: "2020 to 2024",
    role: "Web Developer, React Project Manager",
    company: "KODSai, Mexico",
    bullets: [
      "Led frontend architecture and feature development using React and TypeScript.",
      "Improved state management patterns and UI scalability across the platform.",
      "Planned sprints, managed issues, and coordinated development workflows.",
      "Collaborated with stakeholders to align technical execution with business objectives.",
    ],
    links: [{ label: "kods.ai", href: "https://www.kods.ai/" }],
    tech: ["React", "TypeScript", "Redux", "Styled Components"],
  },
  {
    period: "2020 to 2023",
    role: "Web Developer",
    company: "Mauer Principles Inc, USA",
    bullets: [
      "Built reusable UI components and product features with React and TypeScript.",
      "Contributed to design systems and documentation using Storybook.",
      "Worked with Next.js patterns to support performant pages and routing.",
    ],
    tech: ["React", "TypeScript", "Storybook", "Next.js"],
  },
  {
    period: "2019 to 2020",
    role: "Freelance Web Developer",
    company: "Client projects, Europe",
    bullets: [
      "Delivered marketing websites for tourism and service businesses.",
      "Built self study React apps with authentication, private routes, and Redux thunk.",
      "Used React Bootstrap to ship responsive layouts quickly.",
    ],
    links: [
      {
        label: "themoviedb demo",
        href: "https://rcupull.github.io/themoviedb",
      },
      {
        label: "student register demo",
        href: "https://rcupull.github.io/student-register",
      },
    ],
    tech: ["React", "TypeScript", "Redux Thunk", "React Bootstrap"],
  },
];

const education = [
  {
    period: "2007 to 2012",
    program: "Telecommunication and Electronics Engineer",
    school: "Universidad de Oriente, Santiago de Cuba",
    bullets: [
      "Digital systems with microcontrollers and FPGA.",
      "Programming with assembler, C, C#, and VHDL.",
      "Networking, communication systems, and internet protocols.",
    ],
  },
];

const languages = [
  { name: "Spanish", level: "Native" },
  { name: "English", level: "Intermediate" },
];

function TagRow({ items }) {
  return (
    <Stack direction="horizontal" gap={2} className="flex-wrap">
      {items.map((t) => (
        <Badge key={t} bg="secondary" className="fw-normal">
          {t}
        </Badge>
      ))}
    </Stack>
  );
}

export default function App() {
  return (
    <div style={{ background: "#f6f7fb", minHeight: "100vh" }}>
      <div
        style={{
          background:
            "linear-gradient(180deg, #2f3b52 0%, #2f3b52 55%, #f6f7fb 55%, #f6f7fb 100%)",
          paddingTop: 36,
          paddingBottom: 18,
        }}
      >
        <Container>
          <Card className="shadow-sm border-0">
            <Card.Body className="p-4">
              <Row className="align-items-center g-4">
                <Col xs="auto">
                  <div
                    style={{
                      width: 92,
                      height: 92,
                      borderRadius: "50%",
                      background: "#e9edf5",
                      display: "grid",
                      placeItems: "center",
                      fontWeight: 700,
                      fontSize: 28,
                      color: "#2f3b52",
                    }}
                  >
                    <img
                     src={`${import.meta.env.BASE_URL}coffee.jpg`}
                      alt={profile.name}
                      style={{
                        width: 92,
                        height: 92,
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </Col>

                <Col>
                  <h1 className="mb-1" style={{ fontSize: 30 }}>
                    {profile.name}
                  </h1>
                  <div className="text-muted mb-3">{profile.title}</div>

                  <Stack direction="horizontal" gap={2} className="flex-wrap">
                    <Badge bg="light" text="dark" className="border">
                      {profile.location}
                    </Badge>
                    <Badge bg="light" text="dark" className="border">
                      {profile.email}
                    </Badge>
                    <Badge bg="light" text="dark" className="border">
                      {profile.phone}
                    </Badge>
                  </Stack>

                  <div className="mt-3 d-flex flex-wrap gap-2">
                    {profile.links.map((l) => (
                      <Button
                        key={l.label}
                        size="sm"
                        variant="outline-primary"
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        disabled={l.href === "#"}
                        title={l.href === "#" ? "Add your URL here" : undefined}
                      >
                        {l.label}
                      </Button>
                    ))}
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>

      <Container className="pb-5">
        <Row className="g-4">
          <Col lg={4}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <h5 className="mb-3">Professional Summary</h5>
                <ul className="mb-0">
                  {profile.highlights.map((h) => (
                    <li key={h} className="mb-2">
                      {h}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>

            <Card className="shadow-sm border-0 mt-4">
              <Card.Body className="p-4">
                <h5 className="mb-3">Core Skills</h5>
                <div className="d-grid gap-3">
                  {skills.primary.map((s) => (
                    <div key={s.name}>
                      <div className="d-flex justify-content-between mb-1">
                        <span className="fw-semibold">{s.name}</span>
                        <span className="text-muted small">{s.level}%</span>
                      </div>
                      <ProgressBar now={s.level} />
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm border-0 mt-4">
              <Card.Body className="p-4">
                <h5 className="mb-3">Additional</h5>
                <TagRow items={skills.additional} />
              </Card.Body>
            </Card>

            <Card className="shadow-sm border-0 mt-4">
              <Card.Body className="p-4">
                <h5 className="mb-3">Languages</h5>
                <ListGroup variant="flush">
                  {languages.map((l) => (
                    <ListGroup.Item key={l.name} className="px-0">
                      <div className="d-flex justify-content-between">
                        <span className="fw-semibold">{l.name}</span>
                        <span className="text-muted">{l.level}</span>
                      </div>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col lg={8}>
            <Card className="shadow-sm border-0">
              <Card.Body className="p-4">
                <h4 className="mb-3">Experience</h4>

                <div className="d-grid gap-4">
                  {experience.map((job) => (
                    <div key={`${job.period}-${job.role}`}>
                      <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                        <div>
                          <div className="fw-bold" style={{ fontSize: 18 }}>
                            {job.role}
                          </div>
                          <div className="text-muted">{job.company}</div>
                        </div>
                        <div className="text-muted">{job.period}</div>
                      </div>

                      <ul className="mt-2 mb-2">
                        {job.bullets.map((b) => (
                          <li key={b} className="mb-2">
                            {b}
                          </li>
                        ))}
                      </ul>

                      {job.links?.length ? (
                        <div className="mb-2 d-flex flex-wrap gap-2">
                          {job.links.map((l) => (
                            <Button
                              key={l.href}
                              size="sm"
                              variant="outline-secondary"
                              href={l.href}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {l.label}
                            </Button>
                          ))}
                        </div>
                      ) : null}

                      {job.tech?.length ? <TagRow items={job.tech} /> : null}

                      <hr className="mt-4" />
                    </div>
                  ))}
                </div>
              </Card.Body>
            </Card>

            <Card className="shadow-sm border-0 mt-4">
              <Card.Body className="p-4">
                <h4 className="mb-3">Education</h4>
                {education.map((e) => (
                  <div key={e.program}>
                    <div className="d-flex flex-column flex-md-row justify-content-between gap-2">
                      <div>
                        <div className="fw-bold">{e.program}</div>
                        <div className="text-muted">{e.school}</div>
                      </div>
                      <div className="text-muted">{e.period}</div>
                    </div>

                    <ul className="mt-2 mb-0">
                      {e.bullets.map((b) => (
                        <li key={b} className="mb-2">
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </Card.Body>
            </Card>

            <Card className="shadow-sm border-0 mt-4">
              <Card.Body className="p-4">
                <h4 className="mb-3">Focus</h4>
                <p className="mb-0">
                  React frontend roles where I can own UI architecture,
                  component quality, and performance. Open to full stack roles
                  using Node.js, especially product teams that ship iteratively
                  and care about clean, scalable code.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <div className="text-center text-muted small mt-4 pb-3">
          Built with Vite, React, and React Bootstrap.
        </div>
      </Container>
    </div>
  );
}
