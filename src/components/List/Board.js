import Todoitem from '../todoitem/todoitem.js';
import {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


export default function Board(props){

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
            width: '80%',
        },
        list: {
            height: '80%',
            margin: '10px',
            padding: '10px',
            '& Col': {
                margin: '50px',
            }
        }
   }

    return(
        <div style={style.div}>
            <Container  >
                <Row style={style.list}>
                    <Col category='todos' onDragOver={dragOver} onDrop={drop} style={{
                        backgroundColor: 'yellow',
                    }}>
                        <Container category='todos' onDragOver={dragOver} onDrop={drop}>
                            <Card >
                                <Card.Header>Todos</Card.Header>
                                <ListGroup variant="flush" category='todos' onDragOver={dragOver} onDrop={drop}>
                                    {todosRemaining.map(item=>{
                                            return (<Todoitem category='todos' id={item.id} key={item.id} item={item} dragOver={dragOver} drop={drop}/>);
                                        })}
                                </ListGroup>
                            </Card>
                        </Container>
                    </Col>
                    <Col category='progressing' onDragOver={dragOver} onDrop={drop}>
                        <Card>
                            <Card.Header>Progressing</Card.Header>
                            <ListGroup variant="flush">
                                {todosInProgress.map(item=>{
                                    return (<Todoitem category='progressing' id={item.id} key={item.id} item={item}  list='progressing'/>);
                                })}
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col category='done' onDragOver={dragOver} onDrop={drop}>
                        <Card>
                                <Card.Header>Done</Card.Header>
                                <ListGroup variant="flush">
                                    {todosFinished.map(item=>{
                                        return (<Todoitem category='done' id={item.id} key={item.id} item={item} list='done' />);
                                    })}
                                </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}