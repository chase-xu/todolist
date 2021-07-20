import Todoitem from '../todoitem/todoitem.js';
import {useState, useEffect, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Navbar from 'react-bootstrap/Navbar';
import { NavbarBrand } from 'react-bootstrap';
import './Board.css';

/**
 * Each board as an item list
 * @param {*} props 
 * @returns 
 */
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

    const closeMenu = useSelector(state=>{
        return state.closeMenu;
    })

    const todos = useSelector(state=>{
        return state.todos;
    })


    // const [pos, setPos] = useState([]);
    const menuOn = useSelector(state=>{
        return state.menuOn;
    })

    const editing =(id)=>{
        const todoitem = todos.filter(todos=> todos.id === Number(id));
        /**should pass id to todoitem and then replace display to text field
         * Use redux might be the quicker way
         */
    }

    useEffect(() => {
        if(menuOn){
            document.addEventListener('click', e=>{
                const xPos = e.pageX + 'px';
                const yPos = e.pageY + 'px';
                const leng = todos.length;
                for( let i = 0; i < leng; i++){
                    console.log(todos[i]);
                    if(todos[i].showMenu === true){
                        dispatch({type: 'toggleCloseMenu'});
                    }
                }
            });
        }

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

   /**
    * CSS styles for components of the boards
    */
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
            },
            minHeight: '300px',
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
                                
                                <Navbar id='nav' ><Navbar.Brand>Todos</Navbar.Brand></Navbar>
                                <ListGroup variant="flush" category='todos' onDragOver={dragOver} onDrop={drop}>
                                    {todosRemaining.map(item=>{
                                            return (<Todoitem category='todos' id={item.id} key={item.id} item={item} dragOver={dragOver} drop={drop}/>);
                                        })}
                                </ListGroup>
                            
                        </Container>
                    </Col>
                    <Col category='progressing' onDragOver={dragOver} onDrop={drop}>
                        <Navbar id='nav' ><Navbar.Brand>Progressing</Navbar.Brand></Navbar>
                            <ListGroup variant="flush">
                                {todosInProgress.map(item=>{
                                    return (<Todoitem category='progressing' id={item.id} key={item.id} item={item}  list='progressing'/>);
                                })}
                            </ListGroup>
                       
                    </Col>
                    <Col category='done' onDragOver={dragOver} onDrop={drop}>
                        <Navbar id='nav' ><Navbar.Brand>Done</Navbar.Brand></Navbar>
                                <ListGroup variant="flush">
                                    {todosFinished.map(item=>{
                                        return (<Todoitem category='done' id={item.id} key={item.id} item={item} list='done' />);
                                    })}
                                </ListGroup>
                        
                    </Col>
                </Row>
            </Container>
        </div>
        
    );
}