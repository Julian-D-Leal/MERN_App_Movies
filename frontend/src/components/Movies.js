import Nav from './Nav.js'
import NavItem from './NavItem.js'
import List from './List.js'
import ListItem from './ListItem.js'
import axios from "axios";
import { useState,useEffect } from 'react';


export default function Movies() {
    const [movies, setPost] = useState([])
    

    useEffect(() =>{
        axios.get('http://localhost:5000/api/movies/list', {
            headers: {
            'Content-Type': 'application/json'
            }
          }
        )
        .then(res => setPost(res.data))
        .catch(err => console.log(err))
    },[])
    
  return (
    <div className="divide-y divide-slate-100">
        
        <Nav>
            <NavItem isActive>Añadir película</NavItem>
        </Nav>
        <List>
        {movies.map((movie) => (
          <ListItem key={movie.id} movie={movie} />
        ))}
      </List>
    </div>
  )
}
