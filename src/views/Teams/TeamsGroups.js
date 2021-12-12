import React from 'react'
import { Container, Row, Col } from "reactstrap";
import TeamsGroupsCmp from 'components/TeamsGroupsCmp';
import DemoNavbar from "components/Navbars/DemoNavbar";


const TeamsGroups = () => {
    return (
        <><DemoNavbar />
        <div
              className="align-items-center justify-content-center"
             
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
                                  <TeamsGroupsCmp number={"1"} />
                              </Col>
                              <Col>
                                  <TeamsGroupsCmp number={"1"} />
                              </Col>
                          </Row>
                          <Row>
                              <Col>
                                  <TeamsGroupsCmp  number={"1"} />
                              </Col>
                              <Col>
                                  <TeamsGroupsCmp  number={"1"} />
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

export default TeamsGroups
