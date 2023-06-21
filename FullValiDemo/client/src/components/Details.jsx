import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link, useParams } from 'react-router-dom'

const Details = () => {

    const [product, setProduct]= useState('')
    const {id} = useParams()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            setProduct(res.data.results)
        })
        .catch((err) =>{
            console.log('Zoinks! Error!', err)
        })
    }, [id])

    return (
        <div>
            <h1>Details</h1>
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <br />
                    <button className='btn btn-outline-dark mt-3'><Link to={'/'}>Return Home</Link></button>
        </div>
    )
}

export default Details