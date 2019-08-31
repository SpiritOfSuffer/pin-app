import React, { Component } from 'react';
import { ColorPicker } from '../ColorPicker/ColorPicker';
import './PinEditor.css';

export class PinEditor extends Component {

    state = { title: '', text: '', color: '#FFFFFF' };

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
      };

    handleTextChange = e => {
        this.setState({ text: e.target.value });
    }

    handleColorChange(color) {
        this.setState({ color: color });
    }

    handlePinAdd() {
        const newPin = {
			title: this.state.title,
			text: this.state.text,
			color: this.state.color
        };
        
        this.props.pinCreate(newPin);
        this.setState({text: '', title: '', color: '#FFFFFF'});
    }


    render() {
        return(
            <div className='pinEditor'>
                <input
                    type='text'
                    className='pinEditor__title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                />
                <textarea
                    placeholder='Enter note text'
                    rows={5}
                    className='pinEditor__text'
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <div className='pinEditor__footer'>
                    <ColorPicker
                        value={this.state.color}
                        onChange={this.handleColorChange.bind(this)}
                    />
                    <button
                        className='pinEditor__button'
                        disabled={!this.state.text}
                        onClick={this.handlePinAdd.bind(this)}
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}