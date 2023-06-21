import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Dash = () => {
    const [productList, setProductList]= useState([]);
    const [deleteToggle, setDeleteToggle]= useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            setProductList(res.data.results)
        })
        .catch((err) => {
            console.log(`useEffect Error: ${err}`)
        })
    }, [deleteToggle])

    const handleDelete= (e, id) => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
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
                <h1>Product Creator</h1>
            <button className='btn btn-outline-primary mt-3'><Link to={'/create'}>Create</Link></button>
            <br />
            <hr />
            <div>
                {
                    productList.map((prod, index) => {
                        return (
                            <div key={index}>
                                <h3>Product</h3>
                                <p>Title: {prod.title}</p>
                                <p>Price: {prod.price}</p>
                                <p>Description: {prod.description}</p>
                                    <br></br>
                                <button className='btn btn-outline-primary'><Link to={`/details/${prod._id}`}>View</Link></button> <span></span>
                                <button className='btn btn-outline-info'><Link to={`/edit/${prod._id}`}>Edit</Link></button> <span></span>
                                <button className='btn btn-outline-warning' onClick={(e) => {handleDelete(e, prod._id)}}>Delete</button>
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