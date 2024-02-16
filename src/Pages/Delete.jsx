import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Delete({}) {
    const navigate=useNavigate();  
    const {id} =useParams();
 
   
    function handleDelete(){
        axios.delete(`https://book-search-lrng.onrender.com/api/book/${id}`)
        .then(()=>{navigate('/')}).catch((erreur)=>console.log(erreur))
     }
     
    
    return (
        <div id='new'>
            <h1>Are you sure want to delete this book</h1>
       <button className="material-symbols-outlined" onClick={handleDelete}>Delete</button>
   
       
      </div>   



    
  )
}export default Delete