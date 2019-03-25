import React from 'react'
import classes from './Person.module.css'
import AuthContext from '../../../context/auth-context'

class Person extends React.Component {

    constructor(props) {
        super(props)
    }

    static contextType = AuthContext

    componentDidMount() {
        console.log(this.context.authenticated)
    }

    render() {
        return (
            <div
                className={classes.Person}
            >
                {this.context.authenticated ? <p>Authentiicated!</p> : <p>Please log in!</p>}
                <p
                    onClick={this.props.click}
                >
                    I'm a {this.props.name}! and I'm {this.props.age} years old
                </p>
                <input
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name}
                />
                <p>{this.props.children}</p>

            </div>
        )
    }
}


export default Person