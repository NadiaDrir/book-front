
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Miseajour() {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [detailles, setdetailles] = useState('')
    const navigate=useNavigate();
    const {id} =useParams();
    
       
       
    useEffect(()=>{
       
        axios.get(`http://localhost:4200/api/book/${id}`)
        .then((response)=>{
            const book=response.data.book
            settitle(book.title)
            setdescription(book.description)
            setdetailles(book.detailles)
        console.log(response)
        } 
        ).catch((error) => { console.log(error) }
        )
    },[id])
    function handlemiseajour(e){
        e.preventDefault();
        const newbook = {
            title, description, detailles
        }
        axios.put(`http://localhost:4200/api/book/${id}`,newbook)
       .then(()=>{navigate('/')}).catch((erreur)=>{console.log(erreur)})
    }
    
    return (
        <div>
            <form id='jour'> 
                <label >BOOK Title</label>
                <input name='title' onChange={(e) => settitle(e.target.value)} value={title}/> 
                <label >Description</label>
                <input name='description' onChange={(e) => setdescription(e.target.value)} value={description}/>
                <label >Detailes</label>
                <input name='detailles' onChange={(e) => setdetailles(e.target.value)} value={detailles}/>
                <button id='mise'type='submit' onClick={handlemiseajour}>Mise a jour </button>
            </form>

            
        </div>
    )
    
} export default Miseajour