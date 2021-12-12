import React from 'react'
import { useEffect,useState } from 'react';
import "assets/css/groups.css";
import Axios from 'axios';
const MastersGrpComp = (props) => {
    const [playerlist, setplayerlist] = useState([]);
  
    useEffect(() => {
        Axios.get("http://absc-snooker.herokuapp.com/ReadMastersList/").then((response) => {
            setplayerlist([...response.data]);
        })
    }, []);
    const players = playerlist.filter(p => p.group == props.number )
    var i=1
  return (
      <><>
          <table className="table-title ">
              <thead>
                  <tr>
                      <th>N°</th>
                      <th>Player</th>
                      <th>MP</th>
                      <th>FW</th>
                      <th>FL</th>
                      <th >FD</th>
                  </tr>
              </thead>
              <tbody>
                  {players.sort((a, b) => a.fw-a.fl > b.fw-b.fl ? -1 : 1)
                  .map((p, i) => (
                      <tr >

                          <td> {i + 1}</td>
                          <td>{p.player}</td>


                          <td>{p.mp}</td>
                          <td>{p.fw}</td>
                          <td>{p.fl}</td>
                          <td >{p.fw - p.fl}</td>
                      </tr>
                  ))}



              </tbody>
          </table>
      </></>
    )
}

export default MastersGrpComp
