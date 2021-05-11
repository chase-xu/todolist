import Todoitem from '../todoitem/todoitem.js';
import {useState, useEffect} from 'react';
import Axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Board(props){

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
       const list = e.target.getAttribute('category');
       console.log(e.target.getAttribute('category'));
       dispatch({type: list, id: card_id});
     
       

   }

   const style ={
       div: {
            backgroundColor: 'blue',
            margin: '5px',
            height: '100%',
        },
        list: {
            height: '80%',
            margin: '10px'
        }
   }

    return(
        <div>
            <Container style={style.div} >
                <Row >
                    <Col category='todos' onDragOver={dragOver} onDrop={drop} >
                        <div>

                        </div>
                        <div>
                            {todosRemaining.map(item=>{
                                return (<Todoitem id={item.id} key={item.id} item={item}  />);
                            })}
                        </div>

                    </Col>
                    <Col category='progressing' onDragOver={dragOver} onDrop={drop}>
                        {todosInProgress.map(item=>{
                            return (<Todoitem id={item.id} key={item.id} item={item}  list='progressing'/>);
                        })}
                    </Col>
                    <Col category='done' onDragOver={dragOver} onDrop={drop}>
                        {todosFinished.map(item=>{
                            return (<Todoitem id={item.id} key={item.id} item={item} list='done' />);
                        })}
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}