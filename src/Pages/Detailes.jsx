import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

function Detailes({}) {
    const {id} =useParams();


     const [booked,setbooked] =useState('')
    
        axios.get(`http://localhost:4200/api/book/${id}`)  
        .then(res => {setbooked(res.data.book)})//je recupre dans la variable set movie
        .catch(err => console.log(err))
          
      
      
     return(
   <div id='new'>
     <h1>{booked.title}</h1>
    <h1>{booked. detailles}</h1>
    <h1>{booked. description}</h1>
    <h1>{booked.publicationYear}</h1>
  
 

    
   </div>   

     )
  
}export default Detailes