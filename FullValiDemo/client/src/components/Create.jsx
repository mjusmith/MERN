import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {

    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')

    const navigate= useNavigate()

    const submitHandler= (e) => {
        e.preventDefault()
        const prodObj= {title, price, description}
        axios.post('http://localhost:8000/api/products/new', prodObj)
        .then((res) =>{
            navigate('/')
        })
        .catch((err) =>{
            console.log("Yikes and error! :", err)
        })
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <br></br>
                <h1>Product Creator</h1>
                <br></br>
                <div className='form-group'>
                    <label>Title: </label>
                    <input type='text' name='title' onChange={(e) => setTitle(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Price  :</label>
                    <input type='text' name='price' onChange={(e) => setPrice(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Description  :</label>
                    <input type='text' name='description' onChange={(e) => setDescription(e.target.value)} className='form-inline'></input>
                        <br></br>
                    <input type="submit" value="Create" className='btn btn-primary mt-3'/>
                    <br />
                    <button className='btn btn-outline-dark mt-3'><Link to={'/'}>Return Home</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Create