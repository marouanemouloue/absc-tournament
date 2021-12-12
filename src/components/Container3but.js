import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";
import logo from "../assets/img/brand/snookerLogo.png"
const Container3but = (props) => {
    return (
        <div>
  <div className="position-relative">
    <section className="section section-hero section-shaped">
  
      <Container className="shape-container d-flex align-items-center py-lg">
        <div className="col">
          <Row className="align-items-center justify-content-center">
            <Col className="text-center">
              <img
                alt="..."
                className="img-fluid"
                src={logo}
                style={{ width: "200px" }}
              />
           
              {/* -------------------------------------------------------------------------------------------------------------- */}
              <div className=" mt-5">
                <h3 style={{ color: "white" }}>{props.title}</h3>
              </div>
              <div className="btn-wrapper mt-5 ">
                <Button
                  className="btn-white mb-3 mb-10"
                  color="default"
                  href={props.linkbut1}
                  size="lg"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-user" />
                  </span>
                  <span className="btn-inner--text">{props.but1}</span>
                </Button>{" "}
                <Button
                  className="btn-white mb-3 mb-10"
                  color="default"
                  href={props.linkbut2}
                  size="lg"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-user" />
                  </span>
                  <span className="btn-inner--text">{props.but2}</span>
                </Button>{" "}
                <Button
                  className="btn-white mb-3 mb-10"
                  color="default"
                  href={props.linkbut3}
                  size="lg"
                >
                  <span className="btn-inner--icon mr-1">
                    <i className="fa fa-user" />
                  </span>
                  <span className="btn-inner--text">{props.but3}</span>
                </Button>{" "}
              </div>

              
            </Col>
          </Row>
        </div>
      </Container>
      {/* SVG separator */}
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  </div>
</div>
    )
}

export default Container3but
