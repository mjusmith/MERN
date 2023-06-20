import React, {useState} from 'react'

const Form = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [des, setDes] = useState("");


    const handleTitle = (e) => {
        setTitle(e.target.value);
    }
    const handlePrice = (e) => {
        setPrice(e.target.value);
    }
    const handleDes = (e) => {
        setDes(e.target.value);
    }

    let [listOfProducts, setListOfProducts] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        let prodObj = {title, price, des}

        setListOfProducts([...listOfProducts, prodObj])
    }

    return (
        <div>

            <form onSubmit={submitHandler}>
                <br></br>
                <h1>Product Manager</h1>
                <br></br>
                <div className='form-group'>
                    <label>Title: </label>
                    <input type='text' onChange={ handleTitle } className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Price  :</label>
                    <input type='text' onChange={ handlePrice } className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Description  :</label>
                    <input type='text' onChange={ handleDes } className='form-inline'></input>
                        <br></br>
                    <input type="submit" value="Create" className='btn btn-primary mt-3'/>
                        <br></br>
                        <br></br>
                        <br></br>
                </div>
            </form>
            <div>
                {
                    listOfProducts.map((prod, index) => {
                        return (
                            <div>
                                <h3>Product</h3>
                                <p>Title: {prod.title}</p>
                                <p>Price: {prod.price}</p>
                                <p>Description: {prod.des}</p>
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