import React, { Component } from 'react';
import './Pin.css';

export class Pin extends Component {
    
    render() {
        const style = {backgroundColor: this.props.color};
        return(
            <div className="pin" style={style}>
                <span className='pin__delete-icon' onClick={this.props.onDelete}>x</span>
                { this.props.title ? <h4 className='pin__title'>{this.props.title}</h4> : <h4>Default Title</h4> }
				<div className='pin__text'>{this.props.children}</div>
            </div>
        );
    }
}