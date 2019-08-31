import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { PinList } from './components/PinList/PinList';
import { PinEditor } from './components/PinEditor/PinEditor';
import api from './api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { pins: [] };
    this.handleClickDelete = this.pinDelete.bind(this);
    this.handleClickCreate = this.pinCreate.bind(this);
  }


  async componentDidMount() {
    await this.pinsRetrieve();
  }

  async pinCreate(data) {
    await api.createPin(data).then(async () => {
      await this.pinsRetrieve();
    });
  }
  async pinsRetrieve() {
    await api.getPins().then(data => {
      this.setState({ pins: data.data });
    });
  }

  async pinDelete(pin) {
    await api.deletePin(pin._id).then(() => {
      let pins = [...this.state.pins];
		  pins.splice(pins.indexOf(pin), 1);
		  this.setState({ pins: pins });
    });
  }
	/*async pinDelete(pin) {
    await api.deletePin(pin._id).then(async () => {
      //await this.pinsRetrieve();
    //});
  };*/

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <PinEditor pinCreate={this.handleClickCreate} />
        <PinList pins={this.state.pins} onDelete={this.handleClickDelete}/>
      </div>
    );
  }
}
  

export default App;
