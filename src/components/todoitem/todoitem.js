import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useStyle} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';



export default function Todoitem(props){
    const dragStart =e=>{
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(()=>{
            target.style.display = "none";
        }, 0);
    };

    return(
        <div
        id = {props.id}
        draggable='true'
        onDragStart={dragStart}
        onDragOver={props.dragOver}
        onDrop={props.drop}
        >
            <ListGroup.Item category = {props.category}>{props.item.text}</ListGroup.Item>
        </div>
    );
}


