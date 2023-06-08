import React, {useState} from 'react'

const People = (props) => {
    const { lastName, firstName, age, hairColor } = props

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    )
}

export default People