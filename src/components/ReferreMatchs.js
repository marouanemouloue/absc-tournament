import React from 'react';
import ReactCollapsingTable from 'react-collapsing-table';
import { useEffect, useState } from 'react';
import Axios from "axios";
import "assets/css/table.css";

const ReferreMatchs = () => {
    const [matchinfo, setmatchinfo] = useState([]);

    useEffect(() => {
        Axios.get("http://absc-snooker.herokuapp.com/ReadRefereeMatches/").then((response) => {
            setmatchinfo([...response.data]);
        })
    }, []);





// const fw1 = mp.map((f)=>(f.fw))
// console.log(fw1)
    const rows = matchinfo
   
    const columns = [
        { accessor: 'id_match', label: 'id', priorityLevel: 1, position: 1 },
        { accessor: 'player1', label: 'player1', priorityLevel: 2, position: 2},
        { accessor: 'player2', label: 'player2', priorityLevel: 3, position: 3 },
        { accessor: 'referee', label: 'referee', priorityLevel: 4, position: 4 },
        { accessor: 'date', label: 'date', priorityLevel: 5, position: 5 },
        { accessor: 'table', label: 'table', priorityLevel: 6, position: 6 },
        { accessor: 'round', label: 'round', priorityLevel: 7, position:7 },
        { accessor: 'fw1', label: 'result1', priorityLevel: 8, position:8 },
        { accessor: 'fw2', label: 'result2', priorityLevel: 9, position:9 }
    ];
    return (
        <div style={{overflow :"visible"}} >
           
            <ReactCollapsingTable rows={rows} columns={columns} showSearch={true} id={true} minWidth={"0px"} rowSize={300} theme="table.css"/>
        </div>
    )
}

export default ReferreMatchs
