import React, { Component } from 'react'
import  withCounter from './withCounter'

class ButtonCount extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.name} clicked {this.props.count} times!</h1>
                <button onClick={this.props.incrementCount}>Click Here</button>
            </div>
        )
    }
}

export default withCounter(ButtonCount,7)
