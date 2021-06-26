import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useStyle, useState} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import ContextMenu from './contextMenu/contextMenu.js';


export default function Todoitem(props){

    const [pos, setPos] = useState([]);
    const [menuSwitch, setMenuSwitch] = useState(false);

    const dragStart =e=>{
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(()=>{
            target.style.display = "none";
        }, 0);
    };

    useEffect(()=>{
        //add event listener for right click on each item that gives the option to either delete or edit the item
        // document.addEventListener("contextmenu", (event) => {
        //     event.preventDefault();
        //     const xPos = event.pageX + "px";
        //     const yPos = event.pageY + "px";
        //     setPos([xPos, yPos]);
        //     setMenuSwitch(true);
        //     console.log(pos);
        //     console.log(menuSwitch);
        //     //
        //   });
        // document.addEventListener('click', e=>{
        //     e.preventDefault();
        //     const 
        // })
    }, [])

    const handleClick =(e)=>{
        const target = e.target;
        // const xPos = e.pageX + 'px';
        // const yPos = e.pageY + 'px';
        // console.log(xPos, yPos);
        setMenuSwitch(!menuSwitch);
        
    }

    return(
        <div
        id = {props.id}
        draggable='true'
        onDragStart={dragStart}
        onDragOver={props.dragOver}
        onDrop={props.drop}
        >
            <ListGroup.Item category = {props.category} onClick={handleClick}>{props.item.text}</ListGroup.Item>
            {menuSwitch ? <ContextMenu style={{ top: pos[0], left: pos[1] }} pos={pos} /> : null}
            
        </div>
    );
}


