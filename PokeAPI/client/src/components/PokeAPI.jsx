import React, {useState} from 'react'

const PokeAPI = () => {

const [poke, setPoke] = useState ([])

const fetchPoke = ( ) => {
    fetch("http://pokeapi.co/api/v2/pokemon/?limit=811")
    .then((response) => {
        return response.json()
    })
    .then((response) => {
        console.log(response)
        setPoke(response.results)
    })
    .catch((error) => {
        console.log("Error Text:", error )
    })
}



return (
    <div>
        <h1>PokeNames</h1>
        <button onClick={fetchPoke}> Fetch PokeNames </button>
        {
            poke.map((p, i) => {
                return(
                    <div key={i}>
                        <hr></hr>
                        <br></br>
                        <p>Index Value: {i}</p>
                        <p>{p.name}</p>
                    </div>
                )
            })
        }
    </div>
)
}

export default PokeAPI