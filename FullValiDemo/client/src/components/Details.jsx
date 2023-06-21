import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

const Details = () => {

    const [product, setProduct]= useState('')
    const {id} = useParams()
    const navigate= useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            setProduct(res.data.results)
        })
        .catch((err) =>{
            console.log('Zoinks! Error!', err)
        })
    }, [id])

    const handleDelete= () => {
        axios.delete(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            navigate('/')
        })
        .catch((err) =>{
            console.log('Oh no...another error..', err)
        })
    }

    return (
        <div>
            <h1>Details</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <button className='btn btn-outline-dark mt-3' onClick={handleDelete}>Delete</button>
                <br />
            <button className='btn btn-outline-dark mt-3'><Link to={'/'}>Return Home</Link></button>
        </div>
    )
}

export default Details