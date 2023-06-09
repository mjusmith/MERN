import React, { useState } from 'react'

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");


    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");


    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const [passwordError, setPasswordError] = useState("");
    



    const handleFirst = (e) => {
        setFirstName(e.target.value);
        e.target.value.length <1 ? setFirstNameError("First name is required.") : e.target.value.length < 2 ? setFirstNameError("First name may not be shorter than 2 characters.") : setFirstNameError("");
    }
    const handleLast = (e) => {
        setLastName(e.target.value);
        e.target.value.length <1 ? setLastNameError("Last name is required.") : e.target.value.length < 2 ? setLastNameError("Last name may not be shorter than 2 characters.") : setLastNameError("");
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.target.value.length <1 ? setEmailError("Email is required.") : e.target.value.length < 2 ? setEmailError("Email may not be shorter than 2 characters.") : setEmailError("");
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        e.target.value.length <1 ? setPasswordError("Password is required.") : 
        e.target.value.length < 8 ? setPasswordError("Password may not be shorter than 8 characters.") : 
        confirmPassword !== e.target.value ? setPasswordError("Password and Confirm Password do not match.") :
        setPasswordError("");
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        confirmPassword !== password ? setPasswordError("Password and Confirm Password do not match.") : 
        setPasswordError('');
    }

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
                    <input type='text' onChange={ handleFirst } className='form-inline'></input>
                    {
                        firstNameError ?
                        <p>{ firstNameError }</p> :
                        ''
                    }
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Last Name  :</label>
                    <input type='text' onChange={ handleLast } className='form-inline'></input>
                    {
                        lastNameError ?
                        <p>{ lastNameError }</p> :
                        ''
                    }
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Email  :</label>
                    <input type='text' onChange={ handleEmail } className='form-inline'></input>
                    {
                        emailError ?
                        <p>{ emailError }</p> :
                        ''
                    }
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Password  :</label>
                    <input type='text' name='password' onChange={ handlePassword } className='form-inline'></input>
                    {
                        passwordError ?
                        <p>{ passwordError }</p> :
                        ''
                    }
                </div>
                    <br></br>
                <div className='form-group'>
                    <label>Confirm Password  :</label>
                    <input type='text' onChange= { handleConfirmPassword } ></input>
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
                                <p>Confirm Password: {confirmPassword}</p>
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