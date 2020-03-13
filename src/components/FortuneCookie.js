import React, {Component} from 'react';
import FortuneList from 'fortune-cookie';
import {Button, Jumbotron, Container} from 'react-bootstrap';
import '../custom.css'

class FortuneCookie extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            message: 'Here you will receive your fortune!'
        }
    }

    ButtonClick = () => {
        this.setState(() => {
            let randoNum = Math.round(Math.random()*FortuneList.length);
            return({message: FortuneList[randoNum]});
        })
    }
    

    render(){
        return(
            <React.Fragment>
                <Jumbotron bsPrefix="custom-jumbotron">
                    <Container bsPrefix="custom-fortune-container">
                        <center><h1 className="custom-h1">{this.state.message}</h1>
                        <br/>
                        <Button variant="dark" onClick={this.ButtonClick}>Click to receive a new fortune!</Button>
                        </center>
                    </Container>
                </Jumbotron>
             
            </React.Fragment>
        );
    }    
}


export default FortuneCookie