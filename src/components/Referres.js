import React from 'react'
import { useEffect, useState } from 'react';
import Axios from "axios";
import ReactCollapsingTable from 'react-collapsing-table';

const Referres = () => {
    const [reflist, setreflist] = useState({});

    useEffect(() => {
        Axios.get("http://absc-snooker.herokuapp.com/ReadReferreList/").then((response) => {
            setreflist([...response.data]);
        })
    }, []);



    const rows = reflist
    
    const columns = [
        { accessor: 'PHOTO', label: 'photo', priorityLevel: 4, position: 1 },
        { accessor: 'player', label: 'Name', priorityLevel: 2, position: 2},
        { accessor: 'country', label: 'Country', priorityLevel: 3, position: 3 },
        { accessor: 'age', label: 'Age', priorityLevel: 4, position: 4 },
       

    ];
   
    return (
        <div style={{fontSize:"xx-small"}}>
           
            <ReactCollapsingTable rows={rows} columns={columns} showSearch={true} id={true} minWidth={"0px"} />
        </div>)
}

export default Referres
