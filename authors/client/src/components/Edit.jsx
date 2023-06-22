import React, {useState, useEffect} from 'react'
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios'

const Edit = () => {

    const [name, setName] = useState('')

    const [errors, setErrors] = useState([])

    const {id}= useParams()
    const navigate= useNavigate()

    useEffect(() =>{
        axios.get(`http://localhost:8000/api/authors/${id}`)
        .then((res) =>{
            const author= res.data.results
            setName(author.name)
        })
        .catch((err) =>{
            console.log(`Another one. DJ Errorrrr.`, err)
        })
    }, [id])

    const submitHandler= (e) =>{
        e.preventDefault()
        const authorObj= {name}
        axios.put(`http://localhost:8000/api/authors/${id}`, authorObj)
        .then((res) =>{
            navigate(`/`)
        })
        .catch((err) => {
            console.log("Yikes an error! :", err);
            const errorArr = [];
            const errorResponse = err.response.data.err.errors;
            const errorKeys = Object.keys(errorResponse);
            
            for (const key of errorKeys) {
                errorArr.push(errorResponse[key].message);
            }
            setErrors(errorArr);
        })
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                    <br></br>
                    <h1>Edit</h1>
                    <br></br>
                <div className='form-group'>
                    <label>Name: </label>
                    <input type='text' name='title' value={name} onChange={(e) => setName(e.target.value)} className='form-inline'></input>
                </div>
                        <br />
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='form-group'>
                    <input type="submit" value="Update" className='btn btn-primary mt-3'/>
                        <br />
                    <button className='btn btn-outline-dark mt-3'><Link to={'/'}>Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Edit