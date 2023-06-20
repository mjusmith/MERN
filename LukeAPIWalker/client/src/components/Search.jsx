import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import ObiWanImage from "./static/obiwan.png"

const Search = () => {
    const [user, setUser] = useState('person');
    const [id, setId] = useState();
    const [error, setError] = useState('');
    const [image, setImage] = useState(false);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        if(user === 'person' && id < 10 || 'planets' && id < 10){
            navigate(`/${user}/${id}`)
            setError('')
            setImage('');
        }
        else if (user === 'person' && id >= 11 || 'planets' && id >= 11) {
                setError("These aren't the droids you're looking for!")
                setImage(true)
                navigate('/');
        }
    }

    const userHandler = (e) => {
        setUser(e.target.value);
    }

    const idHandler = (e) => {
        setId(e.target.value);
    }

return (
    <div>
        <form onSubmit={submitHandler}>
                <div>
                    <label>Search for: </label>
                </div>
                <div>
                    <select onChange={userHandler} defaultValue={user}>
                        <option>People</option>
                        <option>Planets</option>
                    </select>
                    <br />
                    <br />
                </div>
                <div>
                    <label>Enter ID:</label>
                </div>
                <div>
                    <input onChange={idHandler} type="number" placeholder="Enter ID number" />
                </div>
                <br />
                <div>
                    <button type="submit" className="btn btn-primary">Search</button>
                </div>
        </form>
            <div>
                {image ? <img src={ObiWanImage} alt ="ObiWan Image" /> : ""}
                <h1>{error}</h1>
            </div>
    </div>
    )
}

export default Search