import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState('')

    const [errors, setErrors] = useState([])


    const navigate= useNavigate()

    const submitHandler= (e) => {
        e.preventDefault()
        const authorObj= {name}
        axios.post('http://localhost:8000/api/authors/new', authorObj)
        .then((res) =>{
            navigate('/')
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
                <h1>Favorite Authors</h1>
                    <br></br>
                <div className='form-group'>
                    <label>Name: </label>
                    <input type='text' name='title' onChange={(e) => setName(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className='form-group'>
                    <input type="submit" value="Create" className='btn btn-primary mt-3'/>
                        <br />
                    <button className='btn btn-outline-dark mt-3'><Link to={'/'}>Cancel</Link></button>
                </div>
            </form>
        </div>
    )
}

export default Create