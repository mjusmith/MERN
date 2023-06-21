import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const Edit = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const {id}= useParams()
    const navigate= useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then((res) =>{
            const prod= res.data.results
            setTitle(prod.title)
            setPrice(prod.price)
            setDescription(prod.description)
        })
        .catch((err) =>{
            console.log(`Another one. DJ Errorrrr.`, err)
        })
    }, [id])

    const submitHandler= (e) =>{
        e.preventDefault()
        const prodObj= {title, price, description}
        axios.put(`http://localhost:8000/api/products/${id}`, prodObj)
        .then((res) =>{
            navigate(`/details/${id}`)
        })
        .catch((err) =>{
            console.log('Please no..', err)
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                    <br></br>
                    <h1>Edit</h1>
                    <br></br>
                <div className='form-group'>
                    <label>Title: </label>
                    <input type='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Price  :</label>
                    <input type='text' name='price' value={price} onChange={(e) => setPrice(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Description  :</label>
                    <input type='text' name='description' value={description} onChange={(e) => setDescription(e.target.value)} className='form-inline'></input>
                        <br></br>
                    <input type="submit" value="Update" className='btn btn-primary mt-3'/>
                        <br />
                    <button className='btn btn-outline-dark mt-3'><Link to={'/'}>Return Home</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Edit