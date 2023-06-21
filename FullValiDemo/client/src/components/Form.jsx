import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'


const Form = () => {
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
        .then((res) => {
            setProductList(res.data.results)
        })
        .catch((err) => {
            console.log(`useEffect Error: ${err}`)
        })
    }, [])

    return (
        <div>
            <br></br>
                <h1>Product Creator</h1>
            <button className='btn btn-outline-primary mt-3'><Link to={'/create'}>Create</Link></button>
            <br />
            <hr />
            <div>
                {
                    productList.map((prod, index) => {
                        return (
                            <div>
                                <h3>Product</h3>
                                <p>Title: {prod.title}</p>
                                <p>Price: {prod.price}</p>
                                <p>Description: {prod.description}</p>
                                <br></br>
                                <button className='btn btn-outline-primary'>View</button> <span></span>
                                <button className='btn btn-outline-info'>Edit</button> <span></span>
                                <button className='btn btn-outline-warning'>Delete</button>
                                <br></br>
                                <br></br>
                                <br></br>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Form