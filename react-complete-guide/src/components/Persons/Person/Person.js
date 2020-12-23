import React from 'react'
import './Person.css'

const person = (props) => {
    return (
        <div className="Person" onClick={props.click}>
            <h1 >This is a useless number : {Math.floor(Math.random() * 10) + 1}</h1>
            <h2>{props.name} {props.age}</h2>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person