import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import MastersPlayersList from 'components/MastersPlayersList'
import { Button, Container, Row, Col } from "reactstrap";
import logo from "assets/img/brand/snookerLogo.png"
const MastersList = () => {
    return (
        <div>
        <DemoNavbar />
        <div className="position-relative" >
      {/* Hero for FREE version */}
      <section className="section section-hero section-shaped">
        {/* Background circles */}
        <div className="shape shape-style-1 shape-default">
          <span className="span-150" />
          <span className="span-50" />
          <span className="span-50" />
          <span className="span-75" />
          <span className="span-100" />
          <span className="span-75" />
          <span className="span-50" />
          <span className="span-100" />
          <span className="span-50" />
          <span className="span-100" />
        </div>
        <Container className="shape-container d-flex align-items-center py-lg">
          <div className="col">
            <Row className="align-items-center justify-content-center">
              <Col className="text-center" >
                <img
                  alt="..."
                  className="img-fluid"
                  src={(logo)}
                  style={{ width: "200px" }}
                />
              <div className=" display-4" >

               <MastersPlayersList />
               </div>

                <div className="mt-5">
                  <small className="text-white font-weight-bold mb-0 mr-2">
                    *proudly coded by
                  </small>
                  <img
                    alt="..."
                    className="ml-1"
                    style={{ height: "28px" }}
                    src={require("assets/img/brand/creativetim-white-slim.png")}
                  />
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

export default MastersList