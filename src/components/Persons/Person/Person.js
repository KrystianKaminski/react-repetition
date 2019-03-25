import React from 'react'
import classes from './Person.module.css'

const Person = (props) => {
    return (
        <div
            className={classes.Person}
        >
            {props.isAuth ? <p>Authentiicated!</p> : <p>Please log in!</p>}
            <p
                onClick={props.click}
            >
                I'm a {props.name}! and I'm {props.age} years old
            </p>
            <input
                type="text"
                onChange={props.changed}
                value={props.name}
            />
            <p>{props.children}</p>

        </div>
    )
}

export default Person