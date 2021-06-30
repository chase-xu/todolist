import React from 'react';
import {useEffect, useStyle, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Button } from 'react-bootstrap';
import './contextMenu.css';

export default function ContextMenu (props){
    // const [pos, setPos] = useState([props.pos[0], props.pos[1]]);


    return(
        <div ref={props.ref} className={'dropdown'}>
            <div className={'dropdown-content'}>
                    <span><Button variant="light">Eidt</Button></span>
                    <span><Button variant="light">Remove</Button></span>
            </div>
        </div>
    );
}