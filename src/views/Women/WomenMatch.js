import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'
import WomensMatchsComp from 'components/WomensMatchsComp'
import { Button, Container, Row, Col } from "reactstrap";

const WomenMatch = () => {
    return (
        <div>
         
         <div>
             
               <section className="section section-hero section-shaped" style={{backgroundColor:"green"}}>
            <DemoNavbar />  
  
            <div ClassName="d-flex align-items-center justify-content-center">
                <Container
                    fluid
                    className="d-flex align-items-center py-lg"
                >
                    <div className="col align-items-center justify-content-center">
                        <Row className="align-items-center justify-content-center">
                            <Col className="text-center">
                           <WomensMatchsComp />

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

export default WomenMatch
