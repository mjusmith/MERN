import {useParams} from "react-router";
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Person = ( ) => {
    const {id} = useParams();
    const [person, setPerson] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(response => {
            setPerson(response.data) 
        })
        .catch((error) => {
            console.log(error)
        })
}, [id])

    return (
    <div>
        {
            person &&
            <div>
                <h2>Name: {person.name}</h2>
                <p>Height: {person.height}</p>
                <p>Mass: {person.mass}</p>
                <p>Hair Color: {person.hair_color}</p>
                <p>Skin Color: {person.skin_color}</p>
            </div>
        }
    </div>
    )
}

export default Person