import React from 'react'
import DemoNavbar from 'components/Navbars/DemoNavbar'
import Container6But from 'components/Container6But'
import Container3but from 'components/Container3but'
const Masters = () => {
    return (

        <div>
        <DemoNavbar />
        <Container3but title={"MASTERS"} but1={"PLAYERS LIST"} linkbut1={"./MastersPlayersList"} but2={"MATCHS"} linkbut2={"./MastersMatchs"} but3={"GROUPS"} linkbut3={"/MastersGroups"}  />  
        </div>
    )
}

export default Masters
