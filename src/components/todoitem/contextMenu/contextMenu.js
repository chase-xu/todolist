import React from 'react';
import {useEffect, useStyle, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function ContextMenu (props){
    // const [pos, setPos] = useState([props.pos[0], props.pos[1]]);

    const style = {
        div: {
            position: 'relative',
            display: 'inline-block'
        }
    }
    return(
        <div ref={props.ref} style={style.div}>
                <ul
                className="menu"
                >
                <li>Login</li>
                <li>Register</li>
                <li>Open Profile</li>
                </ul>
        </div>
    );
}