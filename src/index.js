import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";
import Index from "views/Main-page";
import Men from "./views/Men/Men";
import Women from "./views/Women/Women";
import Masters from "./views/Masters/Masters";
import Teams from './views/Teams/Teams';
import Referre from './views/Referre/Referre'
import ReferreSchedule from 'views/Referre/ReferreSchedule'
import ReferreList from 'views/Referre/ReferreList'
import Breaks from 'views/Breaks'
import Schedule from './views/Schedule';
import MenSnookerGrp from "views/Men/MenSnookerGrp";
import MenSnookerList from './views/Men/MenSnookerList';
import MenSnookerMatchs from "views/Men/MenSnookerMatchs";
import Men6Matchs from './views/Men/Men6Groups';
import Men6List from './views/Men/Men6List';
import Men6Groups from './views/Men/Men6Groups'
import WomenList from './views/Women/WomenList';
import WomenMatch from "views/Women/WomenMatch";
import WomenGroup from "views/Women/WomenGroup";
import MastersGroups from 'views/Masters/MastersGroups';
import MastersList from "views/Masters/MastersList";
import MastersMatches from "views/Masters/MastersMatches";
import TeamsGroups from './views/Teams/TeamsGroups';
import TeamsList from "views/Teams/TeamsList";
import TeamsMatchs from "views/Teams/TeamsMatchs";
import Ranking from "./views/Ranking/Ranking"
import MenRanking from "views/Ranking/MenRanking";
import "assets/css/main.css";
ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact render={(props) => <Index {...props} />} />
      <Route path="/Men" exact render={(props) => <Men {...props} />} />
      <Route path="/MenSnookerList" exact render={(props) => <MenSnookerList {...props} />} />
      <Route path="/MenSnookerMatchs" exact render={(props) => <MenSnookerMatchs {...props} />} />
      <Route path="/MenSnookerGroups" exact render={(props) => <MenSnookerGrp {...props} />} />
      <Route path="/Men6RedsList" exact render={(props) => <Men6List {...props} />} />
      <Route path="/Men6RedsMatchs" exact render={(props) => <Men6Matchs {...props} />} />
      <Route path="/Men6RedsGroups" exact render={(props) => <Men6Groups {...props} />} />

      <Route path="/Women" exact render={(props) => <Women {...props} />} />
      <Route path="/WomenList" exact render={(props) => <WomenList {...props} />} />
      <Route path="/WomenMatchs" exact render={(props) => <WomenMatch {...props} />} />
      <Route path="/WomenGroups" exact render={(props) => <WomenGroup {...props} />} />
      <Route path="/Masters" exact render={(props) => <Masters {...props} />} />
      <Route path="/MastersGroups" exact render={(props) => <MastersGroups {...props} />} />
      <Route path="/MastersPlayersList" exact render={(props) => <MastersList {...props} />} />
      <Route path="/MastersMatchs" exact render={(props) => <MastersMatches {...props} />} />


      <Route path="/Teams" exact render={(props) => <Teams {...props} />} />
      <Route path="/TeamsGroups" exact render={(props) => <TeamsGroups {...props} />} />
      <Route path="/TeamsList" exact render={(props) => <TeamsList {...props} />} />
      <Route path="/TeamsMatchs" exact render={(props) => <TeamsMatchs {...props} />} />



      <Route path="/Breaks" exact render={(props) => <Breaks {...props} />} />
      <Route path="/Schedule" exact render={(props) => <Schedule {...props} />} />

      <Route path="/Referre" exact render={(props) => <Referre {...props} />} />
      <Route path="/ReferreList" exact render={(props) => <ReferreList {...props} />} />
      <Route path="/ReferreSchedule" exact render={(props) => <ReferreSchedule {...props} />} />

      <Route path="/Ranking" exact render={(props) => <Ranking {...props} />} />
      <Route path="/MenRanking"  exact render={(props) => <MenRanking {...props} />} />

     









      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
