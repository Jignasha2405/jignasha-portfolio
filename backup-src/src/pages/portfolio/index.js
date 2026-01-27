import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { whatIDo, testingTypes, projects, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        
        {/* What I Do Section - Centered */}
        <Row className="sec_sp mb-5">
          <Col lg={{ span: 10, offset: 1 }} md={{ span: 10, offset: 1 }}>
            <div className="what-i-do-centered text-center">
              <h2 className="what-i-do-heading mb-3">{whatIDo.heading}</h2>
              <p className="what-i-do-description">{whatIDo.description}</p>
            </div>
          </Col>
        </Row>

        {/* Testing Types - Simple List */}
        <Row className="sec_sp mb-5">
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <div className="testing-types-list">
              {testingTypes.map((testing, i) => {
            return (
                  <div key={i} className="testing-type-item">
                    <h4 className="testing-type-title">{testing.title}</h4>
                    <p className="testing-type-description">{testing.description}</p>
                    {i < testingTypes.length - 1 && <hr className="testing-type-separator" />}
              </div>
            );
          })}
        </div>
          </Col>
        </Row>

        {/* Projects Section */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Projects</h3>
          </Col>
          <Col lg="7">
            {projects.map((project, i) => {
              return (
                <div key={i} className="project_item mb-5">
                  <div className="project_category mb-2">
                    <span className="badge bg-secondary">{project.category}</span>
                  </div>
                  <h4 className="project_title mb-2">{project.title}</h4>
                  <p className="project_date text-muted mb-3">{project.date}</p>
                  <p className="project_description mb-3">{project.description}</p>
                  {project.link && project.link !== "#" && (
                    <a href={project.link} className="project_link">View Project</a>
                  )}
                  {i < projects.length - 1 && <hr className="my-4" />}
                </div>
              );
            })}
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
