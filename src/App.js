import React, {Component} from 'react';
import fortuneslist from 'fortune-cookie';
import './App.css';
import ButtonCount from './components/ButtonCount'

//Learn Blueprint or React Bootstrap
class App extends Component  {
  render(){
    return (
      // class attribute for HTML is turned into className for React
      <div className="App"> 
        {/* <ButtonCount name="Carlos" /> */}
        <p>{fortuneslist.length}</p>
      </div>
    );
  }
}

export default App;
