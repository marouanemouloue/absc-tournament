import React from 'react'
import ReactCollapsingTable from 'react-collapsing-table';
import { useEffect, useState } from 'react';
import Axios from "axios";
const MastersPlayersList = () => {
    const [playerlist, setplayerlist] = useState({});

    useEffect(() => {
        Axios.get("http://absc-snooker.herokuapp.com/ReadMastersPlayersList/").then((response) => {
            setplayerlist([...response.data]);
        })
    }, []);



    const rows = playerlist
    
    const columns = [
        { accessor: 'PHOTO', label: 'photo', priorityLevel: 1, position: 1 },
        { accessor: 'player', label: 'Name', priorityLevel: 2, position: 2},
        { accessor: 'country', label: 'Country', priorityLevel: 3, position: 3 },
        { accessor: 'age', label: 'Age', priorityLevel: 4, position: 4 },
        { accessor: 'practice_break', label: 'Practice Break', priorityLevel: 5, position: 5 },
        { accessor: 'competition_break', label: 'Practice Break', priorityLevel: 6, position:6 },

    ];
   
    return (
        <div style={{overflow:"scroll",fontSize:"xx-small"}}>
           
            <ReactCollapsingTable rows={rows} columns={columns} showSearch={true} id={true} minWidth={"0px"} />
        </div>)
}

export default MastersPlayersList
