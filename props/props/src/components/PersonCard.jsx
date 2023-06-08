import React, {useState} from 'react'

const People = (props) => {
    const { lastName, firstName, hairColor } = props

    const [ages, setAges] = useState(props.age)

    const addAge = () => {
        setAges(ages + 1)
    }

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>Age: {ages}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={addAge}> Birthday button for {firstName} {lastName}.</button>
        </div>
    )
}

export default People