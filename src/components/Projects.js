import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import biolight from "../assets/img/projects/biolight.png";
import biouvc from "../assets/img/projects/biouvc.png";
import biouvcca from "../assets/img/projects/biouvcca.png";
import maktub from "../assets/img/projects/maktub.png";
import nataliaGajardo from "../assets/img/projects/nataliagajardo.png";
import sexShopConfidence from "../assets/img/projects/sexshopconfidence.png";
import ttsalach from "../assets/img/projects/ttsalach.png";
import challenge from "../assets/img/projects/challenge.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Biolight National Website",
      description: "WordPress",
      imgUrl: biolight,
      url: "https://biolight.cl",
    },
    {
      title: "BioUVC Landing Page",
      description: "HTML / CSS / JS",
      imgUrl: biouvc,
      url: "https://biouvc.com",
    },
    {
      title: "BioUVC English Website",
      description: "WordPress",
      imgUrl: biouvcca,
      url: "https://biouvc.com/ca",
    },
    {
      title: "E-Commerce",
      description: "Shopify",
      imgUrl: maktub,
      url: "https://maktub-store.cl",
    },
    {
      title: "Visual Artist",
      description: "WordPress",
      imgUrl: nataliaGajardo,
      url: "https://nataliagajardo.com",
    },
    {
      title: "E-Commerce",
      description: "WordPress / WooCommerce",
      imgUrl: sexShopConfidence,
      url: "https://sexshopconfidence.cl",
    },
    {
      title: "E-Commerce",
      description: "Shopify",
      imgUrl: ttsalach,
      url: "https://ttsalach.cl",
    },
  ];
  
  const experiments = [
    {
      title: "Country Finder",
      description: "React JS / GraphQL / Apollo Client / Heroku",
      imgUrl: challenge,
      url: "https://pure-reef-44248.herokuapp.com/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here you can see what I've done, What I'm working on, and some "experiments" that I'm doing...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Work</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Learning</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Practice</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Working on it! :D</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Yep!, working on it too! hehe :D, but you can see them on my Github Repos too :)</p>
                      <Row>
                        {
                          experiments.map((experiment, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...experiment}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="backgroundSharp2"></img>
    </section>
  )
}
