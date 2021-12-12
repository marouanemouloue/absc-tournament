import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import MenSnookerMatchsComp from 'components/MenSnookerMatchsComp'
import { Button, Container, Row, Col } from "reactstrap";

const MenSnookerMatchs = () => {
    return (
        <div>
         
         <div>
             
               <section className="section section-hero section-shaped">
            <DemoNavbar />  
  
            <div ClassName="d-flex align-items-center justify-content-center">
                <Container
                    fluid
                    className="d-flex align-items-center py-lg"
                >
                    <div className="col align-items-center justify-content-center">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center">
                            <MenSnookerMatchsComp /> 

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

export default MenSnookerMatchs
