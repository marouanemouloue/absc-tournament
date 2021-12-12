import DemoNavbar from "components/Navbars/DemoNavbar";
import React from "react";
import MastersGrpComp from "components/MastersGrpComp";
import { Container, Row, Col } from "reactstrap";
const MastersGroups = () => {
    return(
    <><DemoNavbar />
    <div
          className="align-items-center justify-content-center"
          style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              margin:"auto",
          }}
      >
          {/* < */}
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

          <div ClassName="d-flex align-items-center justify-content-center">
              <Container
                  fluid
                  className="d-flex align-items-center py-lg"
              >
                  <div className="col align-items-center justify-content-center">
                      <Row className="align-items-center justify-content-center">
                          <Col className="text-center">
                              <MastersGrpComp  number={"1"} />
                          </Col>
                          <Col>
                              <MastersGrpComp  number={"1"} />
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <MastersGrpComp  number={"1"} />
                          </Col>
                          <Col>
                              <MastersGrpComp  number={"1"} />
                          </Col>
                      </Row>
                  </div>
              </Container>
              
          </div>
          </section>
      </div>
      
      </>
    )
}

export default MastersGroups
