import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useStyle, useSelector} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';



export default function todoitem(props){
    

    return(
        <div>
            <ListGroup.Item>{props.item}</ListGroup.Item>
        </div>
    );
}


