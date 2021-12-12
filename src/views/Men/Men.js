import React from "react";

import DemoNavbar from "components/Navbars/DemoNavbar";
import Container6But from "components/Container6But";
const Men = () => {
  return (
    <div>
      <DemoNavbar/>
    <Container6But  title1={"SNOOKER"} but1={"PLAYERS LIST"} linkbut1={"/MenSnookerList"} but2={"MATCHS"} linkbut2={"/MenSnookerMatchs"} but3={"GROUPS"} linkbut3={"/MenSnookerGroups"}  title2={"6 REDS"} but4={"PLAYERS LIST"} linkbut4={"/Men6RedsList"} but5={"MATCHS"} linkbut5={"Men6RedsMatchs"} but6={"GROUPS"} linkbut6={"Men6RedsGroups"} />
    </div>
  );
};

export default Men;
