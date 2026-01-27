import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { meta } from "../../content_option";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../../content_option";

export const ContactUs = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{meta.title} | Contact</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Contact Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg={{ span: 8, offset: 2 }} md={{ span: 10, offset: 1 }}>
            <div className="contact-info">
              <h2 className="mb-4">Jignasha Patil</h2>
              <p className="contact-detail mb-3">
              <strong>Email:</strong>{" "}
                <a href={`mailto:${contactConfig.YOUR_EMAIL}`} className="email-link">
                {contactConfig.YOUR_EMAIL}
              </a>
              </p>
              <p className="contact-detail mb-3">
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE}
                </p>
              <p className="contact-message mt-4">
                {contactConfig.description}
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
