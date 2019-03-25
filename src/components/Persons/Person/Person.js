import React from 'react'
import classes from './Person.module.css'
import AuthContext from '../../../context/auth-context'

class Person extends React.Component {
    render() {
        return (
            <div
                className={classes.Person}
            >
                <AuthContext.Consumer>
                    {(context) => context.authenticated ? <p>Authentiicated!</p> : <p>Please log in!</p>}
                </AuthContext.Consumer>
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