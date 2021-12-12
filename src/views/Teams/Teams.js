import Container3but from 'components/Container3but'
import DemoNavbar from 'components/Navbars/DemoNavbar'
import React from 'react'

const Teams = () => {
    return (
        <div>
            <DemoNavbar />
            <Container3but title={"TEAMS"} but1={"PLAYERS LIST"} linkbut1={"/TeamsList"} but2={"MATCHS"} linkbut2={"/TeamsMatchs"} but3={"GROUPS"} linkbut3={"/TeamsGroups"}  />  
        </div>
    )
}

export default Teams
