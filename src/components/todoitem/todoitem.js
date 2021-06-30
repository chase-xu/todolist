import React from 'react';
import ReactDOM from 'react-dom';
import {useEffect, useStyle, useState, useRef} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector, useDispatch } from 'react-redux';
import ContextMenu from './contextMenu/contextMenu.js';
import {Button } from 'react-bootstrap';


export default function Todoitem(props){

    const dispatch = useDispatch();
    const pos = useSelector(state=>{
        return state.pos;
    });
    const closeMenu = useSelector(state=>{
        return state.closeMenu;
    })
    const [menu, setMenu] = useState(false);

    const dragStart =e=>{
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(()=>{
            target.style.display = "none";
        }, 0);
    };

    const menuRef =  useRef();
    const contextMenu = <ContextMenu  pos={pos}  closeMenu={closeMenu}/>;

    useEffect(()=>{
        //add event listener for clicking on each item that gives the option to either delete or edit the item
        if(menu){
            document.addEventListener('click', menuOff);
        }
    },[menu])


    const handleClick =(e)=>{
        console.log(props.id);
        const xPos = e.pageX + 'px';
        const yPos = e.pageY + 'px';
        setMenu(!menu);
    }

    /**
     * if the any of the menus have be open, and the user has clicked somewhere outside of the menu, then close the menu.
     */
    const menuOff =(e)=>{
        if(e === true || !menuRef.current.contains(e.target)){
            setMenu(!menu);
            //remove the event listener after the menu has been closed.
            document.removeEventListener('click', menuOff);
        }

    }
    return(
        <div>
            <div
            id = {props.id}
            draggable='true'
            onDragStart={dragStart}
            onDragOver={props.dragOver}
            onDrop={props.drop}
            onClick={handleClick}
            category = {props.category}
            >
                <ListGroup.Item>{props.item.text}</ListGroup.Item>
            </div>
            <div ref={menuRef}>{menu ? contextMenu: null}</div> 
        </div>
    );
}


