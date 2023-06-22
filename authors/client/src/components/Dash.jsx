import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Dash = () => {
    const [authorsList, setAuthorsList]= useState([]);
    const [deleteToggle, setDeleteToggle]= useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
        .then((res) => {
            setAuthorsList(res.data.results)
        })
        .catch((err) => {
            console.log(`useEffect Error: ${err}`)
        })
    }, [deleteToggle])

    const handleDelete= (e, id) => {
        axios.delete(`http://localhost:8000/api/authors/${id}`)
        .then((res) =>{
            setDeleteToggle(!deleteToggle)
        })
        .catch((err) =>{
            console.log('Oh no...another error..', err)
        })
    }

    return (
        <div>
            <br></br>
                <h1>Favorite Authors</h1>
            <button className='btn btn-outline-primary mt-3'><Link to={'/create'}>Add An Author</Link></button>
            <br />
            <hr />
            <div>
                {
                    authorsList.map((author, index) => {
                        return (
                            <div key={index}>
                                <h3>Author</h3>
                                <p>Name: {author.name}</p>
                                    <br></br>
                                <button className='btn btn-outline-info'><Link to={`/edit/${author._id}`}>Edit</Link></button> <span></span>
                                <button className='btn btn-outline-warning' onClick={(e) => {handleDelete(e, author._id)}}>Delete</button>
                                    <br></br>
                                    <br></br>
                                    <br></br>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Dash