import React from 'react';
import {useEffect, useStyle, useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Button } from 'react-bootstrap';
import './contextMenu.css';

export default function ContextMenu (props){
    const dispatch = useDispatch();
    const todolist = useSelector(state=>{
        const todos = state.todos;
        return todos;
    })

    /**Handle editing todo item */
    const handleEdit =(e)=>{
        const id = props.id;
        // const toDoItem = todolist.filter(todo=> todo.id === Number(id));
        /**Should make item's display become text field with the old input
         * 1. use redux to pass id to inform todoitem which one is being editing
         * 
         */
         dispatch({type: 'editingItem', id: id});

    }
    /**Handle remove todo item */
    const handleRemove=(e)=>{
        const id = props.id;
        props.closeMenu();
        dispatch({type: 'removeItem', id: id});

    }
    return(
        <div ref={props.ref} className={'dropdown'}>
            <div className={'dropdown-content'}>
                    <Button variant="light" onClick={handleEdit}>Edit</Button>
                    <Button variant="light" onClick={handleRemove}>Remove</Button>
            </div>
        </div>
    );
}