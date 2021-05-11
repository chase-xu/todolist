import Todoitem from '../todoitem/todoitem.js';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Borad(props){

    const [list, setList] = useState([]);
    const dispatch = useDispatch()

    const todosRemaining = useSelector(state => {
        const uncompletedTodos = state.todos.filter(todo => todo.state === 'incompleted');
        return uncompletedTodos
    })

    const todosFinished = useSelector(state=>{
        const completedTodos = state.todos.filter(todo=> todo.state === 'completed');
        return completedTodos;
    })
  
    const todosInProgress = useSelector(state=>{
        const progressing = state.todos.filter(todo=> todo.state === 'progressing');
        return progressing;
    })


    useEffect(() => {
   }, [])

   const dragOver = e=>{
       e.preventDefault();
   }
   const drop =e=>{
       e.preventDefault();
       const card_id = e.dataTransfer.getData('card_id');
       const card = document.getElementById(card_id);
       card.style.display = 'block';


   }
    return(
        <div>
            <Container>
                <Row>
                    <Col className='todos' >
                        {todosRemaining.map(item=>{
                            return (<Todoitem id={item.id} key={item.id} item={item} onDragOver={dragOver} onDrop={drop} />);
                        })}
                    </Col>
                    <Col className='progressing'>
                        {todosInProgress.map(item=>{
                            return (<Todoitem id={item.id} key={item.id} item={item} onDragOver={dragOver} onDrop={drop} />);
                        })}
                    </Col>
                    <Col className='done'>
                        {todosFinished.map(item=>{
                            return (<Todoitem id={item.id} key={item.id} item={item} onDragOver={dragOver} onDrop={drop} />);
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}