import React from 'react'
import { Button, Container, Row, Col } from "reactstrap";
import DemoNavbar from 'components/Navbars/DemoNavbar';
import Container3but from 'components/Container3but';
import Container6But from 'components/Container6But';
const Women = () => {
    return (
        <div>
            <DemoNavbar />
            <Container3but title={"WOMEN"} but1={"PLAYERS LIST"} but2={"MATCHS"} but3={"GROUPS"} linkbut1={"/WomenList"} linkbut2={"/WomenMatchs"} linkbut3={"/WomenGroups"} />  
      
    </div>
    )
}

export default Women
