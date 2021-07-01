import React from 'react';
import {useEffect, useStyle, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Button } from 'react-bootstrap';
import './contextMenu.css';

export default function ContextMenu (props){
    // const [pos, setPos] = useState([props.pos[0], props.pos[1]]);
    const dispatch = useDispatch();

    const handleEidt =(e)=>{
        const id = props.id;

    }
    const handleRemove=(e)=>{
        // e.preventDefault();
        const id = props.id;
        props.closeMenu();
        dispatch({type: 'removeItem', id: id});

    }
    return(
        <div ref={props.ref} className={'dropdown'}>
            <div className={'dropdown-content'}>
                    <Button variant="light" onClick={handleEidt}>Eidt</Button>
                    <Button variant="light" onClick={handleRemove}>Remove</Button>
            </div>
        </div>
    );
}