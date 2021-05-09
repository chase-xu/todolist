import todoitem from '../todoitem/Todoitem.js';
import {useState, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import Axios from 'axios';

export default function List(props){

    const [list, setList] = useState([]);

    const getData=()=>{
        Axios.post('http://localhost:8082/api/items').then(response=>{
            const data = response.data;
            console.log(data);
            setList(data);
        });
    }

    useEffect(() => {
        getData();
   }, [])

    return(
        <div>
            <Card >
                {list.map(item=>{
                    return (<todoitem item={item} />);
                })}
            </Card>
        </div>
    );
}