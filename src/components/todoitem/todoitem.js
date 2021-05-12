import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useStyle, useSelector} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';



export default function todoitem(props){
    
    const dragStart =e=>{
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(()=>{
            target.style.display = "none";
        }, 0);
    }

    const dragOver=e=>{
        e.stopPropagation();
        
    }
    return(
        <div
        id = {props.id}
        draggable='true'
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDrop={props.drop}>
            <ListGroup.Item>{props.item.text}</ListGroup.Item>
        </div>
    );
}


