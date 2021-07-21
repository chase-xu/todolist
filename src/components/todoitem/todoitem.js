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
    const editingId = useSelector(state=>{
        return state.editing;
    });

    const itemId = props.id;

    const itemContent = useSelector(state=>{
       const index = state.todos.findIndex(obj=>obj.id === Number(itemId));
       return state.todos[index].id; 
    });
    const pos = useSelector(state=>{
        return state.pos;
    });

    const [menu, setMenu] = useState(false);

    const dragStart =e=>{
        const target = e.target;
        e.dataTransfer.setData('card_id', target.id);
        setTimeout(()=>{
            target.style.display = "none";
        }, 0);
    };

    const closeMenu =(e)=>{
        setMenu(!menu);
        document.removeEventListener('click', menuOff);
    }

    const menuRef =  useRef();
    const contextMenu = <ContextMenu id={props.id} pos={pos}  closeMenu={closeMenu} />;


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
                <ListGroup.Item>{ itemId == editingId ? <input value={props.item.text}></input>  : props.item.text}</ListGroup.Item>
            </div>
            <div ref={menuRef}>{menu ? contextMenu: null}</div> 
        </div>
    );
}

/**should add condition check to see if any item is been editing, if yes implement the text field instead,
 * remember to check if there is one item's being editing.
 */
