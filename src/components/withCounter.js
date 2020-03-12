import React, {Component} from 'react'

const withCounter = (WrappedComponent,incrementNo) => {
    class WithCounter extends Component {
        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }

        countHandler = () => {
            this.setState((prevState) =>{
                return({count: prevState.count + incrementNo})
            })

        }
        
        render(){
            return <WrappedComponent count={this.state.count} 
            incrementCount={this.countHandler}
            {...this.props} //Adding props from Parent component
            />
        }
    }
    return WithCounter
}
export default withCounter

//Creating a High-Order Component (HOC) - Basic Counting Function

