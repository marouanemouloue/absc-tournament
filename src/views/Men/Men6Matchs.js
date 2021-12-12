import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";
import Men6matchsComp from 'components/Men6matchsComp';
const Men6Matchs = () => {
    return (
        <div>
            <DemoNavbar />
            <div
           
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
                                   <Men6matchsComp />
   
                               </Col>
                              
                           </Row>
                          
                       </div>
                   </Container>
                   
               </div>
               </section>
           </div>
        </div>
    )
}

export default Men6Matchs
