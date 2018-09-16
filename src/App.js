import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Clock from './clock';
import {Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'December 25, 2018',
      newDeadline: '',
    }
  }

  updateNewDeadline = (event) => {
    const value = event.target.value;
    this.setState({newDeadline: value});
  }

  onChangeDate = () => {
    this.setState({deadline : this.state.newDeadline});
  }

  render() {
    return (
      <div className="App">
        <div className= 'App-title' >
          Count Down to {this.state.deadline} : <Clock deadline={this.state.deadline}/>
        </div>
          <Form inline>
            <FormControl 
              className='deadLine-input'
              placeholder = 'Change deadine'
              onChange = { event => this.updateNewDeadline(event) }
            />
            <Button onClick={() => this.onChangeDate()}>Submit</Button>
          </Form>         
      </div>
    );
  }
}

export default App;
