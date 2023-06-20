import {useParams} from "react-router";
import React, {useState, useEffect} from 'react';
import axios from 'axios';


const Planet = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState();

    useEffect(() => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(response => {
            setPlanet(response.data) 
        })
        .catch((error) => {
            console.log(error)
        })
}, [id])

    return (
    <>
        {
            planet &&
            <div style={{ margin: "20px" }}>
                <h3>Name: {planet.name}</h3>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
            </div>
        }
    </>
    )
}

export default Planet