import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, SetEmail] = useState("")
    const [password, setPassword] = useState("")

    let [listOfUsers, setListOfUsers] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()

        let userObj = {firstName, lastName, email, password}

        setListOfUsers([...listOfUsers, userObj])
    }
    return (
        <div>

            <form onSubmit={submitHandler}>
                <br></br>
                <br></br>
                <div className='form-group'>
                    <label>First Name  :</label>
                    <input type='text' onChange={ (e) => setFirstName(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Last Name  :</label>
                    <input type='text' onChange={ (e) => setLastName(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Email  :</label>
                    <input type='text' onChange={ (e) => SetEmail(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Password  :</label>
                    <input type='text' onChange={ (e) => setPassword(e.target.value)} className='form-inline'></input>
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Confirm Password  :</label>
                    <input></input>
                </div>
                    <br></br>
                <input type="submit" value="Add User" className='btn btn-primary mt-3'/>
                    <br></br>
                    <br></br>
            </form>
            <div>
                {
                    listOfUsers.map((user, index) => {
                        return (
                            <div>
                                <p>First name: {user.firstName}</p>
                                <p>Last Name: {user.lastName}</p>
                                <p>Email: {user.email}</p>
                                <p>Password: {user.password}</p>
                                <p>Confirm Password: {user.password}</p>
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