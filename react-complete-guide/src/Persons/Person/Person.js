import React from 'react'
import ErrorBoundary from '../../ErrorBoundary/ErrorBoundary'
import './Person.css'

const person = (props) => {
    const rnd = Math.random()
    if (rnd > 0.9)
        throw new Error("Something Went Wrong in Person Component!!!!");
    return (
        <div className="Person" onClick={props.click}>
            <h1 >This is a useless number : {Math.floor(Math.random() * 10) + 1}</h1>
            <h2>{props.name} {props.age}</h2>
            <input type="text" onChange={props.changed} />
        </div>
    )
}

export default person