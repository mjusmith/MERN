import React, {useState} from 'react'


const FetchAPI = () => {

    const [coin, setCoin] = useState ([])

    const fetchData = ( ) => {
        fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en")
        .then((response) => {
            return response.json()
        })
        .then((response) => {
            console.log(response)
            setCoin(response)
        })
        .catch((error) => {
            console.log("Text error:", error)
        })
    }

return (
    <div>
        
        <h1>fetch API demo</h1>
        <button onClick={fetchData} classname='btn btn-outline-dark'>Fetch Data</button>
        {
            coin.map((c, i) => {
                return(
                    <div key={i}> 
                        <hr></hr>
                        <p>Index Value: {i}</p>
                        <h1>{c.name}</h1>
                        <h3>{c.id}</h3>
                        <h4>{c.current_price}</h4>
                        <img src={c.image} alt="coin img" height="100px" />
                    </div>
                )
            })
        }
    </div>
)
}

export default FetchAPI