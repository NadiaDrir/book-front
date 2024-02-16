import React from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


function Creation() {
    const [title, settitle] = useState('')
    const [description, setdescription] = useState('')
    const [detailles, setdetailles] = useState('')
    const navigate=useNavigate();
    
    
    function handlecreate(e){
        e.preventDefault();
        const newbook = {
            title, description, detailles
        }
       
    
    axios.post('https://book-search-lrng.onrender.com/api/book', newbook)
        .then(() => { navigate('/') }
        ).catch((error) => { console.log(erreur) }
        )
    }
    return (
        <div>
            <form>
                <label >BOOK Title</label>
                <input name='title' onChange={(e) => settitle(e.target.value)} value={title}></input>
                <label >Description</label>
                <input id='desc' name='description' onChange={(e) => setdescription(e.target.value)} value={description}></input>
                <label >Detailes</label>
                <input name='detailles' onChange={(e) => setdetailles(e.target.value)} value={detailles}></input>

            </form>



            <button type='submit' onClick={handlecreate}>Create</button>
        </div>
    )

} export default Creation