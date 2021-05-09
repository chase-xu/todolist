import Todoitem from '../todoitem/todoitem.js';
import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


export default function List(props){

    const [list, setList] = useState([]);
    const dispatch = useDispatch()

    const todosRemaining = useSelector(state => {
        const uncompletedTodos = state.todos.filter(todo => !todo.completed)
        return uncompletedTodos
    })

    const todosFinished = useSelector(state=>{
        const completedTodos = state.todos.filter(todo=> todo.completed);
        return completedTodos;
    })
  

    useEffect(() => {
       console.log(todosRemaining);
   }, [])

    return(
        <div>
            <Card >
                {todosRemaining.map(item=>{
                    return (<Todoitem item={item} />);
                })}
            </Card>
        </div>
    );
}