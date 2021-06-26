import React from 'react';
import {useEffect, useStyle, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';


export default function ContextMenu (props){
    const [pos, setPos] = useState([props.pos[0], props.pos[1]]);

    return(
        <div>
                <ul
                className="menu"
                style={{
                    top: pos[0],
                    left: pos[1],
                }}
                >
                <li>Login</li>
                <li>Register</li>
                <li>Open Profile</li>
                </ul>

        </div>
    );
}