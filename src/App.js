import React, {Component} from 'react';
import './App.css';
import ButtonCount from './components/ButtonCount'


class App extends Component  {
  render(){
    return (
      // class attribute for HTML is turned into className for React
      <div className="App"> 
        <ButtonCount name="Carlos" />
      </div>
    );
  }
}

export default App;
