import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";
import logo from "assets/img/brand/snookerLogo.png"


const Ranking = () => {
    return (
        <div>
             <div className="position-relative" >
          {/* Hero for FREE version */}
          <section className="section section-hero section-shaped">
           
            <Container className="shape-container  py-lg">
              <div className="col">
                <Row className="align-items-center justify-content-center">
                  <Col className="text-center" >
                    <img
                      alt="..."
                      className="img-fluid"
                      src={(logo)}
                      style={{ width: "200px" }}
                    />
                     <div className="btn-wrapper mt-5">
                      <Button
                        className="btn-white mb-3 mb-10"
                        color="default"
                        href="/MenRanking"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-user" />
                        </span>
                        <span className="btn-inner--text">MEN</span>
                      </Button>{" "}
                      <Button
                        className="btn-white mb-3 mb-10"
                        color="default"
                        href="/WomenRanking"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-user" />
                        </span>
                        <span className="btn-inner--text">WOMEN</span>
                      </Button>{" "}
                      <Button
                        className="btn-white mb-3 mb-10"
                        color="default"
                        href="/MastersRanking"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-user" />
                        </span>
                        <span className="btn-inner--text">MASTERS</span>
                      </Button>{" "}
                      <Button
                        className="btn-white mb-3 mb-10"
                        color="default"
                        href="/TeamsRanking"
                        size="lg"
                      >
                        <span className="btn-inner--icon mr-1">
                          <i className="fa fa-users" />
                        </span>
                        <span className="btn-inner--text">TEAMS</span>
                      </Button>{" "}
                    </div>
        {/* -------------------------------------------------------------------------------------------------------------- */}
        
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
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </div>
        </div>
    )
}

export default Ranking
