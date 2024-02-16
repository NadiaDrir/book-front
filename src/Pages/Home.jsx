import React from 'react'
import axios from 'axios';
import {BounceLoader}from 'react-spinners'
import { Link } from 'react-router-dom';
import { IoMdAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { CiSquareMore } from "react-icons/ci";
function Home({ book }) {


    return (
        <div>
    
            <div>
                
            
            <h1 id='title'>List of Books</h1>
            <table  id='table'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Details</th>
                        <th>Description</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {book.map((book, index) => (
                        <tr key={index}>
                            <td>{book.title}</td>

                            <td>{book.detailles}</td>
                            <td>{book.description}</td>
                            <td>{book.publicationYear}</td>
                            <td>
                            <Link to={`/Detailes/${book._id}`}>
                             <button><CiSquareMore color='black' size='20' /></button>
                               </Link>
                               
                            
                            <Link to={`/Delete/${book._id}`}>
                             <button><MdDelete color='red'size='20' /></button>
                               </Link>
                            
                            
                            <Link to={`/Miseajour/${book._id}`}>
                             <button><MdEdit color='green' size='20' /></button>
                               </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
    );
}
export default Home